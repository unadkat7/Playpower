import phototourJson from "./phototour.json";
import amenitiesJson from "./amenities.json";

/**
 * All listing content, transcribed from the reference listing
 * ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"). Kept in one module so the
 * components stay presentational and the data is easy to audit against the source.
 */

const IMG = "/assets/images";

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, India",
  specs: ["3 guests", "1 bedroom", "1 bed", "1 bathroom"],
  rating: 4.95,
  reviewCount: 19,
  pricePerStayLabel: "₹28,499",
  nightsLabel: "for 5 nights",
  dateRange: "18 Oct 2026 - 23 Oct 2026",
  nightsHeading: "5 nights in Candolim",
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  guestsLabel: "2 guests",
  freeCancellationDate: "17 October",
};

export const heroImages = [
  `${IMG}/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg`,
  `${IMG}/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg`,
  `${IMG}/9be71047-fc52-438a-9270-75cb470f6752.jpeg`,
  `${IMG}/67c61c6f-6260-4809-9510-0360e58a345d.jpeg`,
  `${IMG}/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg`,
];

export const highlights = [
  {
    icon: "hlOutdoor",
    title: "Outdoor entertainment",
    body: "The pool and alfresco dining are great for summer trips.",
  },
  {
    icon: "hlCool",
    title: "Designed for staying cool",
    body: "Beat the heat with the A/C and ceiling fan.",
  },
  {
    icon: "hlCheckin",
    title: "Self check-in",
    body: "You can check in with the building staff.",
  },
];

export const description = `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴`;

export const sleeping = [
  { icon: `${IMG}/67c61c6f-6260-4809-9510-0360e58a345d.jpeg`, title: "Bedroom", detail: "1 double bed" },
  { icon: `${IMG}/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg`, title: "Living room", detail: "1 sofa" },
];

// Preview grid on the listing page (10 items, last two unavailable / struck-through).
export const amenitiesPreview: { icon: string; label: string; unavailable?: boolean }[] = [
  { icon: "kitchen", label: "Kitchen" },
  { icon: "wifi", label: "Wifi" },
  { icon: "dedicated_workspace", label: "Dedicated workspace" },
  { icon: "free_parking_on_premises", label: "Free parking on premises" },
  { icon: "pool", label: "Pool" },
  { icon: "hot_tub", label: "Hot tub" },
  { icon: "pets_allowed", label: "Pets allowed" },
  { icon: "exterior_security_cameras_on_prope", label: "Exterior security cameras on property" },
  { icon: "carbon_monoxide_alarm", label: "Carbon monoxide alarm", unavailable: true },
  { icon: "smoke_alarm", label: "Smoke alarm", unavailable: true },
];

// Full "Show all 50 amenities" modal content.
export type AmenityGroup = { title: string; rows: { label: string; unavailable?: boolean }[] };
export const amenityGroups = amenitiesJson as AmenityGroup[];

// Icon key per amenity label (for the modal rows). Falls back to a bullet if unknown.
export const amenityIconByLabel: Record<string, string> = {
  Hairdryer: "hairdryer",
  "Cleaning products": "cleaning_products",
  Shampoo: "shampoo",
  "Hot water": "hot_water",
  "Shower gel": "shower_gel",
  "Washing machine": "washing_machine",
  Hangers: "hangers",
  "Bed linen": "bed_linen",
  "Room-darkening blinds": "room_darkening_blinds",
  Iron: "iron",
  "Clothes storage": "clothes_storage",
  Cot: "cot",
  TV: "tv",
  "Air conditioning": "air_conditioning",
  "Ceiling fan": "designed_for_staying_cool",
  "Exterior security cameras on property": "exterior_security_cameras_on_prope",
  "Carbon monoxide alarm": "carbon_monoxide_alarm",
  "Smoke alarm": "smoke_alarm",
  Wifi: "wifi",
  "Dedicated workspace": "dedicated_workspace",
  Kitchen: "kitchen",
  Fridge: "fridge",
  Freezer: "fridge",
  Microwave: "microwave",
  "Cooking basics": "cooker",
  "Crockery and cutlery": "crockery_and_cutlery",
  Kettle: "kettle",
  Coffee: "coffee",
  "Wine glasses": "wine_glasses",
  Toaster: "toaster",
  Blender: "blender",
  Cooker: "cooker",
  "Private entrance": "private_entrance",
  "Patio or balcony": "patio_or_balcony",
  "Outdoor dining area": "outdoor_dining_area",
  Pool: "pool",
  "Hot tub": "hot_tub",
  Gym: "gym",
  "Free parking on premises": "free_parking_on_premises",
  "Pets allowed": "pets_allowed",
  "Long-term stays allowed": "long_term_stays_allowed",
};

// Review rating breakdown
export const ratingCategories = [
  { icon: "catCleanliness", label: "Cleanliness", value: "5.0" },
  { icon: "catAccuracy", label: "Accuracy", value: "5.0" },
  { icon: "catCheckin", label: "Check-in", value: "5.0" },
  { icon: "catCommunication", label: "Communication", value: "5.0" },
  { icon: "catLocation", label: "Location", value: "4.8" },
  { icon: "catValue", label: "Value", value: "4.8" },
];

// Distribution bars (5 → 1). Approximated to match the reference visual (5-star dominant).
export const ratingDistribution = [
  { star: 5, pct: 100 },
  { star: 4, pct: 8 },
  { star: 3, pct: 3 },
  { star: 2, pct: 0 },
  { star: 1, pct: 3 },
];

