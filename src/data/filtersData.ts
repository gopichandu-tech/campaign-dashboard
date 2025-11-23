export const filtersData = [
  {
    label: "Status",
    key: "status",
    type: "checkbox",
    options: [
      { label: "Active", value: "active" },
      { label: "Paused", value: "paused" },
      { label: "Completed", value: "completed" }
    ]
  },

  {
    label: "Budget Range",
    key: "budget",
    type: "range",
    options: [
      { label: "0 - 10,000", value: "0-10000" },
      { label: "10,000 - 50,000", value: "10000-50000" },
      { label: "50,000 - 1,00,000", value: "50000-100000" },
      { label: "1,00,000+", value: "100000+" }
    ]
  },

  {
    label: "Department",
    key: "department",
    type: "checkbox",
    options: [
      { label: "Sales Team — Lead Generation", value: "sales" },
      { label: "Marketing Team — Traffic & Branding", value: "marketing" },
      { label: "HR — Hiring Ads", value: "hr" },
      { label: "Product Team — Feature Launch", value: "product" }
    ]
  },

  {
    label: "Time Range",
    key: "timeRange",
    type: "date-range",
    fields: [
      { label: "Start Date", key: "startDate" },
      { label: "End Date", key: "endDate" }
    ]
  }
];
