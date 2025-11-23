export const campaigns = [
  {
    id: 1,
    name: "Summer Sale Campaign",
    description : "A seasonal marketing push focused on boosting summer sales and engagement.",
    department: "Marketing",
    impressions: 150000,
    clicks: 6200,
    ctr: 4.13,
    conversions: 520,
    status: "Active",
    budget: 5000,
    revenue: 14000,

    dailyPerformance: [
      { date: "2024-01-01", clicks: 120, impressions: 3000, conversions: 15, spend: 60 },
      { date: "2024-01-02", clicks: 180, impressions: 3800, conversions: 22, spend: 75 },
      { date: "2024-01-03", clicks: 260, impressions: 4200, conversions: 40, spend: 100 },
      { date: "2024-01-04", clicks: 300, impressions: 4500, conversions: 45, spend: 110 },
      { date: "2024-01-05", clicks: 450, impressions: 5200, conversions: 60, spend: 150 }
    ],

    deviceBreakdown: { desktop: 45, mobile: 40, tablet: 15 },

    platformBreakdown: [
      { platform: "Facebook", budgetSpent: 1200, clicks: 2100, revenue: 5200, visits: 4000, completed: 180 },
      { platform: "Google Ads", budgetSpent: 1800, clicks: 2800, revenue: 7000, visits: 5200, completed: 250 },
      { platform: "Instagram", budgetSpent: 800, clicks: 1300, revenue: 2600, visits: 2000, completed: 90 }
    ]
  },

  {
    id: 2,
    name: "Lead Boost Automation",
    description : "A sales-driven lead generation campaign designed to increase qualified inquiries.",
    department: "Sales",
    impressions: 100000,
    clicks: 4100,
    ctr: 4.1,
    conversions: 310,
    status: "Paused",
    budget: 3500,
    revenue: 9000,

    dailyPerformance: [
      { date: "2024-01-01", clicks: 80, impressions: 2000, conversions: 12, spend: 50 },
      { date: "2024-01-02", clicks: 120, impressions: 2600, conversions: 18, spend: 65 },
      { date: "2024-01-03", clicks: 150, impressions: 3000, conversions: 25, spend: 80 },
      { date: "2024-01-04", clicks: 220, impressions: 3500, conversions: 32, spend: 95 },
      { date: "2024-01-05", clicks: 300, impressions: 4000, conversions: 40, spend: 120 }
    ],

    deviceBreakdown: { desktop: 50, mobile: 35, tablet: 15 },

    platformBreakdown: [
      { platform: "LinkedIn", budgetSpent: 900, clicks: 1000, revenue: 3100, visits: 1800, completed: 80 },
      { platform: "Google Ads", budgetSpent: 1500, clicks: 1900, revenue: 4500, visits: 3000, completed: 150 },
      { platform: "Facebook", budgetSpent: 700, clicks: 1200, revenue: 1400, visits: 2000, completed: 60 }
    ]
  },

  {
    id: 3,
    name: "Hiring Sprint 2024",
    description : "An HR-focused hiring campaign aimed at attracting candidates for open roles.",
    department: "HR",
    impressions: 80000,
    clicks: 3000,
    ctr: 3.75,
    conversions: 200,
    status: "Completed",
    budget: 2500,
    revenue: 5100,

    dailyPerformance: [
      { date: "2024-01-01", clicks: 60, impressions: 1500, conversions: 10, spend: 30 },
      { date: "2024-01-02", clicks: 90, impressions: 2000, conversions: 12, spend: 45 },
      { date: "2024-01-03", clicks: 130, impressions: 2400, conversions: 18, spend: 55 },
      { date: "2024-01-04", clicks: 170, impressions: 2800, conversions: 22, spend: 70 },
      { date: "2024-01-05", clicks: 200, impressions: 3000, conversions: 30, spend: 85 }
    ],

    deviceBreakdown: { desktop: 40, mobile: 45, tablet: 15 },

    platformBreakdown: [
      { platform: "LinkedIn", budgetSpent: 1200, clicks: 1400, revenue: 2000, visits: 2100, completed: 70 },
      { platform: "Instagram", budgetSpent: 600, clicks: 900, revenue: 1500, visits: 1400, completed: 40 },
      { platform: "Google Ads", budgetSpent: 400, clicks: 700, revenue: 1600, visits: 1200, completed: 50 }
    ]
  },

  {
    id: 4,
    name: "Product Launch Event",
    description : "A product launch initiative to create awareness and drive event engagement.",
    department: "Product",
    impressions: 220000,
    clicks: 9200,
    ctr: 4.18,
    conversions: 740,
    status: "Active",
    budget: 7500,
    revenue: 20000,

    dailyPerformance: [
      { date: "2024-01-01", clicks: 200, impressions: 4000, conversions: 28, spend: 90 },
      { date: "2024-01-02", clicks: 300, impressions: 5000, conversions: 35, spend: 110 },
      { date: "2024-01-03", clicks: 400, impressions: 6000, conversions: 50, spend: 140 },
      { date: "2024-01-04", clicks: 500, impressions: 7000, conversions: 60, spend: 180 },
      { date: "2024-01-05", clicks: 800, impressions: 9000, conversions: 90, spend: 220 }
    ],

    deviceBreakdown: { desktop: 55, mobile: 35, tablet: 10 },

    platformBreakdown: [
      { platform: "YouTube", budgetSpent: 2500, clicks: 3500, revenue: 8000, visits: 5000, completed: 200 },
      { platform: "Google Ads", budgetSpent: 3000, clicks: 4000, revenue: 9500, visits: 6500, completed: 300 },
      { platform: "Facebook", budgetSpent: 1200, clicks: 1700, revenue: 3500, visits: 2600, completed: 110 }
    ]
  },

  {
    id: 5,
    name: "Winter Offers Promo",
    description : "A winter promotional campaign targeting higher conversions through offers.",
    department: "Marketing",
    impressions: 130000,
    clicks: 5000,
    ctr: 3.8,
    conversions: 390,
    status: "Paused",
    budget: 4200,
    revenue: 10200,

    dailyPerformance: [
      { date: "2024-02-01", clicks: 90, impressions: 2500, conversions: 12, spend: 55 },
      { date: "2024-02-02", clicks: 150, impressions: 3000, conversions: 18, spend: 70 },
      { date: "2024-02-03", clicks: 200, impressions: 3500, conversions: 25, spend: 90 },
      { date: "2024-02-04", clicks: 300, impressions: 4000, conversions: 35, spend: 110 },
      { date: "2024-02-05", clicks: 420, impressions: 4500, conversions: 50, spend: 140 }
    ],

    deviceBreakdown: { desktop: 48, mobile: 42, tablet: 10 },

    platformBreakdown: [
      { platform: "Facebook", budgetSpent: 1100, clicks: 1600, revenue: 3900, visits: 2600, completed: 120 },
      { platform: "Google Ads", budgetSpent: 1800, clicks: 2400, revenue: 5600, visits: 3700, completed: 200 },
      { platform: "Instagram", budgetSpent: 700, clicks: 1000, revenue: 1700, visits: 1500, completed: 70 }
    ]
  },

  {
    id: 6,
    name: "Brand Awareness Blitz",
    description : "A marketing blitz designed to strengthen brand visibility and reach.",
    department: "Marketing",
    impressions: 300000,
    clicks: 14000,
    ctr: 4.66,
    conversions: 890,
    status: "Active",
    budget: 9500,
    revenue: 25000,

    dailyPerformance: [
      { date: "2024-03-01", clicks: 300, impressions: 6000, conversions: 35, spend: 130 },
      { date: "2024-03-02", clicks: 500, impressions: 8000, conversions: 50, spend: 180 },
      { date: "2024-03-03", clicks: 900, impressions: 10000, conversions: 70, spend: 230 },
      { date: "2024-03-04", clicks: 1200, impressions: 12000, conversions: 95, spend: 300 },
      { date: "2024-03-05", clicks: 1500, impressions: 14000, conversions: 130, spend: 400 }
    ],

    deviceBreakdown: { desktop: 52, mobile: 38, tablet: 10 },

    platformBreakdown: [
      { platform: "YouTube", budgetSpent: 3500, clicks: 5000, revenue: 11000, visits: 7000, completed: 350 },
      { platform: "Facebook", budgetSpent: 2500, clicks: 4500, revenue: 9000, visits: 6000, completed: 250 },
      { platform: "Instagram", budgetSpent: 1800, clicks: 2500, revenue: 4800, visits: 3500, completed: 150 }
    ]
  },

  {
    id: 7,
    name: "Recruitment Push Q2",
    description : "An HR recruitment campaign focused on increasing applications for Q2 roles.",
    department: "HR",
    impressions: 90000,
    clicks: 3100,
    ctr: 3.44,
    conversions: 210,
    status: "Active",
    budget: 2600,
    revenue: 5200,

    dailyPerformance: [
      { date: "2024-04-01", clicks: 50, impressions: 1400, conversions: 10, spend: 40 },
      { date: "2024-04-02", clicks: 100, impressions: 1800, conversions: 14, spend: 55 },
      { date: "2024-04-03", clicks: 130, impressions: 2200, conversions: 18, spend: 70 },
      { date: "2024-04-04", clicks: 200, impressions: 2600, conversions: 22, spend: 85 },
      { date: "2024-04-05", clicks: 280, impressions: 2900, conversions: 30, spend: 100 }
    ],

    deviceBreakdown: { desktop: 42, mobile: 46, tablet: 12 },

    platformBreakdown: [
      { platform: "LinkedIn", budgetSpent: 1400, clicks: 1500, revenue: 2800, visits: 2000, completed: 95 },
      { platform: "Google Ads", budgetSpent: 700, clicks: 900, revenue: 1600, visits: 1300, completed: 60 },
      { platform: "Instagram", budgetSpent: 500, clicks: 700, revenue: 800, visits: 1100, completed: 40 }
    ]
  },

  {
    id: 8,
    name: "Upsell & Retargeting",
    description : "A sales retargeting campaign aimed at converting warm leads and boosting upsells.",
    department: "Sales",
    impressions: 175000,
    clicks: 7200,
    ctr: 4.11,
    conversions: 510,
    status: "Completed",
    budget: 4800,
    revenue: 13500,

    dailyPerformance: [
      { date: "2024-05-01", clicks: 180, impressions: 3500, conversions: 20, spend: 90 },
      { date: "2024-05-02", clicks: 260, impressions: 4200, conversions: 25, spend: 110 },
      { date: "2024-05-03", clicks: 380, impressions: 5000, conversions: 32, spend: 130 },
      { date: "2024-05-04", clicks: 420, impressions: 5500, conversions: 40, spend: 150 },
      { date: "2024-05-05", clicks: 500, impressions: 6000, conversions: 50, spend: 170 }
    ],

    deviceBreakdown: { desktop: 47, mobile: 44, tablet: 9 },

    platformBreakdown: [
      { platform: "Facebook", budgetSpent: 1800, clicks: 2400, revenue: 4800, visits: 3500, completed: 160 },
      { platform: "Google Ads", budgetSpent: 2200, clicks: 3200, revenue: 6800, visits: 4600, completed: 250 },
      { platform: "Instagram", budgetSpent: 800, clicks: 1600, revenue: 2900, visits: 2300, completed: 100 }
    ]
  },

  {
    id: 9,
    name: "Feature Launch Push",
    description : "A product-focused campaign supporting a new feature launch and engagement.",
    department: "Product",
    impressions: 200000,
    clicks: 8800,
    ctr: 4.4,
    conversions: 690,
    status: "Active",
    budget: 7000,
    revenue: 18000,

    dailyPerformance: [
      { date: "2024-06-01", clicks: 200, impressions: 4200, conversions: 25, spend: 110 },
      { date: "2024-06-02", clicks: 300, impressions: 5000, conversions: 30, spend: 130 },
      { date: "2024-06-03", clicks: 450, impressions: 6200, conversions: 45, spend: 160 },
      { date: "2024-06-04", clicks: 620, impressions: 7500, conversions: 60, spend: 200 },
      { date: "2024-06-05", clicks: 900, impressions: 9000, conversions: 90, spend: 250 }
    ],

    deviceBreakdown: { desktop: 50, mobile: 40, tablet: 10 },

    platformBreakdown: [
      { platform: "YouTube", budgetSpent: 3000, clicks: 3600, revenue: 8500, visits: 5200, completed: 270 },
      { platform: "Google Ads", budgetSpent: 2500, clicks: 3900, revenue: 7800, visits: 5600, completed: 300 },
      { platform: "Facebook", budgetSpent: 1500, clicks: 2300, revenue: 3700, visits: 3300, completed: 120 }
    ]
  },

  {
    id: 10,
    name: "Holiday Mega Promo",
    description : "A holiday season promotional campaign aimed at maximizing festive sales.",
    department: "Marketing",
    impressions: 280000,
    clicks: 12000,
    ctr: 4.28,
    conversions: 950,
    status: "Completed",
    budget: 10000,
    revenue: 30000,

    dailyPerformance: [
      { date: "2024-07-01", clicks: 340, impressions: 7000, conversions: 40, spend: 180 },
      { date: "2024-07-02", clicks: 480, impressions: 8500, conversions: 55, spend: 220 },
      { date: "2024-07-03", clicks: 700, impressions: 10000, conversions: 75, spend: 260 },
      { date: "2024-07-04", clicks: 900, impressions: 11500, conversions: 95, spend: 300 },
      { date: "2024-07-05", clicks: 1200, impressions: 14000, conversions: 120, spend: 350 }
    ],

    deviceBreakdown: { desktop: 53, mobile: 37, tablet: 10 },

    platformBreakdown: [
      { platform: "Google Ads", budgetSpent: 4200, clicks: 5500, revenue: 14000, visits: 8000, completed: 420 },
      { platform: "Facebook", budgetSpent: 3500, clicks: 4500, revenue: 10000, visits: 6200, completed: 300 },
      { platform: "Instagram", budgetSpent: 1800, clicks: 2000, revenue: 6000, visits: 3500, completed: 180 }
    ]
  }
];
