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
    slug: "pearl-city",
    name: "Pearl City",
    location: "Rampally (Near ORR & Pocharam IT Corridor)",
    status: "Ongoing",
    type: "Premium Villa Plotting Community",
    tagline: "Premium villa plots designed for fine living and long-term appreciation",
    description: "Pearl City is an elite under-construction villa plotting community situated in Rampally. Positioned a short drive from the Outer Ring Road (ORR) and the bustling Pocharam IT corridor, it offers residents unmatched connectivity to Hyderabad's major technology hubs. Built with focus on eco-friendly living and future-ready infrastructure, it is the ideal canvas for your dream villa.",
    image: "/images/sravya-2.jpeg",
    gallery: [
      "/images/sravya-2.jpeg",
      "/images/sravya-1.jpeg",
      "/images/sravya-3.jpeg"
    ],
    startingPrice: "₹[STARTING PRICE] Lakhs",
    plotSizes: "167 - 500 Sq. Yards",
    totalArea: "15 Acres",
    totalPlots: "210 Units",
    reraNumber: "[RERA APPROVED: P0220000XXXX]",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789012!2d78.654321!3d17.432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzU1LjYiTiA3OMKwMzknMTUuNiJFCg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    highlights: [
      "Just 5 minutes from the Outer Ring Road (ORR) Exit 9",
      "Near Infosys SEZ Pocharam and Raheja Mindspace IT Park",
      "HMDA layout approval with clear title status",
      "Underground cabling for electricity, internet, and utilities",
      "Possession scheduled for January 2028 with ongoing rapid development"
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
      { destination: "Outer Ring Road (ORR)", distance: "5 Mins" },
      { destination: "Infosys SEZ Pocharam", distance: "10 Mins" },
      { destination: "Ghatkesar Railway Station", distance: "12 Mins" },
      { destination: "Secunderabad Station", distance: "30 Mins" },
      { destination: "Warangal Highway (NH-163)", distance: "8 Mins" }
    ],
    nearbyLandmarks: [
      "Raheja Mindspace IT Park",
      "Sree Nidhi Institute of Science & Technology",
      "Reqelford International School",
      "Narayana Multispeciality Hospital"
    ]
  }
];
