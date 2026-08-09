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
    slug: "rustic-valley",
    name: "Rustic Valley",
    location: "Chakalisheripally, Yacharam (Nagarjuna Sagar Highway)",
    status: "Completed",
    type: "Gated Community Residential Plots",
    tagline: "Experience nature's tranquility near the future Hyderabad 4th City",
    description: "Rustic Valley is a premium plotted development thoughtfully laid out across 10.5 acres. Situated near the fast-developing Nagarjuna Sagar Highway, it is in close proximity to the proposed Regional Ring Road (RRR) and the upcoming Hyderabad 4th City. Offering 164 well-defined plots with world-class amenities, it represents the perfect blend of natural tranquility and high-yielding investment potential.",
    image: "/images/sravya-1.jpeg",
    gallery: [
      "/images/sravya-1.jpeg",
      "/images/sravya-2.jpeg",
      "/images/sravya-3.jpeg"
    ],
    startingPrice: "₹[STARTING PRICE] Lakhs",
    plotSizes: "150 - 400 Sq. Yards",
    totalArea: "10.5 Acres",
    totalPlots: "164 Units",
    reraNumber: "[RERA APPROVED: P0180000XXXX]",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.565432109876!2d78.7890123!3d17.0987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA1JzU1LjYiTiA3OMKwNDcnMjAuNCJFCg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    highlights: [
      "Strategically located near the proposed Regional Ring Road (RRR)",
      "Close proximity to the Hyderabad 4th City and Yacharam Pharma City corridor",
      "100% clear title with spot registration",
      "Gated community with 24/7 security and compound wall",
      "Ready for construction with rapid growth in surrounding land value"
    ],
    amenities: [
      { icon: "Road", title: "Wide blacktop roads", description: "33' and 40' wide BT roads built to premium standards." },
      { icon: "Shield", title: "Gated Community", description: "Fully secured boundary walls and entrance arch with 24/7 security personnel." },
      { icon: "Droplet", title: "Water Supply", description: "Underground water connection pipeline to every plot with overhead storage tanks." },
      { icon: "Zap", title: "Electricity & Lights", description: "Underground electricity lines and LED streetlights throughout the community." },
      { icon: "Trees", title: "Landscaped Gardens", description: "Lush green parks, seating spaces, and manicured plantations on all avenues." },
      { icon: "Smile", title: "Kids Play Area", description: "Safe, designated play zones equipped with premium modern swings and slides." }
    ],
    connectivity: [
      { destination: "Regional Ring Road (RRR)", distance: "10 Mins" },
      { destination: "Nagarjuna Sagar Highway", distance: "5 Mins" },
      { destination: "Hyderabad 4th City", distance: "15 Mins" },
      { destination: "ORR Bongloor Exit", distance: "25 Mins" },
      { destination: "Yacharam Town & Police Station", distance: "8 Mins" }
    ],
    nearbyLandmarks: [
      "Upcoming Pharma City Corridor",
      "Guru Nanak Group of Institutions",
      "TCS Adibatla Aerospace SEZ",
      "Proposed Regional Ring Road Junction"
    ]
  },
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
  },
  {
    slug: "elite-county",
    name: "Sravya Elite County",
    location: "Shankarpally (West Hyderabad Corridor)",
    status: "Upcoming",
    type: "Luxury Residential Plots",
    tagline: "Invest in West Hyderabad's high-potential residential hub",
    description: "Sravya Elite County is an upcoming signature residential plot community situated in Shankarpally, the crown jewel of West Hyderabad's investment corridor. Strategically positioned to provide easy access to Gachibowli, financial hubs, and top-tier educational institutions, it offers high-potential land investments. Characterized by premium infrastructure and luxury clubhouse amenities, it represents the gold standard of plot development.",
    image: "/images/sravya-3.jpeg",
    gallery: [
      "/images/sravya-3.jpeg",
      "/images/sravya-2.jpeg",
      "/images/sravya-1.jpeg"
    ],
    startingPrice: "₹[STARTING PRICE] Lakhs",
    plotSizes: "200 - 600 Sq. Yards",
    totalArea: "25 Acres",
    totalPlots: "320 Units",
    reraNumber: "[RERA REGISTRATION IN PROGRESS]",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.567890123456!2d78.123456!3d17.454321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzE1LjYiTiA3OMKwMDcnMjQuNCJFCg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    highlights: [
      "Excellent connectivity to Gachibowli Financial District and Neopolis Kokapet",
      "Near Shankarpally railway station and proposed radial roads",
      "100% vaastu compliant layouts with standard orientations",
      "Grand clubhouse with swimming pool and community lounge",
      "Pre-launch investment benefits with high early-stage appreciation"
    ],
    amenities: [
      { icon: "Coffee", title: "Grand Clubhouse", description: "Elite social and recreational club featuring banquet halls and indoor games." },
      { icon: "Pocket", title: "Swimming Pool", description: "Clean half-olympic swimming pool with a dedicated kids splash zone." },
      { icon: "Sun", title: "Solar Fencing", description: "Additional solar security cabling along the perimeter compound wall." },
      { icon: "Tv", title: "Underground Drainage", description: "Eco-friendly, storm-water integrated underground sewage drainage system." },
      { icon: "Leaf", title: "Theme Park", description: "Stylized pathways, dense green lawns, and native flora thematic installations." },
      { icon: "Radio", title: "24/7 Surveillance", description: "High-definition CCTV camera coverage across entry points and main junctions." }
    ],
    connectivity: [
      { destination: "Financial District / Gachibowli", distance: "25 Mins" },
      { destination: "IIT Hyderabad (Kandi)", distance: "20 Mins" },
      { destination: "Kokapet Neopolis", distance: "20 Mins" },
      { destination: "Shankarpally Railway Station", distance: "5 Mins" },
      { destination: "Mokila Residential Zone", distance: "10 Mins" }
    ],
    nearbyLandmarks: [
      "ICFAI Business School",
      "Indus International School",
      "Mokila Radial Corridor",
      "Upcoming Western Radial Ring Road"
    ]
  }
];
