# Dammam Airport Taxi — Topical Map, AEO / GEO / NLP & Competitor Strategy

Prepared 2026-11-16. Based on: the live codebase, the owner's Google Search Console export, and public competitor research (web search; competitor claims are marketing copy, not verified).

---

## 1. Where we stand (from GSC + code audit)

| Signal | Finding | Meaning |
|---|---|---|
| Clicks | `/contact` 19, `/gcc-border-crossing` 6, `/` 6, `/routes` 4. Route pages: 0 | Money pages are not ranking yet |
| Top query | "dammam airport whatsapp number" (132 impr, 7 clicks) | Brand/contact intent. Mostly people looking for *any* airport number — convert them with a clear CTA |
| Bahrain demand | ~25 query variants, ~150 impressions: dammam→bahrain, **bahrain→dammam**, BAH→dammam, dammam train station→Janabiya | Bahrain is the #1 revenue topic; the Bahrain→Saudi direction was uncovered until now |
| Border demand | Nuwaiseeb, Batha, Salwa, Khafji, Durra, Salmi, "saudi kuwait border" | Informational, long-tail, good for AEO |
| Typo URL | `/gcc-border-contract` | Now 308-redirected |

### Site problems that block ranking (fix before more content)

1. **Arabic is not indexable.** Language is switched client-side (localStorage). There are no `/ar/...` URLs, and `hreflang="en"` and `hreflang="ar"` in `layout.tsx` both point to the homepage. Google sees English only. Fix: real Arabic URLs (`/ar/routes/...`) with correct reciprocal hreflang, or drop the fake hreflang tags.
2. **Blog posts have no URLs.** `/blog` opens articles in a modal, so none of the 19 posts can rank or be cited by AI engines. Each needs its own URL (`/blog/<slug>`), Article schema and a date.
3. **`AggregateRating` 4.9 / 2000 reviews is hardcoded** in `layout.tsx`. If those are not real, verifiable reviews, this violates Google's structured-data policy and risks a manual action that removes rich results. Replace with real review data (Google Business Profile) or remove it.
4. **Titles are long** on older route pages (Bahrain pages already shortened).
5. **`topicalMap.ts` clusters are documentation only**; internal links come from `relatedPagesMap`. Wire clusters into automatic pillar↔cluster links.

---

## 2. Competitor analysis

| Competitor | Type | What they do well | Gap we can own |
|---|---|---|---|
| **taxiserviceksa.com** | Khobar/Dammam local operator — closest rival | Dedicated route + location pages (khobar-bahrain, dammam-bahrain, dammam-doha, dhahran), "100% private VIP", mentions handling causeway insurance paperwork. Says Khobar→Manama ~1.5 h. Lists "To Bahrain from 350 SAR" | Direction is mostly KSA→Bahrain. Little border education, no fare table, no Arabic-indexable content, no per-nationality documents guidance |
| **Blacklane** (dammam chauffeur / limousine / long-distance Dammam→Bahrain) | Global chauffeur marketplace | Brand trust, ~60 min free wait, flight tracking, polished pages | Premium price, generic city template, no local border knowledge, no Bahrain→Saudi pages |
| **Sixt Ride** | Global chauffeur | Brand | Does not work directly with local taxi operators; no cross-border depth |
| **Uber / Careem** | Ride-hailing | Awareness. Careem launched a Bahrain–Saudi service in the past | Cross-border availability is limited and varies; we answer "can I use Uber/Careem to Bahrain?" honestly and then convert |
| **Transfeero, airporttransferportal, welcomepickups, oneclickdrive** | Aggregators / directories | Broad route coverage, price listings | One directory states it has **no verified operator for BAH→Dammam City Center** — a direct opening |
| **rome2rio, expat.com, britishexpats, aramcoexpats forums** | Informational / UGC | Rank for "how to", price chatter (forum quotes 200–250 SAR single trip, up to ~350 SAR for premium service) | Outdated, anecdotal. AI engines cite them because nobody authoritative answers |
| **Official: mtt.gov.bh/taxis, news (Gulf News, Arab News)** | Authority | Gulf News reported a regulation allowing licensed taxis to carry passengers across the King Fahd Causeway | We should cite and explain this rule (verify the current wording before publishing) |

