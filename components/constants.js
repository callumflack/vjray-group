const site = 'group'

// Nav items with the label 'Home' will not be shown
// in the desktop nav

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Strata Management',
    href: '/strata-management',
  },
  {
    label: 'Property Management',
    href: "/rental-property-management-for-landlords",
  },
  {
    label: 'Valuations',
    href: "/property-valuations",
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

const contactDetails = {
  phone: '1300 073 405',
  emergencyAfterHours: '0418 245 545',
  emergencyBusinessHours: '9784 7900'
}

const emergencyList = [{
  headline: 'Is it due to a natural disaster?',
  text: 'In the case of a natural disaster such as a major storm or flood etc please contact the NSW State Emergency Service on 132 500.',
}, {
  headline: 'Is it a rental property?',
  text: 'If your repair relates to a property that you are renting through one of our offices please go to the VJ Ray Group website.'
}, {
  headline: 'Is it within business hours?',
  text: 'Please contact us by telephone on 9784 7900 if your repair is urgent and during office hours. Please don\'t rely on an email for an urgent repair as your strata manager may not see the email in time to contact the relevant repairer.',
}, {
  headline: 'Is it after hours?',
  text: 'For after hours emergency repairs only contact our director Mike Pollard on 0418 245 545. Note that additional charges will apply for after hour repairs.',
}, {
  headline: 'Is it really urgent?',
  text: 'For non-urgent repairs please use the form below and provide us as much detail as possible about your repair request.',
}]

const servicesIntro = 'We do everything you’d expect: arrange meetings, collect levies, manage repairs and help with disputes. But we believe it shouldn’t stop there. Here’s how we go further:'

const servicesList = [{
  icon: 'emergency',
  headline: 'After-hours emergencies',
  text: 'We know that emergencies don’t just happen during office hours. And rather than just leave you with the phone number for a message service we have our most senior staff on call to help you with emergency repairs, whenever they occur.',
  link: false,
  buttonUrl: '/emergency',
  buttonLabel: 'Emergencies'
}, {
  icon: 'contents',
  headline: 'Contents insurance',
  text: 'Many owners and residents aren’t aware that damage to their furniture and possessions is not covered by the buildings insurance. That’s why we help with arranging contents insurance too. And depending on which company the building is insured with, there can be considerable savings by reducing insurances excess amounts.',
  link: false
}, {
  icon: 'bylaw',
  headline: 'By-law registration',
  text: 'With the introduction of the Strata Schemes Management Act 2015, the need for By-laws to be adopted and amended increased greatly. For example, did you know you often need to create a By-law BEFORE you renovate your bathroom?',
  link: false
}, {
  icon: 'contractor',
  headline: 'Contractor management',
  text: 'We all know how complex the licensing, WHS & insurance laws surrounding contractors are these days, so at VJ Ray we enlist the help of an independent company to continually monitor each and every contractor used by all of our strata schemes so that there is never any doubt that they comply.',
  link: false
}, {
  icon: 'voting',
  headline: 'Electronic voting',
  text: 'With the introduction of the Strata Schemes Management Act 2015, there is now the opportunity for strata schemes to elect to make some of the less complex decisions at a meeting by voting electronically, rather than attending the meeting in person.',
  link: false
}, {
  icon: 'service',
  headline: 'Online portal',
  text: 'We understand that its often quicker for you to help yourself, particularly if you are seeking information after hours. So we provide access to much of the commonly needed items through an online portal for each owner.',
  link: false
}, {
  icon: 'sun',
  headline: 'Coming soon…',
  text: 'We are constantly working to improve our help to strata owners and residents by taking advantage of technology as it becomes available. Things such as video meetings, an App to report repairs and maintenance items, and online contractor supervision are just a few of the things we are currently working on, so be sure to check back soon to see how they are coming along.',
  link: false
}]

const landlordIntro =
  "FOR LANDLORDS We do everything you’d expect: arrange meetings, collect levies, manage repairs and help with disputes. But we believe it shouldn’t stop there. Here’s how we go further:";

const landlordList = [{
  icon: 'emergency',
  headline: 'Reason One',
  text: 'We know that emergencies don’t just happen during office hours. And rather than just leave you with the phone number for a message service we have our most senior staff on call to help you with emergency repairs, whenever they occur.',
  link: false,
  buttonUrl: '/emergency',
  buttonLabel: 'Emergencies'
}, {
  icon: 'contents',
  headline: 'Reason Two',
  text: 'Many owners and residents aren’t aware that damage to their furniture and possessions is not covered by the buildings insurance. That’s why we help with arranging contents insurance too. And depending on which company the building is insured with, there can be considerable savings by reducing insurances excess amounts.',
  link: false
}, {
  icon: 'bylaw',
  headline: 'Reason Three',
  text: 'With the introduction of the Strata Schemes Management Act 2015, the need for By-laws to be adopted and amended increased greatly. For example, did you know you often need to create a By-law BEFORE you renovate your bathroom?',
  link: false
}]

export { 
  site, 
  navItems,
  contactDetails, 
  servicesIntro, 
  servicesList,
  landlordIntro, 
  landlordList 
}
