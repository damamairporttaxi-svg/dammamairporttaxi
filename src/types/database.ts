export type BookingStatus =
  | "pending"
  | "confirmed"
  | "driver_assigned"
  | "in_progress"
  | "completed"
  | "cancelled";

export type VehicleType = "sedan" | "suv" | "van" | "luxury";

export interface Booking {
  id: string;
  ref: string;
  name: string;
  email: string;
  phone: string;
  pickup_location: string;
  dropoff_location: string;
  pickup_date: string;
  pickup_time: string;
  passengers: number;
  luggage: number;
  vehicle_type: VehicleType;
  service_type: string;
  flight_number?: string;
  special_notes?: string;
  price: number;
  discount_amount: number;
  final_price: number;
  promo_code?: string;
  status: BookingStatus;
  driver_name?: string;
  driver_phone?: string;
  driver_plate?: string;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  total_bookings: number;
  total_spent: number;
  created_at: string;
}

export interface PromoCode {
  id: string;
  code: string;
  discount_type: "percentage" | "fixed";
  discount_value: number;
  min_order?: number;
  max_uses?: number;
  used_count: number;
  active: boolean;
  expires_at?: string;
  created_at: string;
}

export interface Fleet {
  id: string;
  name: string;
  vehicle_type: VehicleType;
  plate: string;
  driver_name: string;
  driver_phone: string;
  capacity: number;
  status: "available" | "busy" | "maintenance";
  created_at: string;
}

export interface Pricing {
  id: string;
  route_name: string;
  slug: string;
  sedan_price: number;
  suv_price: number;
  van_price: number;
  luxury_price: number;
  distance_km: number;
  duration_min: number;
  updated_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  booking_id?: string;
  customer_name: string;
  rating: number;
  comment: string;
  published: boolean;
  created_at: string;
}

export interface AuditLog {
  id: string;
  admin_email: string;
  action: string;
  entity: string;
  entity_id: string;
  details: Record<string, unknown>;
  created_at: string;
}

export interface SupportTicket {
  id: string;
  booking_id?: string;
  customer_name: string;
  customer_email: string;
  subject: string;
  message: string;
  status: "open" | "in_progress" | "resolved";
  created_at: string;
  updated_at: string;
}

export interface WhatsappTemplate {
  id: string;
  name: string;
  trigger: string;
  message: string;
  active: boolean;
  created_at: string;
}

export interface SiteSettings {
  id: string;
  key: string;
  value: string;
  updated_at: string;
}

// Supabase Database type map
export type Database = {
  public: {
    Tables: {
      bookings: { Row: Booking; Insert: Partial<Booking>; Update: Partial<Booking> };
      customers: { Row: Customer; Insert: Partial<Customer>; Update: Partial<Customer> };
      promo_codes: { Row: PromoCode; Insert: Partial<PromoCode>; Update: Partial<PromoCode> };
      fleet: { Row: Fleet; Insert: Partial<Fleet>; Update: Partial<Fleet> };
      pricing: { Row: Pricing; Insert: Partial<Pricing>; Update: Partial<Pricing> };
      blogs: { Row: Blog; Insert: Partial<Blog>; Update: Partial<Blog> };
      reviews: { Row: Review; Insert: Partial<Review>; Update: Partial<Review> };
      audit_log: { Row: AuditLog; Insert: Partial<AuditLog>; Update: Partial<AuditLog> };
      support_tickets: { Row: SupportTicket; Insert: Partial<SupportTicket>; Update: Partial<SupportTicket> };
      whatsapp_templates: { Row: WhatsappTemplate; Insert: Partial<WhatsappTemplate>; Update: Partial<WhatsappTemplate> };
      site_settings: { Row: SiteSettings; Insert: Partial<SiteSettings>; Update: Partial<SiteSettings> };
    };
  };
};