### Price reality check (business decision, not an SEO one)
Public listings put a one-way Dammam/Khobar ↔ Bahrain taxi at roughly **200–350 SAR**. Our published fare is **400 SAR sedan**. This is defensible only if the page clearly sells the difference (tolls included, free 60-min wait, flight tracking, door-to-door, fixed price, 24/7). If conversion is low, test a lower "Standard" tier rather than hiding the price.

### Where we are genuinely unique (build the strategy on these)
1. **Both directions + every Eastern Province node.** 41+ route pages including Bahrain→X (15 pages) — competitors only have Dammam→X.
2. **Published fixed-fare table for all vehicle classes** (competitors hide prices or say "from").
3. **Border glossary** (Khafji = Nuwaiseeb, Batha = Ghuwaifat, Salwa = Abu Samra, Durra ≠ border) — nobody ties these names together for taxi buyers.
4. **Booking operations:** WhatsApp 24/7, admin invoices, partial payment for round trips, tracking page — a trust story competitors don't tell.
5. **Bilingual EN/AR** — a real advantage once Arabic URLs exist.

---

## 3. Topical map

Format: **Pillar** → clusters. `[exists]` = live now, `[NEW]` = to build.

### Cluster A — Saudi ↔ Bahrain (priority 1, revenue)
**Pillar:** `/routes/dammam-to-bahrain` (promote to a hub page "Saudi–Bahrain Taxi Guide" listing every route below).

*Transactional (routes)*
- [exists] Dammam→Bahrain; Bahrain→Dammam; Bahrain→Khobar, Dhahran, Jubail, Dammam Airport, Dammam Railway, Qatif, Ras Tanura, Ras Al Khair, Tanajib, Khafji, Al Hassa, Hofuf
- [exists] Dammam Airport→Bahrain Airport; Bahrain Airport (BAH)→Dammam Airport; Dammam Railway Station→Bahrain
- [NEW] Khobar→Bahrain, Dhahran→Bahrain, Jubail→Bahrain, Qatif→Bahrain, Hofuf/Al Hassa→Bahrain (reverse of the table above)
- [NEW] Bahrain Airport (BAH)→Khobar; Bahrain→Aramco / Dhahran Techno Valley; Bahrain→Dammam Corniche hotels
- [NEW] Same-day return / round-trip Bahrain page (we now support split payment)

*Informational (AEO targets)*
- How much is the King Fahd Causeway toll and who pays?
- King Fahd Causeway opening hours and best time to cross (Thu/Fri/Sat peaks)
- Documents to enter Bahrain by road: Saudi citizen / GCC / Iqama holder (link to Bahrain official portal)
- Can taxis cross the causeway? (the licensed-taxi rule; cite official source)
- Taxi vs bus vs own car vs Careem/Uber to Bahrain — comparison table
- Causeway vehicle insurance and "Saudi car in Bahrain" rules
- Janabiya, Juffair, Seef, Amwaj, Riffa, Muharraq: districts guide with drive time from Dammam/Khobar
- Bahrain Grand Prix / big-event transport guide (seasonal spike)
- Eid and holiday causeway traffic guide

### Cluster B — Dammam Airport (DMM)
**Pillar:** `/dammam-airport-guide`
- [exists] 9 airport routes. [NEW] DMM→Al Khobar Corniche, DMM→Aramco Dhahran, DMM→Half Moon Bay hotels (extend), DMM→Riyadh, DMM→Bahrain with luggage/families
- [NEW] Informational: DMM arrivals meet & greet steps; DMM terminal map; DMM taxi fares (official vs private); airport helpline/WhatsApp (answers the top GSC query honestly — "we are not the airport; here is our number, and here is how to reach the airport")
- [NEW] Flight-delay policy and 60-minute wait explained

