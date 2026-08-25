export interface Project {
  slug: string;
  name: string;
  location: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  type: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  startingPrice: string;
  plotSizes: string;
  totalArea: string;
  totalPlots: string;
  reraNumber: string;
  mapEmbedUrl: string;
  highlights: string[];
  amenities: {
    icon: string;
    title: string;
    description: string;
  }[];
  connectivity: {
    destination: string;
    distance: string;
  }[];
  nearbyLandmarks: string[];
}

export const projectsData: Project[] = [
  {
    slug: "gvr-kothapally",
    name: "GVR Kothapally",
    location: "Kothapally (Near Chevella & Vikarabad Road, Hyderabad)",
    status: "Ongoing",
    type: "Premium Villa Plotting Community",
    tagline: "Premium villa plots designed for fine living and long-term appreciation",
    description: "GVR Kothapally is an elite under-construction villa plotting community situated in Kothapally. Positioned along the high-growth Chevella-Vikarabad corridor, it offers residents unmatched connectivity to Hyderabad's major commercial and transport hubs. Built with a focus on eco-friendly living and future-ready infrastructure, it is the ideal canvas for your dream villa.",
    image: "/images/gvr-kothapally/gvr-03.jpeg",
    gallery: [
      "/images/gvr-kothapally/gvr-01.jpeg",
      "/images/gvr-kothapally/gvr-02.jpeg",
      "/images/gvr-kothapally/gvr-03.jpeg",
      "/images/gvr-kothapally/gvr-04.jpeg",
      "/images/gvr-kothapally/gvr-05.jpeg",
      "/images/gvr-kothapally/gvr-06.jpeg",
      "/images/gvr-kothapally/gvr-07.jpeg",
      "/images/gvr-kothapally/gvr-08.jpeg",
      "/images/gvr-kothapally/gvr-09.jpeg",
      "/images/gvr-kothapally/gvr-10.jpeg",
      "/images/gvr-kothapally/gvr-11.jpeg",
      "/images/gvr-kothapally/gvr-12.jpeg",
      "/images/gvr-kothapally/gvr-13.jpeg",
      "/images/gvr-kothapally/gvr-14.jpeg",
      "/images/gvr-kothapally/gvr-15.jpeg",
      "/images/gvr-kothapally/gvr-16.jpeg",
      "/images/gvr-kothapally/gvr-17.jpeg",
      "/images/gvr-kothapally/gvr-18.jpeg",
      "/images/gvr-kothapally/gvr-19.jpeg",
      "/images/gvr-kothapally/gvr-20.jpeg",
      "/images/gvr-kothapally/gvr-21.jpeg",
      "/images/gvr-kothapally/gvr-22.jpeg",
      "/images/gvr-kothapally/gvr-23.jpeg",
      "/images/gvr-kothapally/gvr-24.jpeg",
      "/images/gvr-kothapally/gvr-25.jpeg",
      "/images/gvr-kothapally/gvr-26.jpeg",
      "/images/gvr-kothapally/gvr-27.jpeg",
      "/images/gvr-kothapally/gvr-28.jpeg",
      "/images/gvr-kothapally/gvr-29.jpeg",
      "/images/gvr-kothapally/gvr-30.jpeg",
      "/images/gvr-kothapally/gvr-31.jpeg",
      "/images/gvr-kothapally/gvr-32.jpeg",
      "/images/gvr-kothapally/gvr-33.jpeg",
      "/images/gvr-kothapally/gvr-34.jpeg",
      "/images/gvr-kothapally/gvr-35.jpeg",
      "/images/gvr-kothapally/gvr-36.jpeg",
      "/images/gvr-kothapally/gvr-37.jpeg",
      "/images/gvr-kothapally/gvr-38.jpeg",
      "/images/gvr-kothapally/gvr-39.jpeg",
      "/images/gvr-kothapally/gvr-40.jpeg"
    ],
    startingPrice: "₹25 Lakhs",
    plotSizes: "150 - 400 Sq. Yards",
    totalArea: "20 Acres",
    totalPlots: "240 Units",
    reraNumber: "RERA Approved: P02400008912",
    mapEmbedUrl: "https://maps.google.com/maps?q=17.251406,78.583283&z=15&output=embed",
    highlights: [
      "Just 15 minutes from Chevella Town and major highways",
      "100% Vaastu compliant layout with wide 40' and 33' blacktop roads",
      "HMDA / DTCP layout design with clear title status",
      "Underground cabling for electricity, internet, and utilities",
      "Possession scheduled for December 2028 with ongoing rapid development"
    ],
    amenities: [
      { icon: "Dumbbell", title: "Open Air Gymnasium", description: "State-of-the-art open gym equipment set amidst lush landscaped greens." },
      { icon: "Activity", title: "Jogging & Walking Tracks", description: "Dedicated, dust-free walking paths wrapping around the scenic landscape." },
      { icon: "Trophy", title: "Multipurpose Court", description: "Premium sports courts configured for basketball, volleyball, and tennis." },
      { icon: "Shield", title: "Compound Wall & Security", description: "High compound walls encasing the venture with guard cabins at entrances." },
      { icon: "Trees", title: "Avenue Plantation", description: "Eco-friendly landscaping featuring rain gardens, native trees, and clean walkways." },
      { icon: "Droplet", title: "Rainwater Harvesting", description: "Built-in rainwater recharge wells to maintain underground water tables." }
    ],
    connectivity: [
      { destination: "ORR Appa Junction", distance: "25 Mins" },
      { destination: "Chevella Town", distance: "10 Mins" },
      { destination: "Vikarabad Town", distance: "20 Mins" },
      { destination: "Financial District / Gachibowli", distance: "40 Mins" },
      { destination: "Hyderabad Airport (RGIA)", distance: "45 Mins" }
    ],
    nearbyLandmarks: [
      "Shadan Institute of Medical Sciences",
      "Pragati Resorts",
      "Vikarabad Forest Area",
      "Chevella Government Hospital"
    ]
  }
];
