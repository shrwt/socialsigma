/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * To add a new onboarded project to the portfolio:
 * 1. Create a new project object in the array below.
 * 2. PLACE IT AT THE VERY FIRST POSITION (index 0) of the `portfolioData` array.
 * 3. The portfolio page will automatically load and display it in the first place,
 *    retaining the exact same premium Instagram-style grid design and styles.
 * 
 * Project Schema:
 * {
 *   id: "unique-kebab-case-id",
 *   title: "Project Title",
 *   subtitle: "Brief description of location or type",
 *   category: "hospitality" | "fashion" | "interior" | "activewear",
 *   instagramHandle: "@username",
 *   instagramLink: "https://www.instagram.com/username/",
 *   avatar: "URL to circular logo image",
 *   cover: "URL to cover image shown in index.html carousel",
 *   caption: "Text description of what was achieved",
 *   likesCount: 1234,
 *   adsPerformance: {
 *     spent: "₹1,85,000",
 *     roas: "4.5x",
 *     conversions: "342 Bookings",
 *     ctr: "2.34%",
 *     costPerResult: "₹540 / Booking",
 *     impressions: "1.2M"
 *   },
 *   images: [
 *     "URL_to_image_1", // First image (top-left of 3x3 Instagram grid)
 *     "URL_to_image_2",
 *     "URL_to_image_3",
 *     "URL_to_image_4",
 *     "URL_to_image_5",
 *     "URL_to_image_6",
 *     "URL_to_image_7",
 *     "URL_to_image_8",
 *     "URL_to_image_9"  // Exactly 9 images are recommended for a complete 3x3 grid
 *   ]
 * }
 */