### Cluster C — GCC border crossings
**Pillar:** `/gcc-border-crossing`
- [exists] Kuwait, UAE, Qatar, Muscat, Doha, Abu Dhabi, Sharjah, Ajman, RAK
- [NEW] One page per border: King Fahd Causeway, Khafji/Nuwaiseeb, Al Batha/Ghuwaifat, Salwa/Abu Samra, plus a "Salmi/Al Raqai" explainer (different route)
- [NEW] Documents by nationality; Exit/Re-entry for Iqama holders; "Can I cross with a rental car?"; border wait-time guide by day/season

### Cluster D — Saudi intercity (long distance)
**Pillar:** `/routes` (convert into a real hub with filters)
- [exists] Riyadh, Jeddah, Madinah, Mecca, Qassim, Taif, Yanbu, Abha, Tabuk, Hail
- [NEW] Umrah/Hajj transfer pages (Dammam→Mecca/Madinah packages), family-with-luggage guides, overnight stop planning

### Cluster E — Eastern Province cities & districts
**Pillar:** `/dammam-guide`
- [exists] Khobar, Dhahran, Jubail, Qatif, 21 Dammam districts
- [NEW] Al Ahsa (UNESCO oasis) tourism, Ras Tanura, Jubail Industrial City, Half Moon Bay, Corniche hotels

### Cluster F — Corporate / industrial
**Pillar:** `/corporate-transfers`
- [NEW] Aramco contractors, SABIC / Jubail Industrial City, monthly contracts, VAT invoice sample, staff shuttle quote, meeting & event transfers

### Cluster G — Brand & trust (E-E-A-T)
- About, fleet, fixed pricing policy, safety, licensing & permits (state real licence numbers), contact (WhatsApp), reviews, terms, privacy

### Cluster H — Tourism & events
**Pillar:** `/tourist-destinations`
- Bahrain attractions (Manama, Bahrain Fort, Pearl path), Al Ahsa, Khobar Corniche, Half Moon Bay, Dubai/Doha trip planning from Dammam

---

## 4. Semantic / NLP entity layer

**Core entities to use consistently (same spelling every time):**
King Fahd Causeway • King Fahd International Airport (DMM) • Bahrain International Airport (BAH) • Dammam • Al Khobar • Dhahran • Jubail • Qatif • Manama • Janabiya • Juffair • Seef • Al Ahsa / Hofuf • Eastern Province • Khafji / Nuwaiseeb • Al Batha / Ghuwaifat • Salwa / Abu Samra • Ras Tanura • Saudi Aramco.

**Triple patterns (state these plainly on pages so engines can extract them):**
- King Fahd Causeway — connects — Al Khobar (Saudi Arabia) and Manama area (Bahrain)
- Dammam to Bahrain — distance — ~85 km; duration — 1.5–2 h; fare — 400 SAR sedan
- Khafji border (Saudi side) — is the same crossing as — Nuwaiseeb (Kuwait side)
- Dammam Airport Taxi — serves — [route list]; operates — 24/7; contact — +966 59 141 9157

**Attribute checklist per route page** (NLP/featured-snippet friendly): origin, destination, distance, duration, fare per vehicle, what is included (tolls, wait time), border crossing used, documents, peak times, booking method.

**Query-intent patterns to cover in headings (from GSC):** "X to Y taxi", "X to Y taxi price/fare/cost", "taxi from X to Y", "X to Y distance", "X to Y by road", "X border requirements", "<border> location", "<place> whatsapp number".

---

## 5. AEO (answer-engine) playbook

