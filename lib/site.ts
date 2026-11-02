export const brand = {
  name: "Weftora",
  full: "Weftora Global Sourcing",
  short: "WGS",
  tagline: "Apparel sourcing, woven with intent.",
  email: "hello@weftora.com",
  phone: "+880 1700-000000",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/management", label: "Management" },
  { href: "/products", label: "Products" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

export const explore = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/fabric-library", label: "Fabric Library" },
  { href: "/life", label: "Life at Weftora" },
  { href: "/faq", label: "FAQ" },
  { href: "/social", label: "Social Feed" },
  { href: "/contact", label: "Contact Us" },
];

export const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export const offices = [
  {
    city: "Hong Kong",
    photo: "photo-1758448500688-3ababa93fd67",
    country: "Hong Kong SAR",
    flag: "🇭🇰",
    role: "Global Headquarters",
    address: "Suite 2208, Harbour Crest Tower, 88 Gloucester Road, Wan Chai, Hong Kong",
    phone: "+852 3000 0000",
    email: "hk@weftora.com",
  },
  {
    city: "Dhaka",
    photo: "photo-1497366811353-6870744d04b2",
    country: "Bangladesh",
    flag: "🇧🇩",
    role: "Operations & Corporate Office",
    address: "Level 9, Lakeview Plaza, Plot 21, Gulshan Avenue, Dhaka 1212",
    phone: "+880 1700-000000",
    email: "bd@weftora.com",
  },
  {
    city: "Gurugram",
    photo: "photo-1497366754035-f200968a6e72",
    country: "India",
    flag: "🇮🇳",
    role: "Operations Office",
    address: "Unit 1104, Skyline Business Park, Sector 62, Gurugram, Haryana 122011",
    phone: "+91 90000 00000",
    email: "in@weftora.com",
  },
  {
    city: "Manchester",
    photo: "photo-1774953037913-af0cf688491a",
    country: "United Kingdom",
    flag: "🇬🇧",
    role: "Sales & Design Studio",
    address: "Studio 4, Mill Yard, 12 Ancoats Street, Manchester M4 6DE, England",
    phone: "+44 7000 000000",
    email: "uk@weftora.com",
  },
  {
    city: "Keqiao",
    photo: "photo-1715593949273-09009558300a",
    country: "China",
    flag: "🇨🇳",
    role: "Fabric Sourcing Desk",
    address: "Room 1608, Textile Trade Centre, Keqiao District, Shaoxing, Zhejiang",
    phone: "+86 180 0000 0000",
    email: "cn@weftora.com",
  },
  {
    city: "Dubai",
    photo: "photo-1525896544042-354764aa27e6",
    country: "UAE",
    flag: "🇦🇪",
    role: "Middle East Desk",
    address: "Office 3207, Marina Gate Business Tower, Jumeirah Lake Towers, Dubai",
    phone: "+971 50 000 0000",
    email: "ae@weftora.com",
  },
];

export const markets = [
  { flag: "🇬🇧", name: "United Kingdom", region: "Europe" },
  { flag: "🇨🇦", name: "Canada", region: "North America" },
  { flag: "🇫🇷", name: "France", region: "Europe" },
  { flag: "🇩🇪", name: "Germany", region: "Europe" },
  { flag: "🇵🇱", name: "Poland", region: "Eastern Europe" },
  { flag: "🇦🇪", name: "UAE", region: "Middle East" },
  { flag: "🇮🇳", name: "India", region: "South Asia" },
  { flag: "🇦🇺", name: "Australia", region: "Oceania" },
];

export const categories = [
  "Womenswear",
  "Menswear",
  "Girlswear",
  "Boyswear",
  "Loungewear",
  "Sweaterwear",
] as const;
export type Category = (typeof categories)[number];

export type Product = {
  code: string;
  name: string;
  category: Category;
  fabric: string;
  gsm: number;
  photo: string;
  tone: string;
};

/** Unsplash CDN url for a photo id, cropped to width w. */
export const img = (id: string, w = 900, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

// Demo photography (Unsplash licence) — swap for the client's own product shots.
export const products: Product[] = [
  { code: "WF-W-101", name: "Ivory Tiered Midi", category: "Womenswear", fabric: "Viscose Challis", gsm: 110, photo: "photo-1520026582657-4daf5bb60adb", tone: "#efe9dd" },
  { code: "WF-W-102", name: "Terracotta Shirt Dress", category: "Womenswear", fabric: "Linen-Cotton 55/45", gsm: 150, photo: "photo-1789110853872-f416085557fa", tone: "#c4572f" },
  { code: "WF-W-103", name: "Sand V-Neck Top", category: "Womenswear", fabric: "Modal Jersey", gsm: 160, photo: "photo-1567966456076-905a50a06d8c", tone: "#d8c7ac" },
  { code: "WF-W-104", name: "Graphite Tailored Blazer", category: "Womenswear", fabric: "Poly-Viscose Suiting", gsm: 240, photo: "photo-1608234808654-2a8875faa7fd", tone: "#7c7f84" },
  { code: "WF-W-105", name: "Camel Wool-Blend Coat", category: "Womenswear", fabric: "Wool-Poly Melton", gsm: 420, photo: "photo-1618244965061-1d27b208d6e8", tone: "#8a6440" },
  { code: "WF-W-106", name: "Midnight Midi Dress", category: "Womenswear", fabric: "Recycled Poly Crepe", gsm: 130, photo: "photo-1619794724492-651397287d94", tone: "#1d1f24" },

  { code: "WF-M-201", name: "Harbour Oxford Shirt", category: "Menswear", fabric: "Cotton Oxford", gsm: 135, photo: "photo-1740711152088-88a009e877bb", tone: "#8fb1d6" },
  { code: "WF-M-202", name: "Tan Field Jacket", category: "Menswear", fabric: "Cotton Twill", gsm: 280, photo: "photo-1617114919297-3c8ddb01f599", tone: "#b08a5b" },
  { code: "WF-M-203", name: "Heather Heavy Hoodie", category: "Menswear", fabric: "Brushed Fleece", gsm: 380, photo: "photo-1556821840-3a63f95609a7", tone: "#9a9a9a" },
  { code: "WF-M-204", name: "Navy Business Shirt", category: "Menswear", fabric: "Stretch Poplin", gsm: 120, photo: "photo-1624835567150-0c530a20d8cc", tone: "#2c4466" },
  { code: "WF-M-205", name: "Gingham Overshirt", category: "Menswear", fabric: "Yarn-Dyed Cotton", gsm: 160, photo: "photo-1626557981101-aae6f84aa6ff", tone: "#5b7fa8" },
  { code: "WF-M-206", name: "Indigo Denim Jacket", category: "Menswear", fabric: "12oz Denim", gsm: 400, photo: "photo-1643858040625-3e806a9e5be3", tone: "#3b5476" },

  { code: "WF-G-301", name: "Twirl Party Dress", category: "Girlswear", fabric: "Cotton Poplin", gsm: 115, photo: "photo-1578897367107-2828e351c8a8", tone: "#e8c4c9" },
  { code: "WF-G-302", name: "Sky Unicorn Dress", category: "Girlswear", fabric: "Cotton Jersey", gsm: 170, photo: "photo-1759313560255-0458c8f4e615", tone: "#7fa6d6" },
  { code: "WF-G-303", name: "Meadow Floral Tank", category: "Girlswear", fabric: "Organic Jersey", gsm: 150, photo: "photo-1590480598135-3be152c87913", tone: "#a9c7a2" },
  { code: "WF-G-304", name: "Polka Dot Blouse", category: "Girlswear", fabric: "Viscose Crepe", gsm: 110, photo: "photo-1518831959646-742c3a14ebf7", tone: "#222222" },

  { code: "WF-B-401", name: "Urban Layer Set", category: "Boyswear", fabric: "Combed Jersey", gsm: 180, photo: "photo-1519238263530-99bdd11df2ea", tone: "#6f7f5a" },
  { code: "WF-B-402", name: "Trail Zip Jacket", category: "Boyswear", fabric: "Recycled Nylon", gsm: 210, photo: "photo-1596870230751-ebdfce98ec42", tone: "#3f7a5c" },
  { code: "WF-B-403", name: "Explorer Fleece", category: "Boyswear", fabric: "Polar Fleece", gsm: 280, photo: "photo-1768383235583-99e9d8c836b0", tone: "#c97b3c" },
  { code: "WF-B-404", name: "City Weekend Tee", category: "Boyswear", fabric: "Organic Jersey", gsm: 160, photo: "photo-1785828642909-676851fe3db2", tone: "#e1e1dd" },

  { code: "WF-L-501", name: "Oat Lounge Set", category: "Loungewear", fabric: "Cotton Waffle", gsm: 210, photo: "photo-1759229874709-a8d0de083b91", tone: "#d9cbb4" },
  { code: "WF-L-502", name: "Pastel Pyjama Set", category: "Loungewear", fabric: "Brushed Cotton", gsm: 140, photo: "photo-1766056278836-3d889a1c9cad", tone: "#c9d7ec" },
  { code: "WF-L-503", name: "Lilac Modal Pyjama", category: "Loungewear", fabric: "Modal Jersey", gsm: 190, photo: "photo-1759229874681-39fb36b01e32", tone: "#b7a8d1" },
  { code: "WF-L-504", name: "Cloud Knit Co-ord", category: "Loungewear", fabric: "Recycled Fleece", gsm: 320, photo: "photo-1766056278792-d5b15656b7e8", tone: "#e6dccb" },

  { code: "WF-S-601", name: "Hazel Chunky Knit", category: "Sweaterwear", fabric: "Wool Blend 5GG", gsm: 420, photo: "photo-1773747310662-e7cc9e681226", tone: "#8b6a4a" },
  { code: "WF-S-602", name: "Stone Ribbed Jumper", category: "Sweaterwear", fabric: "Lambswool 7GG", gsm: 380, photo: "photo-1574201635302-388dd92a4c3f", tone: "#a9a49c" },
  { code: "WF-S-603", name: "Rust Texture Knit", category: "Sweaterwear", fabric: "Cotton-Acrylic 12GG", gsm: 300, photo: "photo-1773747203295-dc002c421c33", tone: "#b4532c" },
  { code: "WF-S-604", name: "Cobalt Crew Sweater", category: "Sweaterwear", fabric: "Merino Blend 12GG", gsm: 280, photo: "photo-1580331451062-99ff652288d7", tone: "#2f56a6" },
];

/** Atmosphere shots used across sections. */
export const scenes = {
  rack: "photo-1532453288672-3a27e9be9efd",
  rack2: "photo-1555529771-835f59fc5efe",
  showroom: "photo-1640921734615-aeb4efe3e614",
  fabricRolls: "photo-1771098403201-8d0d32e2a062",
  fabricRolls2: "photo-1771098403216-ca0c3c2858c0",
  designer: "photo-1673201229733-69d19c5c4a87",
  sewingLine: "photo-1741176505800-caaa3a52631a",
  sewingMan: "photo-1772351721310-0aa6b2d5ee49",
  spools: "photo-1783070610671-1cc98dffba42",
  threads: "photo-1517146783983-418c681b56c5",
  sorting: "photo-1606053929013-311c13f97b5f",
  factory: "photo-1589793463357-5fb813435467",
  embroidery: "photo-1772351721253-1008627c8c50",
  folded: "photo-1562157873-818bc0726f68",
  stacks: "photo-1705250466297-90035b3a2b26",
  workshop: "photo-1768746350424-ee28a364dcf5",
  fabricSort: "photo-1741176506261-73218298e4d8",
  shirts: "photo-1642764873649-5c228ce3fe74",
  team: "photo-1758873268933-e0765262e58d",
};

export const stats = [
  { value: 9, suffix: "+", label: "Years of craft" },
  { value: 14, suffix: "", label: "Countries served" },
  { value: 42, suffix: "M+", label: "Garments shipped" },
  { value: 180, suffix: "+", label: "Brand partners" },
];

export const capabilities = [
  { n: "01", title: "Sourcing", text: "Ethically vetted mills and factories, matched to your product and price point." },
  { n: "02", title: "Design & Development", text: "Trend boards, tech packs and graphics from our in-house studio." },
  { n: "03", title: "Production", text: "Dedicated merchandisers steering every order from cutting to packing." },
  { n: "04", title: "Quality", text: "Inline and final inspections backed by our in-house testing lab." },
  { n: "05", title: "Logistics", text: "Consolidated FOB, CIF and DDP shipping to any port in the world." },
];

export const team = [
  { name: "Arif Rahman", photo: "photo-1560250097-0b93528c311a", role: "Founder & Managing Director", initials: "AR", tone: "#c4572f" },
  { name: "Elena Marsh", photo: "photo-1573496359142-b8d87734a5a2", role: "Director, Europe Sales", initials: "EM", tone: "#3d5a4a" },
  { name: "Rohan Mehta", photo: "photo-1568602471122-7832951cc4c5", role: "Director, Operations India", initials: "RM", tone: "#2c3e7a" },
  { name: "Lin Qiao", photo: "photo-1580489944761-15a19d654956", role: "Head of Fabric Sourcing", initials: "LQ", tone: "#8a6d3b" },
  { name: "Nadia Karim", photo: "photo-1573497019940-1c28c88b4f3e", role: "Head of Compliance", initials: "NK", tone: "#7a2f2f" },
  { name: "Tom Fielding", photo: "photo-1519085360753-af0119f7cbe7", role: "Creative Director", initials: "TF", tone: "#4a4f55" },
];

export const insights = [
  { tag: "News", photo: "photo-1640921734615-aeb4efe3e614", date: "Oct 18, 2026", read: "4 min", title: "Weftora opens a new design studio in Manchester", excerpt: "Our UK team moves into a converted mill to sit closer to the brands we design with every season.", tone: "#c4572f" },
  { tag: "Sustainability", photo: "photo-1606053929013-311c13f97b5f", date: "Sep 30, 2026", read: "6 min", title: "How we cut water use by 31% across partner dye-houses", excerpt: "A year of ETP upgrades, low-liquor dyeing and shared metering — and what we learned along the way.", tone: "#3d5a4a" },
  { tag: "Events", photo: "photo-1776539788649-365595327e68", date: "Sep 12, 2026", read: "3 min", title: "Meet us at Première Vision Paris", excerpt: "Visit our stand for the AW27 fabric story: brushed naturals, technical wool blends and recycled satins.", tone: "#2c3e7a" },
  { tag: "Press Releases", photo: "photo-1534639077088-d702bcf685e7", date: "Aug 21, 2026", read: "2 min", title: "Weftora joins the Better Cotton programme", excerpt: "Membership extends our sourcing commitments to more than 70% of cotton by volume.", tone: "#8a6d3b" },
  { tag: "News", photo: "photo-1772351721310-0aa6b2d5ee49", date: "Jul 08, 2026", read: "5 min", title: "Inside our 3-day sampling room", excerpt: "From brief to fit sample in 72 hours: a walkthrough of the room where most of our orders begin.", tone: "#7a2f2f" },
  { tag: "Sustainability", photo: "photo-1771098403216-ca0c3c2858c0", date: "Jun 02, 2026", read: "4 min", title: "Recycled polyester, explained for buyers", excerpt: "Certificates, traceability and price — a practical guide for teams moving away from virgin poly.", tone: "#4b6150" },
];

export const jobs = [
  { title: "Senior Merchandiser — Womenswear", team: "Merchandising", office: "Dhaka, Bangladesh", type: "Full Time", deadline: "30 Nov", text: "Own a portfolio of UK high-street accounts from development through shipment, working closely with our design studio and factory partners." },
  { title: "Garment Technologist — Kidswear", team: "Technical / Quality", office: "Gurugram, India", type: "Full Time", deadline: "15 Dec", text: "Lead fit sessions, evaluate patterns and keep construction standards aligned with buyer requirements and safety regulations." },
  { title: "Textile Designer — Prints & Graphics", team: "Design Studio", office: "Manchester, UK", type: "Full Time", deadline: "20 Dec", text: "Create seasonal print stories and placement graphics for menswear and kidswear collections." },
  { title: "Compliance Auditor", team: "Compliance", office: "Dhaka, Bangladesh", type: "Contract", deadline: "10 Dec", text: "Run social and environmental audits across our factory network and follow corrective action plans to closure." },
];

export const fabrics = [
  { name: "Stretch Single Jersey", type: "Knit", photo: "photo-1601379327928-bedfaf9da2d0", comp: "95/5 Cotton/Elastane", gsm: 180, finish: "Bio-wash", stretch: "4-way", eco: "Organic", stock: true, color: "#d6c3a2", pattern: "solid" },
  { name: "Viscose Challis", type: "Woven", photo: "photo-1764437835714-322ab28f0770", comp: "100% LENZING™ Viscose", gsm: 110, finish: "Peach", stretch: "None", eco: "FSC fibre", stock: true, color: "#e9b949", pattern: "floral" },
  { name: "Brushed Fleece", type: "Knit", photo: "photo-1611911813383-67769b37a149", comp: "80/20 Cotton/Recycled Poly", gsm: 340, finish: "Brushed back", stretch: "2-way", eco: "Recycled", stock: true, color: "#b8482a", pattern: "solid" },
  { name: "Cotton Oxford", type: "Woven", photo: "photo-1764437835979-03002314f2b7", comp: "100% Cotton", gsm: 135, finish: "Easy-care", stretch: "None", eco: "BCI", stock: false, color: "#d8e2ee", pattern: "stripes" },
  { name: "Linen-Cotton Slub", type: "Woven", photo: "photo-1528458909336-e7a0adfed0a5", comp: "55/45 Linen/Cotton", gsm: 150, finish: "Enzyme", stretch: "None", eco: "European Flax", stock: true, color: "#c4572f", pattern: "solid" },
  { name: "Waffle Knit", type: "Knit", photo: "photo-1615799998603-7c6270a45196", comp: "100% Cotton", gsm: 210, finish: "Garment dye", stretch: "2-way", eco: "Organic", stock: true, color: "#ece4d6", pattern: "check" },
  { name: "Recycled Satin", type: "Woven", photo: "photo-1764437835706-ba9d63250bd2", comp: "100% Recycled Polyester", gsm: 105, finish: "Sand-wash", stretch: "None", eco: "GRS", stock: false, color: "#1d2b3a", pattern: "solid" },
  { name: "Cotton Twill", type: "Woven", photo: "photo-1764437835866-73c7d0961c46", comp: "98/2 Cotton/Elastane", gsm: 260, finish: "Peached", stretch: "Mechanical", eco: "BCI", stock: true, color: "#4b6150", pattern: "rib" },
];

export const faqs: { group: string; icon: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Sourcing & Products",
    icon: "🧵",
    items: [
      { q: "What is your minimum order quantity?", a: "We work without fixed MOQs. Most styles start from 300–500 pieces per colour, and we’ll always look for a way to make smaller runs work." },
      { q: "Which product categories do you cover?", a: "Womenswear, menswear, girlswear, boyswear, loungewear and sweaterwear across woven, jersey, fleece and knit (3GG–12GG)." },
      { q: "Can you develop a product from scratch?", a: "Yes. Our studio can take a mood board or a single reference image through to a full tech pack, fabric selection and first sample." },
      { q: "Do extra colourways cost more?", a: "No. Multiple colourways or prints within a style are offered without upcharge." },
    ],
  },
  {
    group: "Quality & Compliance",
    icon: "✅",
    items: [
      { q: "How do you control quality?", a: "Every order has inline, pre-final and final AQL inspections, plus physical and colour-fastness testing in our in-house lab." },
      { q: "Are your factories audited?", a: "All partner factories hold current BSCI, WRAP or Sedex audits and are re-assessed by our own compliance team each year." },
    ],
  },
  {
    group: "Lead Times & Logistics",
    icon: "🚚",
    items: [
      { q: "What are typical lead times?", a: "Samples take 3–7 days. Bulk production is usually 45–75 days depending on fabric and wash." },
      { q: "Which shipping terms do you support?", a: "FOB, CIF and DDP by sea or air, with consolidation available from Chattogram, Nhava Sheva and Ningbo." },
    ],
  },
  {
    group: "Sustainability",
    icon: "🌿",
    items: [
      { q: "Do you offer sustainable fabrics?", a: "Organic and recycled cotton, recycled polyester, LENZING™ viscose and European flax are all part of our core library." },
    ],
  },
  {
    group: "Working with Weftora",
    icon: "🤝",
    items: [
      { q: "How do we start?", a: "Send us your brief through the contact page. A merchandiser replies within one business day to set up a call." },
      { q: "Can we track our orders?", a: "Yes — every client gets access to our order tracker with live stage updates from cutting through to shipment." },
    ],
  },
];

export const albums = [
  { title: "Winter Pitha Festival", tag: "Festivals", photo: "photo-1758520144658-c87be518b87e", date: "Jan 2026", office: "Dhaka", tone: "#c4572f" },
  { title: "Factory Safety Training", tag: "Training", photo: "photo-1741176506261-73218298e4d8", date: "Feb 2026", office: "Dhaka", tone: "#3d5a4a" },
  { title: "Best Supplier Award 2026", tag: "Awards", photo: "photo-1758691737584-a8f17fb34475", date: "Mar 2026", office: "Manchester", tone: "#8a6d3b" },
  { title: "Tree Planting Drive", tag: "CSR", photo: "photo-1780733065574-7064961e9f9b", date: "Apr 2026", office: "Gurugram", tone: "#4b6150" },
  { title: "Annual Team Retreat", tag: "Team Events", photo: "photo-1758873268933-e0765262e58d", date: "May 2026", office: "Cox’s Bazar", tone: "#2c3e7a" },
  { title: "Eid Celebration", tag: "Festivals", photo: "photo-1758520144661-73849bde0da1", date: "Jun 2026", office: "Dhaka", tone: "#7a2f2f" },
  { title: "Pattern Making Masterclass", tag: "Training", photo: "photo-1673201229733-69d19c5c4a87", date: "Jul 2026", office: "Dhaka", tone: "#5b7fa8" },
  { title: "School Kit Donation", tag: "CSR", photo: "photo-1690192123455-6337e6db4179", date: "Aug 2026", office: "Dhaka", tone: "#b8482a" },
  { title: "Diwali Night", tag: "Festivals", photo: "photo-1758691737492-48e8fdd336f7", date: "Oct 2026", office: "Gurugram", tone: "#e0b62c" },
];