const portfolioData = [
  {
    id: "royal-venetian",
    title: "The Royal Venetian",
    subtitle: "Grand Resort on NH44 Highway, Panipat",
    category: "hospitality",
    instagramHandle: "@theroyalvenetian1",
    instagramLink: "https://www.instagram.com/theroyalvenetian1/",
    websiteLink: "https://theroyalvenetian.in/",
    avatar: "https://www.socialsigma.in/wp-content/uploads/2026/03/1-TRV-Logo-Black-Main-Lion-bg-white-scaled.jpg",
    cover: "assets/royal-venetian/media__1779771232188.jpg",
    caption: "Curating luxury banquets and high-production corporate hospitality shoots. We engineered a complete digital funnel that keeps their venues fully booked for regional business summits and high-profile events.",
    likesCount: 1452,
    adsPerformance: {
      spent: "₹1,85,000",
      roas: "4.5x",
      conversions: "342 Bookings",
      ctr: "2.34%",
      costPerResult: "₹540 / Booking",
      impressions: "1.2M",
      conversionsVal: 342,
      progressCtr: 68,
      progressRoas: 75
    },
    localFolder: "assets/royal-venetian/",
    images: [
      "assets/royal-venetian/media__1779771231440.jpg",
      "assets/royal-venetian/media__1779771231831.jpg",
      "assets/royal-venetian/media__1779771231942.jpg",
      "assets/royal-venetian/media__1779771231981.jpg",
      "assets/royal-venetian/media__1779771232188.jpg"
    ]
  },
  {
    id: "mark-jillion",
    title: "Mark Jillion | MJ",
    subtitle: "Finest Clothing Wholesaler in Gurgaon",
    category: "fashion",
    instagramHandle: "@markjillion_clothing",
    instagramLink: "https://www.instagram.com/markjillion_clothing/",
    websiteLink: "https://markjillion.com/",
    avatar: "https://www.socialsigma.in/wp-content/uploads/2026/03/6206295114037006216.jpg",
    cover: "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_623256739_17985950222939895_3942930761201315134_n.jpg.jpeg",
    caption: "Crafting visual identities for high-volume fashion wholesale. Our creative ad hooks scaled Mark Jillion's order volume, maintaining a steady ROI even during the retail off-season.",
    likesCount: 2315,
    adsPerformance: {
      spent: "₹3,20,000",
      roas: "5.2x",
      conversions: "2,450 Orders",
      ctr: "3.15%",
      costPerResult: "₹130 / Order",
      impressions: "3.4M",
      conversionsVal: 2450,
      progressCtr: 85,
      progressRoas: 88
    },
    images: [
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_623256739_17985950222939895_3942930761201315134_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_625085366_18095418379764673_4337639870085019828_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_539394048_18074552027510808_657590190604329350_n.jpg.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_621463168_18104041765805458_1928496553346605056_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_623777725_17959908698905879_276780962357836402_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_626457157_18177932926372357_5436109572255768666_n.jpg-1.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_625839840_18278802580303865_7409416664808388614_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_626686440_18051207830701196_201905134443590610_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_654651268_17980136654994299_6692273641601484821_n.jpg.jpeg"
    ]
  },
  {
    id: "key4you",
    title: "Key4You Interior",
    subtitle: "Interior Designer Company in Gurgaon",
    category: "interior",
    instagramHandle: "@key4you_interior",
    instagramLink: "https://www.instagram.com/key4you_interior/",
    websiteLink: "https://key4you.in/",
    avatar: "https://www.socialsigma.in/wp-content/uploads/2026/03/6206295114037006217.jpg",
    cover: "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_476315238_17963679968846337_6499223105099981460_n.jpg.jpeg",
    caption: "Elevating luxury interior portfolios. We shifted their lead flow from price-sensitive requests to premium 'dream home' commissions by targeting high-net-worth audiences with immersive video formats.",
    likesCount: 1894,
    adsPerformance: {
      spent: "₹1,10,000",
      roas: "6.1x",
      conversions: "185 Premium Leads",
      ctr: "1.85%",
      costPerResult: "₹595 / High-Value Lead",
      impressions: "850K",
      conversionsVal: 185,
      progressCtr: 55,
      progressRoas: 95
    },
    images: [
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_476315238_17963679968846337_6499223105099981460_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_476112768_17963679989846337_5877792506113125393_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_650094997_17891136285304815_893658886532202573_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_622851956_18098087375495003_719206993682074366_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_656638827_18092694476161053_3596990805817015572_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_624694837_18047179196497376_3552725643130035211_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_655534590_18060517790384583_2418906667410657884_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_476412207_17963679971846337_2503214487264735761_n.jpg.jpeg",
      "https://www.socialsigma.in/wp-content/uploads/2026/03/SnapInsta.to_625056891_18164128612369026_5310593250663641999_n.jpg.jpeg"
    ]
  },
  {
    id: "black-wizard",
    title: "Black Wizard",
    subtitle: "Active Wear Manufacturer Brand in Gurgaon",
    category: "activewear",
    instagramHandle: "@blackwizardsports",
    instagramLink: "https://www.instagram.com/blackwizardsports/",
    websiteLink: "https://blackwizardsports.com/",
    avatar: "https://www.socialsigma.in/wp-content/uploads/2026/05/logo-black-bg-white-blackwizard.jpg",
    cover: "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-May07-tshirt-promo.webp",
    caption: "Scaling athletic apparel direct-to-consumer presence. Through high-energy Reels and active wear lifestyle promos, we grew their digital footprint and scaled Meta advertising campaigns.",
    likesCount: 1674,
    adsPerformance: {
      spent: "₹2,40,000",
      roas: "4.8x",
      conversions: "1,890 Purchases",
      ctr: "2.88%",
      costPerResult: "₹126 / Purchase",
      impressions: "2.1M",
      conversionsVal: 1890,
      progressCtr: 78,
      progressRoas: 82
    },
    images: [
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-May07-tshirt-promo.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-May03-compression-upperfit-3.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-Apr14-baisakhi-2.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-Apr23-Trackpant-1-promo-LNT02337-.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-Apr23-Trackpant-2-promo-LNT02337-.png.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-Apr30-shirt-trackpant-promo-1-scaled.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-Apr28-t-shirt-collar-post-1-scaled.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-Apr08-summer-Tshirt-promo-1.webp",
      "https://www.socialsigma.in/wp-content/uploads/2026/05/2026-Apr08-summer-Tshirt-promo-3.webp"
    ]
  }
];

window.portfolioData = portfolioData;