1. **Answer-first block** under each H1: 40–60 words — "A taxi from Dammam to Bahrain costs from 400 SAR (sedan), takes 1.5–2 hours, and includes causeway tolls." Then expand.
2. **One question = one H2/H3 + a direct answer** (the FAQ list in `routesData.ts` already does this; expand to 6–8 per route).
3. **Comparison tables** (vehicle × price × passengers; taxi vs bus vs own car).
4. **Schema:** `FAQPage` (exists), `BreadcrumbList` (exists), `TaxiService` + `Offer` (exists), add `HowTo` for booking and border steps, `Article` for blog, `Organization` with `sameAs` (Google Business Profile, Facebook, Instagram, WhatsApp Business), `speakable` on the answer block. **Do not add fake `Review`/`AggregateRating`.**
5. **Freshness:** visible "Last updated" date and a monthly review of prices, border rules and documents.
6. **Voice search:** keep `/voice-search-faqs` but ensure each answer is ≤ 30 words and linked from the relevant route.

---

## 6. GEO (generative-engine) playbook

1. **`/llms.txt`** (added) summarising the business, routes, prices, contact, and canonical URLs for AI crawlers.
2. **Cite authorities** in border/document pages (official Bahrain government portal, Saudi passports/GACA, causeway authority) — AI engines prefer pages that cite primary sources.
3. **Original data AI can quote:** the published fare table (all routes × all vehicle classes), border-name glossary, measured crossing times by day (collect from real trips), peak-day calendar. Original numbers get cited.
4. **Consistent facts everywhere:** same phone, address, hours, price in site, Google Business Profile, Bing Places, Facebook, directories (NAP consistency).
5. **Brand mentions off-site:** answer expat questions (expat.com, aramcoexpats, britishexpats, Reddit r/saudiarabia, r/Bahrain) with genuine, non-spam help and a link where allowed; list on Tripadvisor-type directories.
6. **Reviews:** collect real Google reviews and display them; this is the strongest local + AI trust signal.
7. Allow AI crawlers in `robots.txt` (currently allowed by `*`). Keep `/api/` blocked.

---

## 7. Build roadmap

**Phase 1 — Fix foundations (week 1–2)**
- [x] `AggregateRating` removed (re-add only with real, verifiable reviews)
- [x] Fake hreflang removed; real Arabic URLs added for all route pages (`/ar/routes/<slug>`) with reciprocal hreflang. Still English-only: home, hubs, blog (blog shows Arabic text under the English)
- [x] Each blog post has its own URL (`/blog/<slug>`) + BlogPosting schema, in sitemap
- [x] `llms.txt` added. [ ] Organization `sameAs` — needs real social/GBP URLs from the owner
- [x] Long titles shortened site-wide for route pages. [ ] Submit new URLs in Search Console (manual)

**Phase 2 — Bahrain dominance (week 2–4)**
- [x] Reverse routes added (Khobar, Dhahran, Jubail, Qatif, Al Hassa, Hofuf → Bahrain)
- [x] Bahrain hub page `/saudi-bahrain-taxi` (fare table, comparison, FAQ schema). [ ] 8 informational articles still to write
- [ ] Round-trip / same-day return page

**Phase 3 — Border & airport authority (month 2)**
- [ ] One page per border crossing; documents-by-nationality
- [x] "Airport WhatsApp/helpline number" FAQ added to the DMM guide. [ ] Per-border pages still to write

**Phase 4 — Scale & trust (month 3+)**
- [ ] Corporate cluster, Umrah transfers, events (Bahrain GP)
- [ ] Real reviews, Google Business Profile posts, forum answers
- [ ] Monthly refresh + GSC review of queries/CTR/position

**KPIs:** impressions & clicks per cluster in GSC, route-page CTR, WhatsApp clicks, bookings by source, AI citation checks (search target questions monthly in ChatGPT / Perplexity / Gemini and record whether we are cited).

---

## 8. Unverified items — confirm before publishing
- Current official wording of the causeway taxi regulation (reported by Gulf News; check the Bahrain Ministry of Transportation / Saudi TGA pages).
- Distances/durations on the new Bahrain routes are approximate.
- Whether the business holds the licences/permits the pages imply for cross-border passenger transport; state real permit details on an About/Licensing page.
