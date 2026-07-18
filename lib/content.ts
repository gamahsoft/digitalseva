import type { IconKey } from "@/lib/site";

export const siteContent = {
  brand: {
    name: "DigitalSeva",
    tagline: "A ready-to-use digital platform for organizations that serve their communities",
    description:
      "AI-powered platform for nonprofits, NGOs, charities, and faith-based groups to manage constituents, payments, donations, volunteers, and services.",
    url: "https://digitalseva.us",
    email: "sam@digitalseva.us",
    phone: "",
    phoneHref: "",
    colors: {
      ink: "#3B2415",
      maroon: "#8B1E3F",
      gold: "#D4A017",
      saffron: "#F4C056",
      cream: "#FFF6E6",
      paleGold: "#F7EAD0",
      brown: "#5A2E0C",
    },
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    eyebrow:
      "AI-powered. Built for nonprofits, NGOs, charities, faith-based organizations, and community groups worldwide",
    headline: "A Ready-to-Use Digital Platform for Nonprofits That Serve Their Communities",
    body:
      "DigitalSeva helps nonprofit and faith-based organizations around the world manage constituents, accept online and front-desk payments, publish services, promote donation opportunities, coordinate volunteers, and simplify administrative work with AI-assisted tools.",
    offer:
      "Start with our existing standard platform without an upfront software license fee. Affordable annual hosting, maintenance, support, configuration, and website-management plans are available for nonprofits.",
    primaryCta: { label: "Request a Free Demo", href: "/demo" },
    secondaryCta: { label: "Explore the Features", href: "/features" },
  },
  organizations: [
    { label: "Hindu temples", icon: "temple" },
    { label: "Churches", icon: "church" },
    { label: "Mosques", icon: "mosque" },
    { label: "Synagogues", icon: "synagogue" },
    { label: "Community centers", icon: "community" },
    { label: "Cultural organizations", icon: "culture" },
    { label: "Charitable nonprofits", icon: "charity" },
    { label: "NGOs and foundations", icon: "foundation" },
    { label: "Volunteer-led organizations", icon: "volunteer" },
  ],
  valueCards: [
    {
      icon: "badgeCheck",
      title: "No Upfront Software License Fee",
      text: "Start with the platform's existing standard capabilities without purchasing a traditional software license.",
    },
    {
      icon: "sparkles",
      title: "AI-Assisted Operations",
      text: "Use an AI-powered platform experience to help reduce manual work, organize information, and support everyday nonprofit administration.",
    },
    {
      icon: "lifeBuoy",
      title: "Annual Support and Maintenance",
      text: "DigitalSeva manages hosting, maintenance, security updates, routine support, and website administration.",
    },
    {
      icon: "shield",
      title: "Ongoing Platform Improvements",
      text: "Eligible standard enhancements may be included as part of your annual service plan.",
    },
  ] satisfies Array<{ icon: IconKey; title: string; text: string }>,
  features: [
    {
      icon: "users",
      title: "Constituent Registration and Management",
      text: "Individuals and families can register and maintain profile information while administrative users review and manage records.",
    },
    {
      icon: "creditCard",
      title: "Administrative Payment Processing",
      text: "Authorized administrators can record or accept payments on behalf of constituents and connect transactions to the right record.",
    },
    {
      icon: "receipt",
      title: "Front-Desk POS Support",
      text: "Front-desk personnel can accept payments for services, donations, registrations, memberships, and approved offerings.",
    },
    {
      icon: "wallet",
      title: "Online Payments",
      text: "Constituents can complete supported transactions from desktops, tablets, or mobile devices.",
    },
    {
      icon: "calendar",
      title: "Daily and Weekly Services",
      text: "Publish recurring services, prayers, worship schedules, ceremonies, programs, and community activities.",
    },
    {
      icon: "donation",
      title: "Donations and Giving Opportunities",
      text: "Create donation categories, campaigns, funds, and giving opportunities that are easy to find.",
    },
    {
      icon: "handHeart",
      title: "Volunteer Opportunities",
      text: "Share volunteer needs and allow constituents to express interest or register for opportunities.",
    },
    {
      icon: "reports",
      title: "Administrative Reports",
      text: "Generate operational, constituent, donation, payment, and service-related reports for authorized users.",
    },
    {
      icon: "userCog",
      title: "User and Role Management",
      text: "Support roles such as organization administrator, front-desk staff, constituent, volunteer coordinator, and reporting user.",
    },
    {
      icon: "mobile",
      title: "Mobile-Friendly Experience",
      text: "Support desktop computers, tablets, mobile phones, and front-desk workstations with a responsive experience.",
    },
  ] satisfies Array<{ icon: IconKey; title: string; text: string }>,
  userGroups: [
    {
      title: "For Constituents",
      icon: "users",
      points: [
        "Register and maintain profile information",
        "Review available services and programs",
        "Make donations and eligible payments",
        "View volunteering opportunities",
        "Use the platform from a phone, tablet, or computer",
      ],
    },
    {
      title: "For Front-Desk Staff",
      icon: "receipt",
      points: [
        "Accept supported payments in person",
        "Look up constituent records quickly",
        "Help constituents complete common tasks",
        "Support registrations, services, memberships, and donations",
        "Use practical workflows during busy service hours",
      ],
    },
    {
      title: "For Administrators",
      icon: "dashboard",
      points: [
        "Manage constituents, users, offerings, and roles",
        "Review payment and donation activity",
        "Publish services, events, and opportunities",
        "Generate reports for operations and leadership",
        "Coordinate updates with DigitalSeva support",
      ],
    },
  ] satisfies Array<{ title: string; icon: IconKey; points: string[] }>,
  solutions: [
    {
      icon: "landmark",
      title: "Faith-Based Organizations",
      text: "Support regular services, constituent records, donations, payments, volunteers, and front-desk activity in one platform.",
      examples: "Temples, churches, mosques, synagogues, and interfaith communities",
    },
    {
      icon: "building",
      title: "Community and Cultural Centers",
      text: "Publish programs, coordinate volunteers, manage registrations, and create a clearer digital experience for members.",
      examples: "Cultural associations, community centers, and education programs",
    },
    {
      icon: "handshake",
      title: "Charitable Nonprofits",
      text: "Promote donation opportunities, record constituent interactions, manage campaigns, and reduce manual administration.",
      examples: "Service nonprofits, charities, foundations, and volunteer-led groups",
    },
    {
      icon: "globe",
      title: "Global Nonprofits and NGOs",
      text: "Support distributed teams, international communities, and donor-facing workflows with a responsive platform designed for everyday nonprofit operations.",
      examples: "NGOs, foundations, service organizations, and community networks",
    },
  ] satisfies Array<{ icon: IconKey; title: string; text: string; examples: string }>,
  process: [
    {
      title: "Request a Demo",
      text: "Tell us about your organization, current processes, and the operational tasks you want to simplify.",
    },
    {
      title: "Review the Platform",
      text: "We walk through the existing standard capabilities and identify where DigitalSeva fits your needs.",
    },
    {
      title: "Configure Your Website",
      text: "Your approved logo, colors, content, services, giving options, and settings are prepared for launch.",
    },
    {
      title: "Launch and Maintain",
      text: "DigitalSeva supports hosting, maintenance, security updates, routine administration, and standard improvements.",
    },
  ],
  annualCoverage: [
    "Website hosting and technical maintenance",
    "Security updates and routine platform updates",
    "Configuration support and website-management assistance",
    "Operational support for approved platform workflows",
    "Eligible standard platform enhancements",
  ],
  pricing: [
    {
      name: "Annual Service Plan",
      price: "Quoted after review",
      description:
        "For organizations that want to use the existing DigitalSeva platform without an upfront software license fee.",
      features: [
        "Prebuilt standard platform access",
        "Hosting and maintenance",
        "Routine support and administration",
        "Configuration for your organization",
        "Eligible standard platform enhancements",
      ],
    },
    {
      name: "Implementation Add-Ons",
      price: "Scoped separately",
      description:
        "For migration, premium integrations, custom features, unusual workflows, or organization-specific requirements.",
      features: [
        "Data migration assessment",
        "Third-party payment setup support",
        "Custom content or workflow requests",
        "Premium integration planning",
        "Training beyond standard onboarding",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the DigitalSeva platform free?",
      answer:
        "The existing standard platform is offered without an upfront software license fee. Affordable annual hosting, maintenance, support, configuration, and website-management plans are available for nonprofits.",
    },
    {
      question: "Can we try the system before subscribing?",
      answer:
        "Organizations can request a demonstration and, when available, controlled trial access before making a decision.",
    },
    {
      question: "Can front-desk personnel accept payments?",
      answer:
        "Yes. Authorized front-desk or administrative users can use supported workflows to accept payments on behalf of constituents.",
    },
    {
      question: "Can constituents pay online?",
      answer:
        "Yes. The responsive platform allows constituents to complete supported transactions from compatible desktop and mobile devices.",
    },
    {
      question: "Are payment-processing fees included?",
      answer:
        "No. Payment-processor, banking, chargeback, hardware, and other third-party fees are separate unless specifically stated in the customer agreement.",
    },
    {
      question: "Are new features included?",
      answer:
        "Eligible standard platform enhancements may be included in the annual service plan. Custom development or organization-specific features may require separate pricing.",
    },
    {
      question: "Can the website be branded for our organization?",
      answer:
        "The platform can be configured with the organization's approved logo, colors, content, services, and selected settings.",
    },
    {
      question: "Does DigitalSeva support multiple religions and nonprofit types?",
      answer:
        "Yes. DigitalSeva is designed as an inclusive platform for faith-based, charitable, cultural, and community organizations.",
    },
  ],
  formOptions: {
    organizationTypes: [
      "Temple",
      "Church",
      "Mosque",
      "Synagogue",
      "Community center",
      "Charitable nonprofit",
      "NGO or foundation",
      "Cultural organization",
      "Other nonprofit",
    ],
    priorities: [
      "Constituent management",
      "Online donations",
      "Front-desk payments",
      "Services and events",
      "Volunteer coordination",
      "Reports and administration",
      "Full platform review",
    ],
    timelines: ["As soon as possible", "1-3 months", "3-6 months", "Still researching"],
  },
  testimonials: [] as Array<{ quote: string; name: string; role: string }>,
};

export type SiteContent = typeof siteContent;