// Horizontal category chips ("what guests said" imagery + count)
export const reviewChips = [
  { img: `${IMG}/chips/comfort.png`, label: "Comfort", count: 6 },
  { img: `${IMG}/chips/accuracy.png`, label: "Accuracy", count: 5 },
  { img: `${IMG}/chips/hot-tub.png`, label: "Hot tub", count: 5 },
  { img: `${IMG}/chips/condition.png`, label: "Condition", count: 4 },
  { img: `${IMG}/chips/hospitality.png`, label: "Hospitality", count: 8 },
  { img: `${IMG}/chips/cleanliness.png`, label: "Cleanliness", count: 4 },
  { img: `${IMG}/chips/amenities.png`, label: "Amenities", count: 2 },
  { img: `${IMG}/chips/decor.png`, label: "Decor", count: 2 },
  { img: `${IMG}/chips/indoor-spaces.png`, label: "Indoor spaces", count: 2 },
  { img: `${IMG}/chips/location.png`, label: "Location", count: 2 },
];

export type Review = {
  name: string;
  avatar?: string;
  initial?: string;
  tenure: string;
  date: string;
  text: string;
};

export const reviews: Review[] = [
  { name: "Amit", initial: "A", tenure: "2 months on Airbnb", date: "1 week ago", text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property." },
  { name: "Aheesh", avatar: `${IMG}/avatars/rev1.jpeg`, tenure: "3 years on Airbnb", date: "2 weeks ago", text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again." },
  { name: "Samiksha", avatar: `${IMG}/avatars/rev2.jpeg`, tenure: "8 months on Airbnb", date: "May 2026", text: "the host nitish was really great help" },
  { name: "Vedant", initial: "V", tenure: "4 years on Airbnb", date: "May 2026", text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.\n\nThe highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\n\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!" },
  { name: "Vaibhav S", avatar: `${IMG}/avatars/rev3.jpeg`, tenure: "3 years on Airbnb", date: "May 2026", text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too." },
  { name: "Mohd", avatar: `${IMG}/avatars/rev4.jpeg`, tenure: "5 years on Airbnb", date: "May 2026", text: "Great place. Exactly as described in the listing." },
];

export const host = {
  name: "Mirashya Homes",
  avatar: `${IMG}/avatars/host.jpeg`,
  reviews: "1,463",
  rating: "4.68",
  yearsHosting: "2",
  bornInThe80s: "Born in the 80s",
  school: "Where I went to school: NICMAR GOA",
  responseRate: "Response rate: 100%",
  respondsWithin: "Responds within an hour",
  hostedByYears: "2 years hosting",
};

export type CoHost = { name: string; avatar?: string; initial?: string };
export const coHosts: CoHost[] = [
  { name: "Sharath", avatar: `${IMG}/avatars/co1.jpg` },
  { name: "Aman Dev Pahwa", avatar: `${IMG}/avatars/co2.jpg` },
  { name: "Maria Karen Priyanka", avatar: `${IMG}/avatars/co3.jpg` },
  { name: "Simran", avatar: `${IMG}/avatars/rev5.jpeg` },
  { name: "Pallavi", avatar: `${IMG}/avatars/rev1.jpeg` },
  { name: "Sanyukta", avatar: `${IMG}/avatars/rev2.jpeg` },
  { name: "Shruti", initial: "S" },
  { name: "Amisha", initial: "A" },
];

export const thingsToKnow = [
  {
    icon: "ttkCancellation",
    title: "Cancellation policy",
    body: "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.\n\nReview this host's full policy for details.",
  },
  {
    icon: "ttkRules",
    title: "House rules",
    body: "Check-in after 2:00 pm\n\nCheckout before 11:00 am\n\n3 guests maximum",
  },
  {
    icon: "ttkSafety",
    title: "Safety & property",
    body: "Carbon monoxide alarm not reported\n\nSmoke alarm not reported\n\nExterior security cameras on property",
  },
];

export const moreStays = [
  { img: `${IMG}/similar/s1.jpeg`, title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91" },
  { img: `${IMG}/similar/s2.jpeg`, title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95" },
  { img: `${IMG}/similar/s3.jpeg`, title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94" },
  { img: `${IMG}/similar/s4.jpeg`, title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96" },
  { img: `${IMG}/similar/s5.jpeg`, title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95" },
  { img: `${IMG}/similar/s6.jpeg`, title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: "₹45,648", rating: "5.0" },
  { img: `${IMG}/similar/s2.jpeg`, title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: "₹48,786", rating: "4.93" },
  { img: `${IMG}/similar/s4.jpeg`, title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: "₹22,824", rating: "4.92" },
];

export const neighbourhood =
  "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.";

// Photo tour groups + nav (exact ordering from the reference)
export type PhotoGroup = { title: string; subtitle?: string; layout: "1col" | "2col"; imgs: string[] };
export type PhotoNav = { label: string; img: string };
export const photoTour = phototourJson as { nav: PhotoNav[]; groups: PhotoGroup[] };

// Flat ordered list of every gallery photo (for the lightbox), each tagged with its category.
export const galleryPhotos: { src: string; category: string }[] = photoTour.groups.flatMap((g) =>
  g.imgs.map((src) => ({ src, category: g.title })),
);
