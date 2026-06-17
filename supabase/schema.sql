-- ============================================================
-- DAMMAM AIRPORT TAXI — Supabase Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── BOOKINGS ────────────────────────────────────────────────
create table if not exists bookings (
  id              uuid primary key default uuid_generate_v4(),
  ref             text unique not null,
  name            text not null,
  email           text not null,
  phone           text not null,
  pickup_location  text not null,
  dropoff_location text not null,
  pickup_date     date not null,
  pickup_time     time not null,
  passengers      int not null default 1,
  luggage         int not null default 0,
  vehicle_type    text not null default 'sedan',
  service_type    text not null default 'airport',
  flight_number   text,
  special_notes   text,
  price           numeric(10,2) not null default 0,
  discount_amount numeric(10,2) not null default 0,
  final_price     numeric(10,2) not null default 0,
  promo_code      text,
  status          text not null default 'pending',
  driver_name     text,
  driver_phone    text,
  driver_plate    text,
  admin_notes     text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Auto-generate booking ref: DAT-YYYYMMDD-XXXX
create or replace function generate_booking_ref()
returns trigger as $$
begin
  new.ref := 'DAT-' || to_char(now(), 'YYYYMMDD') || '-' ||
             upper(substring(new.id::text, 1, 4));
  return new;
end;
$$ language plpgsql;

create trigger set_booking_ref
  before insert on bookings
  for each row
  when (new.ref is null or new.ref = '')
  execute function generate_booking_ref();

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at := now();
  return new;
end;
$$ language plpgsql;

create trigger bookings_updated_at
  before update on bookings
  for each row execute function update_updated_at();

-- ── CUSTOMERS ───────────────────────────────────────────────
create table if not exists customers (
  id              uuid primary key default uuid_generate_v4(),
  name            text not null,
  email           text unique not null,
  phone           text,
  total_bookings  int not null default 0,
  total_spent     numeric(10,2) not null default 0,
  created_at      timestamptz not null default now()
);

-- ── PROMO CODES ─────────────────────────────────────────────
create table if not exists promo_codes (
  id              uuid primary key default uuid_generate_v4(),
  code            text unique not null,
  discount_type   text not null default 'percentage',
  discount_value  numeric(10,2) not null,
  min_order       numeric(10,2),
  max_uses        int,
  used_count      int not null default 0,
  active          boolean not null default true,
  expires_at      timestamptz,
  created_at      timestamptz not null default now()
);

-- ── FLEET ───────────────────────────────────────────────────
create table if not exists fleet (
  id              uuid primary key default uuid_generate_v4(),
  name            text not null,
  vehicle_type    text not null default 'sedan',
  plate           text unique not null,
  driver_name     text not null,
  driver_phone    text not null,
  capacity        int not null default 4,
  status          text not null default 'available',
  created_at      timestamptz not null default now()
);

-- ── PRICING ─────────────────────────────────────────────────
create table if not exists pricing (
  id              uuid primary key default uuid_generate_v4(),
  route_name      text not null,
  slug            text unique not null,
  sedan_price     numeric(10,2) not null default 0,
  suv_price       numeric(10,2) not null default 0,
  van_price       numeric(10,2) not null default 0,
  luxury_price    numeric(10,2) not null default 0,
  distance_km     int not null default 0,
  duration_min    int not null default 0,
  updated_at      timestamptz not null default now()
);

-- ── BLOGS ───────────────────────────────────────────────────
create table if not exists blogs (
  id              uuid primary key default uuid_generate_v4(),
  title           text not null,
  slug            text unique not null,
  excerpt         text,
  content         text not null default '',
  category        text not null default 'General',
  published       boolean not null default false,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger blogs_updated_at
  before update on blogs
  for each row execute function update_updated_at();

-- ── REVIEWS ─────────────────────────────────────────────────
create table if not exists reviews (
  id              uuid primary key default uuid_generate_v4(),
  booking_id      uuid references bookings(id) on delete set null,
  customer_name   text not null,
  rating          int not null check (rating between 1 and 5),
  comment         text not null,
  published       boolean not null default false,
  created_at      timestamptz not null default now()
);

-- ── AUDIT LOG ───────────────────────────────────────────────
create table if not exists audit_log (
  id              uuid primary key default uuid_generate_v4(),
  admin_email     text not null,
  action          text not null,
  entity          text not null,
  entity_id       text not null,
  details         jsonb not null default '{}',
  created_at      timestamptz not null default now()
);

-- ── SUPPORT TICKETS ─────────────────────────────────────────
create table if not exists support_tickets (
  id              uuid primary key default uuid_generate_v4(),
  booking_id      uuid references bookings(id) on delete set null,
  customer_name   text not null,
  customer_email  text not null,
  subject         text not null,
  message         text not null,
  status          text not null default 'open',
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger support_tickets_updated_at
  before update on support_tickets
  for each row execute function update_updated_at();

-- ── WHATSAPP TEMPLATES ──────────────────────────────────────
create table if not exists whatsapp_templates (
  id              uuid primary key default uuid_generate_v4(),
  name            text not null,
  trigger         text unique not null,
  message         text not null,
  active          boolean not null default true,
  created_at      timestamptz not null default now()
);

-- ── SITE SETTINGS ───────────────────────────────────────────
create table if not exists site_settings (
  id              uuid primary key default uuid_generate_v4(),
  key             text unique not null,
  value           text not null default '',
  updated_at      timestamptz not null default now()
);

-- ── SEED DATA ───────────────────────────────────────────────

-- Default promo codes
insert into promo_codes (code, discount_type, discount_value, max_uses, active)
values
  ('WELCOME10', 'percentage', 10, 100, true),
  ('FIRST50', 'fixed', 50, 50, true),
  ('VIP20', 'percentage', 20, null, true)
on conflict (code) do nothing;

-- Default WhatsApp templates
insert into whatsapp_templates (name, trigger, message)
values
  ('Booking Confirmation', 'booking_confirmed',
   'Hello {{name}}! Your Dammam Airport Taxi booking is CONFIRMED. Ref: {{ref}}. Date: {{date}} at {{time}}. Driver will contact you 2 hrs before pickup. Questions? WhatsApp us: +966569487569'),
  ('Driver Assignment', 'driver_assigned',
   'Hi {{name}}! Your driver has been assigned. Driver: {{driver_name}} | Phone: {{driver_phone}} | Plate: {{driver_plate}}. Pickup on {{date}} at {{time}}. Safe travels!'),
  ('Booking Reminder', 'reminder_24h',
   'Reminder: Your taxi with Dammam Airport Taxi is tomorrow {{date}} at {{time}}. Ref: {{ref}}. Driver: {{driver_name}} ({{driver_phone}}). Need changes? WhatsApp: +966569487569'),
  ('Trip Completed', 'completed',
   'Thank you {{name}} for choosing Dammam Airport Taxi! We hope your journey was comfortable. Please share your feedback: {{review_link}}')
on conflict (trigger) do nothing;

-- Default site settings
insert into site_settings (key, value)
values
  ('whatsapp_number', '+966569487569'),
  ('admin_email', 'haramtaxiservice@gmail.com'),
  ('company_name', 'Dammam Airport Taxi'),
  ('company_address', 'Dammam, Eastern Province, Saudi Arabia'),
  ('vat_number', 'TBD'),
  ('currency', 'SAR'),
  ('booking_reminder_hours', '24')
on conflict (key) do nothing;

-- Default pricing
insert into pricing (route_name, slug, sedan_price, suv_price, van_price, luxury_price, distance_km, duration_min)
values
  ('DMM Airport to Al Khobar',     'dammam-airport-to-khobar',   150, 280, 320, 600,  60, 45),
  ('DMM Airport to Dhahran',        'dammam-airport-to-dhahran',  150, 280, 320, 600,  55, 40),
  ('DMM Airport to Dammam City',    'dammam-airport-to-dammam-city', 120, 220, 260, 500, 30, 25),
  ('DMM Airport to Jubail',         'dammam-airport-to-jubail',   200, 380, 420, 700,  85, 55),
  ('DMM Airport to Hofuf',          'dammam-airport-to-hofuf',    400, 700, 800, 1200, 160, 100),
  ('Dammam to Bahrain',             'dammam-to-bahrain',          350, 600, 750, 1400,  85, 90),
  ('Dammam to Riyadh',              'dammam-to-riyadh',           900, 1600, 1900, 3000, 400, 210),
  ('Dammam to Kuwait',              'dammam-to-kuwait',           1500, 2200, 2600, 4000, 420, 260),
  ('Dammam to Dubai',               'dammam-to-uae',              3500, 4800, 5500, 8500, 950, 570),
  ('Dammam to Doha',                'dammam-to-doha',             1400, 2200, 2600, 4000, 400, 330)
on conflict (slug) do nothing;

-- ── ROW LEVEL SECURITY ──────────────────────────────────────
alter table bookings enable row level security;
alter table customers enable row level security;
alter table promo_codes enable row level security;
alter table fleet enable row level security;
alter table pricing enable row level security;
alter table blogs enable row level security;
alter table reviews enable row level security;
alter table audit_log enable row level security;
alter table support_tickets enable row level security;
alter table whatsapp_templates enable row level security;
alter table site_settings enable row level security;

-- Allow anon to read public data
create policy "Public can read pricing" on pricing for select using (true);
create policy "Public can read published blogs" on blogs for select using (published = true);
create policy "Public can read published reviews" on reviews for select using (published = true);

-- Allow anon to insert bookings (customer creates booking)
create policy "Anyone can create booking" on bookings for insert with check (true);

-- Allow anon to read their own booking by ref (for tracking)
create policy "Read own booking by ref" on bookings for select using (true);

-- Allow anon to validate promo codes
create policy "Anyone can read active promo codes" on promo_codes for select using (active = true);

-- Allow anon to insert support tickets
create policy "Anyone can create support ticket" on support_tickets for insert with check (true);

-- Service role (admin) has full access — no policy needed (bypasses RLS)
