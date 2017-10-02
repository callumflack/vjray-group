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

const icons = {
    logo: `M21.28,65.93,19.2,64.86c-.42-.22-.53-.36-.53-.55s.19-.38.62-.38a4.81,4.81,0,0,1,2.47.81l1.19-2.44a7.61,7.61,0,0,0-3.45-.85c-2.54,0-3.8,1.26-3.8,3.06a3.06,3.06,0,0,0,1.79,2.86l2.21,1.11c.32.16.49.29.49.53s-.32.45-.85.45a5.46,5.46,0,0,1-3.16-1.24L14.9,70.86A8.59,8.59,0,0,0,19.18,72c2.59,0,4-1.13,4-3.21A2.93,2.93,0,0,0,21.28,65.93ZM44.87,22,5.09,46.15,5,46.32h9.88L15,55.43l60.15.09v-9L85,46.4ZM27.43,51.22c-1.9.36-1.3-2.11-.43-2.75h.52l.52.43A2,2,0,0,1,27.43,51.22Zm.43-11.77L24.08,51.39l-2.58.09L19.26,41.25l2-1.29,1.46,7.39v.17h.09l3.35-10.66L29,35.15C29.17,35.42,28.09,38.69,27.86,39.44Zm3.7,9.71-.26-4.38,1.63-1.46.26-.09c.64,2.62-.75,4.12,1.37,5.5,2.29-.18,1.89-2.41,1.89-4.81l.09-13.23,2.32-1.55.09,5.07c0,4,.68,13.06-1,15.38C36.42,51.6,32.61,51.71,31.55,49.15Zm8.68,2.06a1.27,1.27,0,0,1-1-2c.2-.42.39-.46.77-.69a1.43,1.43,0,0,1,1,.69A1.53,1.53,0,0,1,40.23,51.22Zm11.94.09H50.11c-.6-1.6-1.79-8.89-3-9.19l-.17,9.11-2.15.09q0-12.8.09-25.61c3.45,1.72,8.12,4.07,6.87,9.88a7.32,7.32,0,0,1-2.15,4.3L52.18,51Zm9.37,0-1.37-5.41H56.64L55.1,51.22a5.15,5.15,0,0,1-2,.17L53,51.3,58.1,33.69c2.43,1.19,2,2.38,2.75,5.16l2.92,12.55Zm7.22-4.64-.17,4.64H66.44c0-6.63-1.57-9.86-3.35-14.61l2.58,1.55,2.06,5.59,1.55-3.27a3.67,3.67,0,0,1,1.8,1C70.81,43.47,69.31,45,68.76,46.66ZM42.92,65c0-1.75-1.14-3.32-3.82-3.32H34.78V71.78h2.75V68l2.6,3.76h3.43L40.75,68A3,3,0,0,0,42.92,65Zm-4.19,1.27h-1.2V64.09h1.2c.84,0,1.34.32,1.34,1.07S39.56,66.26,38.73,66.26ZM24.67,64.18H27.2v7.6h2.75v-7.6h2.53V61.67h-7.8ZM47,29.65v9.28h.09a5.93,5.93,0,0,0,1.72-7.65C48.41,30.5,48.06,29.79,47,29.65Zm21.25,32L64.35,71.78h3L68,69.89h3.45l.62,1.89h3L71.2,61.67Zm.43,6.05,1-3.16,1,3.16ZM58.53,39.36l-1.2,4.3h2.32l-.95-4.3ZM49,61.67,45.07,71.78h3l.62-1.89h3.45l.62,1.89h3L51.92,61.67Zm.43,6.05,1-3.16,1,3.16Zm6.77-3.54h2.53v7.6h2.75v-7.6H64V61.67h-7.8Z`,

    emergency: 'M71.83,23.32H59.45v-1a1,1,0,0,0-1-1V19.6l8.11,1.6a3.56,3.56,0,0,0,.63.06,3.93,3.93,0,0,0,3.65-4.13c0-2.52-2-4.51-4.28-4.07l-8.11,1.6V14a1,1,0,0,0-1-1H53.25a1,1,0,0,0-1,1v.63l-8.1-1.6c-2.27-.44-4.28,1.56-4.28,4.07a3.92,3.92,0,0,0,3.65,4.13,2.61,2.61,0,0,0,.63-.08l8.1-1.6v1.66a1,1,0,0,0-1,1v1H32.62A13.44,13.44,0,0,0,19.2,36.75V48.09h-1a1,1,0,0,0-1,1v4.13a1,1,0,0,0,1,1H34.68a1,1,0,0,0,1-1V49.12a1,1,0,0,0-1-1h-1V38.81a1,1,0,0,1,1-1h16.5v1a1,1,0,0,0,1,1h6.2a1,1,0,0,0,1-1v-1H71.83a1,1,0,0,0,1-1V24.35A1,1,0,0,0,71.83,23.32ZM58.42,16.77l8.5-1.68c1-.2,1.83.82,1.83,2s-.87,2.23-1.83,2l-8.5-1.68ZM33.65,52.23H19.2V50.17H33.65ZM51.19,35.71H34.68a3.1,3.1,0,0,0-3.1,3.1v9.27H21.26V36.75A11.36,11.36,0,0,1,32.62,25.4H51.19Zm1-18.21-8.49,1.67c-1,.19-1.83-.82-1.83-2a1.9,1.9,0,0,1,1.59-2.07h.24l8.49,1.67Zm2.07-2.43h2.07v6.19H54.29Zm3.1,22.7H53.25v-1s0,0,0-.06V24.36s0,0,0-.06v-1h4.13ZM70.8,35.71H59.45V25.4H70.8Zm-46.15,21c-.77.79-7.52,7.8-7.52,12.08a8.26,8.26,0,0,0,16.52,0c0-4.3-6.75-11.3-7.52-12.08A1.07,1.07,0,0,0,24.65,56.67Zm.73,18.27a6.21,6.21,0,0,1-6.2-6.2c0-2.6,4-7.43,6.2-9.85,2.23,2.42,6.2,7.26,6.2,9.85A6.21,6.21,0,0,1,25.38,74.93Z',

    service: 'M49,35.77A24.81,24.81,0,0,0,25.22,60.52v1H74.77v-1A24.79,24.79,0,0,0,51,35.77V32.65h3.1V30.58H45.87v2.07H49ZM72.69,59.5H27.31a22.71,22.71,0,0,1,45.38,0ZM33.82,53.69a17.47,17.47,0,0,1,3.77-5.58,17.67,17.67,0,0,1,5.58-3.77l-.81-1.9a19.54,19.54,0,0,0-6.24,4.21,19.75,19.75,0,0,0-4.21,6.24Zm-1.25-19-4.12-4.64-1.54,1.37L31,36.08Zm45.29,35.1v-6.2H22.13v6.2H18v2.07H82V69.81Zm-2.05,0H24.2V65.68H75.81ZM36.18,28.24l-2.06-.12-.37,6.19,2.06.12Zm-5.7,9-6.19-.37-.11,2.05,6.17.37Z',

    lockin: 'M48.95,37.51h2.12V35.4H48.95Zm-4.24,0h2.12V35.4H44.71Zm9.52,24.33H52.12V58.68a5.29,5.29,0,0,1,10.58,0v4.24h2.12V58.68a7.41,7.41,0,0,0-14.81,0v3.17H35.19V77.71h19ZM52.12,75.59H37.31V64H52.12Zm-6.35-7.41H43.65v4.24h2.12ZM74.33,80.88V48.09h7.91L50,17,37.31,29.24V20.59H28.85V37.4L17.75,48.09h7.91V80.88H17.21V83H82.79V80.88ZM31,22.7h4.24v8.57L31,35.36ZM23,46l27-26L77,46ZM72.22,80.88H27.78V48.09H72.22Zm-19-45.49v2.12h2.12V35.4Z',

    experience: 'M67.76,53.19l-4.17,9L51,37.17v-5H70.52l-3.67-7.34,3.67-7.33H48.91V37.19L36.1,65.49,29.9,54.79,18,82.5H82ZM51,19.6H67.13l-2.62,5.25,2.62,5.25H51ZM50,39.85l4.3,8.56-1.5.42L50,46.53,47.29,48.8l-1.15-.4ZM21.15,80.39l9-20.95L35,67.84,29.36,80.39ZM45.28,50.33l2.44.87,2.33-1.92,2.29,1.89,2.93-.84,7.19,14.32L56.35,77.88l1.91.87,9.56-20.66L78.69,80.41h-47ZM24.79,40.57H35.29a5.25,5.25,0,0,0,5.25-5.25,5.16,5.16,0,0,0-2.2-4.25A5.24,5.24,0,0,0,29.94,26a6.14,6.14,0,0,0-.95-.08,6.26,6.26,0,0,0-6,4.53,5.24,5.24,0,0,0,1.83,10.15Zm-.72-8.3.67-.15.13-.68A4.19,4.19,0,0,1,29,28a3.75,3.75,0,0,1,1,.14l.58.14.42-.41a3.13,3.13,0,0,1,5.14,3.34l-.35.9.87.42a3.13,3.13,0,0,1-1.36,6H24.79a3.14,3.14,0,0,1-.72-6.21Z',

    contents: 'M47.19,64.28H45.07v4.24h2.12ZM43.95,32.51h2.12V30.4H43.95ZM69.33,75.88V43.09h7.91L45,12,32.31,24.24V15.59H23.85V32.4L12.75,43.09h7.91V75.88H12.21V78H77.79V75.88ZM26,17.7h4.24v8.57L26,30.36ZM18,41l27-26L72,41ZM67.22,75.88H22.78V43.09H67.22ZM39.71,32.51h2.12V30.4H39.71ZM55.65,57.94H53.53V54.76a7.41,7.41,0,1,0-14.81,0v3.17h2.12V54.76a5.29,5.29,0,0,1,10.58,0v3.17H36.61V73.8h19ZM53.53,71.69H38.72V60H53.53ZM48.17,30.4v2.12h2.12V30.4Z',

    bylaw: 'M60.7,30H41.32V31.9H60.7Zm0-8.7H41.32V23.2H60.7ZM25.81,69.65h1.94V67.71H25.81ZM78,31.11c-3.84-3.83-8.32-1.28-9.59,0L66.51,33V14.55H36l-16,16V75.45H66.5V52.12L77.95,40.69C79.23,39.41,81.83,35,78,31.11ZM35.44,17.86V30H23.31ZM64.58,73.51H21.94V31.9H37.38V16.49H64.56V34.9l-3.78,3.78h-35v1.93h33l-7.75,7.74H25.81v1.95H49.16L41.41,58H25.81V60H40l-.76,9.8L49.65,69,64.58,54.06ZM41.79,62,47,67.22l-5.68.44Zm7.42,4.68-6.85-6.84L69.05,33.17,75.9,40Zm28-28.1-6.71-6.7a4.9,4.9,0,0,1,6.09.61A4.72,4.72,0,0,1,77.2,38.56Zm-29.36,24,24-23.92-1.37-1.37-24,23.92Zm-14.28,7.1H35.5V67.71H33.56Zm-3.87,0h1.94V67.71H29.69Z',

    contractor: 'M63.15,64.53l1.36,1.36,1.36-1.36-1.36-1.36ZM56.7,47.18l1.12-1.12a2.93,2.93,0,0,0-.06-4.15l3.84-3.84a11.53,11.53,0,0,0,10-3.23C74.74,31.75,76.13,27.4,74,21.6l-6,6L63.6,26.53l-1.09-4.36,6-6c-3.78-1.51-9.1-1.81-13.24,2.34a11.53,11.53,0,0,0-3.23,10L43,37.58,26.73,21.29,22,15l-7,7,6.29,4.72L37.55,43,17.12,63.46a6.76,6.76,0,0,0,0,9.55,6.85,6.85,0,0,0,9.55,0l15.2-15.2a2.91,2.91,0,0,0,4.15.06l1.12-1.12L63.43,73A6.75,6.75,0,0,0,73,63.47Zm-2.53-18a10.07,10.07,0,0,1,2.51-9.33,9.4,9.4,0,0,1,8.18-2.72l-4.48,4.48L62,28.12l6.55,1.63L73,25.29a9.57,9.57,0,0,1-2.72,8.18A9.87,9.87,0,0,1,61,36L56.4,40.55l-.67-.67a2.9,2.9,0,0,0-4.09,0L48.47,43l-4.1-4.1ZM17.91,21.82l3.89-3.88,2.92,3.9-2.91,2.9ZM23.27,26,26,23.29,47.11,44.4l-2.73,2.73Zm2,45.62a4.82,4.82,0,0,1-6.82-6.82L38.92,44.39l4.1,4.1-3.17,3.17a2.88,2.88,0,0,0,0,4.09l.67.67ZM45.79,55.37,44.67,56.5a1,1,0,0,1-1.36,0L41.21,54.4a1,1,0,0,1,0-1.36L53,41.25a1,1,0,0,1,1.36,0l2.09,2.09a1,1,0,0,1,0,1.36ZM71.62,71.64a4.82,4.82,0,0,1-6.81,0L48.52,55.36l6.82-6.82L71.62,64.82A4.83,4.83,0,0,1,71.62,71.64ZM57.68,59.07,59,60.43l1.36-1.36L59,57.71Zm2.73,2.73,1.36,1.36,1.36-1.36-1.36-1.36Zm-41,7.57,1.36,1.36,3.85-3.85-1.36-1.36Z',

    voting: 'M59.44,35.88H44.5v2H59.44Zm0-4.91H44.5v2H59.44Zm.91-20.47H29.65a5.8,5.8,0,0,0-5.79,5.79V73.71a5.8,5.8,0,0,0,5.79,5.79h30.7a5.8,5.8,0,0,0,5.79-5.79V16.29A5.8,5.8,0,0,0,60.35,10.5Zm3.79,63.21a3.79,3.79,0,0,1-3.79,3.79H29.65a3.79,3.79,0,0,1-3.79-3.79V65.64H64.14Zm0-10.07H25.86V21.11H64.14Zm0-44.53H25.86V16.29a3.79,3.79,0,0,1,3.79-3.79h30.7a3.79,3.79,0,0,1,3.79,3.79ZM45,76a4.47,4.47,0,1,0-4.47-4.47A4.47,4.47,0,0,0,45,76Zm0-6.93a2.47,2.47,0,1,1-2.47,2.47A2.47,2.47,0,0,1,45,69.1Zm14.44-22H44.5v2H59.44ZM38.69,49.46l-1.07-1.07-2.48,2.48-1-1L33.11,51l2,2ZM42,44.21H29.63v12.4H42Zm-2,10.4h-8.4v-8.4H40ZM42,28H29.63v12.4H42Zm-2,10.4h-8.4V30H40ZM59.44,52.05H44.5v2H59.44ZM38.69,33.28l-1.07-1.07-2.48,2.48-1-1-1.07,1.07,2,2ZM41,16.93H49v-2H41Z',

    sun: 'M23.44,29.2l-3.86-2.58-1.29,1.93,3.86,2.58Zm12.42-9.31L32.3,11.3l-2.15.89,3.56,8.57ZM46.16,9H43.84v9.28h2.32Zm-5.23,9.57L40,14l-2.28.45L38.65,19Zm-14,6.72-6.56-6.56-1.64,1.64,6.56,6.56ZM52.26,14.47,50,14l-.91,4.56,2.28.45ZM31.12,22.15l-2.58-3.87-1.93,1.29,2.58,3.87ZM60.8,23.44l2.58-3.87-1.93-1.29-2.58,3.87Zm14.73,14.3L71,38.65l.45,2.28L76,40Zm0,14.51L76,50l-4.56-.91L71,51.35Zm-5.41-16.4L78.7,32.3l-.89-2.15L69.24,33.7Zm-3.55-6.66,1.29,1.93,3.87-2.58-1.29-1.93ZM45,22.89A22.11,22.11,0,1,0,67.11,45,22.14,22.14,0,0,0,45,22.89Zm0,41.9A19.79,19.79,0,1,1,64.79,45,19.8,19.8,0,0,1,45,64.79Zm14.85-52.6L57.7,11.3l-3.56,8.59,2.15.88ZM20.76,33.7l-8.57-3.56L11.3,32.3l8.59,3.56ZM64.7,26.93l6.56-6.56-1.64-1.64-6.56,6.56ZM14.47,37.74,14,40l4.56.91L19,38.65Zm44.4,30.11,2.58,3.87,1.93-1.29-2.58-3.87Zm-4.72,2.27L57.7,78.7l2.15-.89L56.3,69.23Zm8.91-5.41,6.56,6.56,1.64-1.64L64.7,63.07Zm-14,6.71L50,76l2.28-.45L51.35,71ZM71.72,43.84v2.32H81V43.84ZM43.84,81h2.32V71.72H43.84Zm25.4-24.7,8.57,3.56.89-2.15-8.59-3.56ZM14,50l.45,2.28L19,51.35l-.45-2.28ZM66.56,60.8l3.86,2.58,1.29-1.93-3.86-2.58ZM19.88,54.15l-8.59,3.56.89,2.15,8.59-3.56Zm-1.6-10.31H9v2.32h9.28ZM37.74,75.53,40,76l.91-4.56L38.65,71ZM23.44,60.8l-1.29-1.93-3.87,2.58,1.29,1.93Zm6.71,17,2.15.89,3.55-8.58-2.15-.89ZM25.28,63.07l-6.56,6.56,1.64,1.64,6.56-6.56Zm3.91,3.49-2.58,3.87,1.93,1.29,2.58-3.87Z',
}

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

export { icons, contactDetails, servicesIntro, servicesList }