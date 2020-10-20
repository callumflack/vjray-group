// site type flag

const site = "group";

// formspree id

const formspreeId = "mnpwvglm";

// Nav items with the label 'Home' will not be shown
// in the desktop nav

const navItems = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Strata Management",
    href: "/strata-management"
  },
  {
    label: "Property Management",
    href: "/rental-property-management"
  },
  {
    label: "Valuations",
    href: "/property-valuations"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

// Location lists

const locationList = [
  {
    name: "Campsie Head Office",
    subOne: "8 Anglo Road",
    subTwo: "Campsie, NSW 2194",
    openOne: "Monday-Thursday 9-5.30pm",
    openTwo: "Friday 9-5pm",
    phoneNumber: "02 9784 7900",
    faxNumber: "02 9787 2952",
    email: "campsie@vjray.com.au",
    poBox: "PO Box 369 Campsie, NSW 2194",
    emergencyPhoneNumber: "1300 073 405",
    googleMapsUrl: "https://www.google.com.au/maps/place/V+J+Ray/@-33.9113278,151.1011612,17z",
    imageName: "campsie.jpg"
  },
  {
    name: "Caringbah Office",
    subOne: "18 President Avenue",
    subTwo: "Caringbah, NSW 2229",
    openOne: "Monday-Thursday 9-5.30pm",
    openTwo: "Friday 9-5pm",
    openThree: "Saturday 9-2pm",
    phoneNumber: "02 9541 3300",
    faxNumber: "02 9643 2220",
    email: "caringbah@vjray.com.au",
    poBox: "PO Box 369 Campsie, NSW 2194",
    emergencyPhoneNumber: "1300 073 405",
    googleMapsUrl: "https://www.google.com.au/maps/place/V.J.+Ray/@-34.0432583,151.1198929,17z",
    imageName: "caringbah.jpg"
  }
];

// site contacts

const contactDetails = {
  phone: "1300 073 405",
  emergencyAfterHours: "0418 245 545",
  emergencyBusinessHours: "9784 7900"
};

// Used in the contacts.js component
// Each page will show the locations in listed in
// the locations array for it's pathname

const contactLocationsForPathnames = {
  "/": {
    locations: ["Campsie Head Office", "Caringbah Office"]
  },
  "/strata-management": {
    locations: ["Campsie Head Office", "Caringbah Office"]
  },
  "/rental-property-management": {
    locations: ["Campsie Head Office"]
  },
  "/forms-and-fact-sheets": {
    locations: ["Campsie Head Office", "Caringbah Office"]
  },
  "/contact": {
    locations: ["Campsie Head Office", "Caringbah Office"]
  }
};

// "Home pg features" content

const featuresList = [
  {
    icon: "strata",
    border: true,
    headline: "Strata Management",
    lede: "Skip the hassle of Strata Management and get back your peace of mind.",
    link: "/strata-management"
  },
  {
    icon: "contents",
    border: true,
    headline: "Property Management",
    lede: "Get the best from your investment with the least amount of fuss.",
    link: "/rental-property-management"
  },
  {
    icon: "valuations",
    border: true,
    headline: "Real Estate Valuations",
    lede: "Trust the price and act with confidence. Qualified building valuations done right.",
    link: "/property-valuations"
  }
];

// "emergency" content

const emergencyList = [
  {
    headline: "Is it due to a natural disaster?",
    text:
      "In the case of a natural disaster such as a major storm or flood etc please contact the NSW State Emergency Service on 132 500."
  },
  {
    headline: "Is it a rental property?",
    text:
      "If your repair relates to a property that you are renting through one of our offices please go to the VJ Ray Group website."
  },
  {
    headline: "Is it within business hours?",
    text:
      "Please contact us by telephone on 9784 7900 if your repair is urgent and during office hours. Please don't rely on an email for an urgent repair as your strata manager may not see the email in time to contact the relevant repairer."
  },
  {
    headline: "Is it after hours?",
    text:
      "For after hours emergency repairs only contact our director Mike Pollard on 0418 245 545. Note that additional charges will apply for after hour repairs."
  },
  {
    headline: "Is it really urgent?",
    text:
      "For non-urgent repairs please use the form below and provide us as much detail as possible about your repair request."
  }
];

// "services" content

const servicesIntro =
  "We do everything you’d expect: arrange meetings, collect levies, manage repairs and help with disputes. But we believe it shouldn’t stop there. Here’s how we go further:";

const servicesList = [
  {
    icon: "emergency",
    headline: "After-hours emergencies",
    text:
      "We know that emergencies don’t just happen during office hours. And rather than just leave you with the phone number for a message service we have our most senior staff on call to help you with emergency repairs, whenever they occur.",
    link: false,
    buttonUrl: "/emergency",
    buttonLabel: "Emergencies"
  },
  {
    icon: "contents",
    headline: "Contents insurance",
    text:
      "Many owners and residents aren’t aware that damage to their furniture and possessions is not covered by the buildings insurance. That’s why we help with arranging contents insurance too. And depending on which company the building is insured with, there can be considerable savings by reducing insurances excess amounts.",
    link: false
  },
  {
    icon: "bylaw",
    headline: "By-law registration",
    text:
      "With the introduction of the Strata Schemes Management Act 2015, the need for By-laws to be adopted and amended increased greatly. For example, did you know you often need to create a By-law BEFORE you renovate your bathroom?",
    link: false
  },
  {
    icon: "contractor",
    headline: "Contractor management",
    text:
      "We all know how complex the licensing, WHS & insurance laws surrounding contractors are these days, so at VJ Ray we enlist the help of an independent company to continually monitor each and every contractor used by all of our strata schemes so that there is never any doubt that they comply.",
    link: false
  },
  {
    icon: "voting",
    headline: "Electronic voting",
    text:
      "With the introduction of the Strata Schemes Management Act 2015, there is now the opportunity for strata schemes to elect to make some of the less complex decisions at a meeting by voting electronically, rather than attending the meeting in person.",
    link: false
  },
  {
    icon: "service",
    headline: "Online portal",
    text:
      "We understand that its often quicker for you to help yourself, particularly if you are seeking information after hours. So we provide access to much of the commonly needed items through an online portal for each owner.",
    link: false
  },
  {
    icon: "sun",
    headline: "Coming soon…",
    text:
      "We are constantly working to improve our help to strata owners and residents by taking advantage of technology as it becomes available. Things such as video meetings, an App to report repairs and maintenance items, and online contractor supervision are just a few of the things we are currently working on, so be sure to check back soon to see how they are coming along.",
    link: false
  }
];

// "Property management" content

const landlordIntro =
  "With over 55 years experience of managing rental properties for landlords we know what's needed to help you get the best from your investment with the least amount of fuss. Here's just 3 of the many ways we'll sort it for you.";

const landlordList = [
  {
    icon: "database",
    headline: "Prospective tenant database.",
    text:
      "We maintain an extensive database of tenants that are looking for a property right now, so when your property becomes vacant we can offer it to them, rather than wait for them to come looking.",
    link: false
  },
  {
    icon: "contents",
    headline: "Regular property inspections.",
    text:
      "More than just finding a new tenant, we need to make sure that they look after your investment property after they move in. So we regularly inspect each property and send you a comprehensive inspection report.",
    link: false
  },
  {
    icon: "online",
    headline: "Online portal.",
    text:
      "We recognise that our landlords might not be available when we are open, so you can visit our online landlords portal  to get the latest information about your property.",
    link: false,
    buttonUrl: "https://www.lookatmyproperty.com.au/934897/Account/Logon?type=1000",
    buttonLabel: "Login"
  }
];

const tenantIntro =
  "When you become a VJ Ray tenant, we're here to help you too. Here are just a couple of ways.";

const tenantList = [
  {
    icon: "bylaw",
    headline: "Complete info and instructions pack.",
    text:
      "When you move in we will give you comprehensive instructions about the property and what is expected of you as the tenant, so its easy for you to move in and live in a hassle free property.",
    link: false
  },
  {
    icon: "contractor",
    headline: "Quick and easy repairs.",
    text:
      "No matter how well a property is maintained, we know that little things need repair from time to time and that sometimes emergencies can occur. So just give us a call or lodge your repair request on line and we will immediately contact the landlord for their approval to get the repair underway.",
    link: false
  },
  {
    icon: "online",
    headline: "Online tenant info.",
    text:
      "24 hours a day, 7 days a week you can access your details on line through our tenant portal. to check where your rent is paid to or update your contact details.",
    link: false,
    buttonUrl: "https://www.lookatmyproperty.com.au/934897/Account/Logon?type=1001",
    buttonLabel: "Login"
  }
];

// "Strata" content

const strataIntro = "Intro paragraph selling our Strata Management services going over two or three lines.";

const strataList = [
  {
    icon: "emergency",
    headline: "After-hours emergencies",
    text:
      `For after-hours emergency repairs only please contact the following;

      Plumbing – Local Choice Plumbing – 0430 084 442

      Electrical – Dr Sparks Electrical – 0410 561 825

      Locksmith – A. Abbott Locksmiths – 1300 655 787

      Additional charges may apply
      `,
    link: false
  },
  {
    icon: "contractor",
    headline: "Contractor management",
    text:
      "We all know how complex the licensing, WHS & insurance laws surrounding contractors are these days, so at VJ Ray we enlist the help of an independent company to continually monitor each and every contractor used by all of our strata schemes so that there is never any doubt that they comply.",
    link: false
  }
];

// "Valuations" content

const valuationsList = [
  {
    number: "1",
    headline: "Strata Building Insurance Valuations",
    text:
      "We carry out in excess of 1500 insurance valuations per year and can quickly turn around your request with the full knowledge of the requirements of the Strata Schemes Management Act."
  },
  {
    number: "2",
    headline: "Stamp Duty Valuations",
    text:
      "We carry out valuations that meet the requirements of the office of State Revenue to assist you in meeting your stamp duty obligations."
  },
  {
    number: "3",
    headline: "Capital Gains Tax Valuations",
    text:
      "Whether current or retrospective reports we have the expertise and knowledge to carry out valuations which will help you when assessing your capital gains tax liability."
  },
  {
    number: "4",
    headline: "Fair Market Value Valuations",
    text:
      "Should you need to ascertain the present or retrospective value of a property we can help you by providing a valuation report with the minimum of fuss."
  },
  {
    number: "5",
    headline: "Pre-Sale and Pre-Purchase",
    text:
      "With over 50 years experience in real estate we have the knowledge and expertise to advise on the pre purchase or the pre-sale values, when you need advice that is independent of the selling agent."
  },
  {
    number: "6",
    headline: "Family Law Valuations",
    text:
      "With extensive experience in the Family Law we are in a position to issue valuations for all stages of Family Law proceedings."
  },
  {
    number: "7",
    headline: "Foreign Ownership Valuations and Advice",
    text:
      "With the ever changing area of foreign ownership regulation, we are able to provide you with valuation reports to assist you in your dealing with all government departments."
  }
];

// Facts and forms

const forms = [
  {
    headline: "Application for Tenancy",
    subheadline: "Download and print to use",
    link: "/static/forms/Application for Tenancy.pdf"
  },
  {
    headline: "Ingoing Condition Report",
    subheadline: "A sample PDF",
    link: "/static/forms/Sample-IngoingConditionReport.pdf"
  },
  {
    headline: "Routine Inspection Report",
    subheadline: "A sample PDF",
    link: "/static/forms/Sample-RoutineInspectionReport.pdf"
  }
];

const factSheets = [
  {
    headline: "New Tenant Checklist",
    subheadline: "",
    link: "/static/fact-sheets/NSWFT_FS_New_tenant_checklist.pdf"
  },
  {
    headline: "Residential Tenancies Act",
    subheadline: "",
    link: "/static/fact-sheets/Residential Tenancies Act 2010.pdf"
  },
  {
    headline: "Residential Tenancies Regulation",
    subheadline: "",
    link: "/static/fact-sheets/Residential Tenancies Regulation 2010-664.pdf"
  },
  {
    headline: "Leading Property Managers of Australia",
    subheadline: "Why choose an LPMA member to manage your investment property?",
    link: "/static/fact-sheets/LPMA Brochure.pdf"
  }
];

export {
  site,
  formspreeId,
  navItems,
  contactLocationsForPathnames,
  locationList,
  contactDetails,
  featuresList,
  servicesIntro,
  servicesList,
  landlordIntro,
  landlordList,
  tenantIntro,
  tenantList,
  strataIntro,
  strataList,
  valuationsList,
  forms,
  factSheets
};
