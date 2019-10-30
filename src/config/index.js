module.exports = {
  siteTitle: 'Jorge Quitério | DevOps Engineer',
  siteDescription: '',
  siteKeywords: 'Jorge Quitreio, DevOps',
  siteUrl: 'https://jorge.quiterio.eu',
  siteLanguage: 'en_UK',
  //googleAnalyticsID: 'UA-45666519-2',
  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jorge Quiterio',
  location: 'Germany',
  email: 'jorge@quiterio.eu',
  github: 'https://github.com/jquiterio',
  twitterHandle: '@jquiterio00',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/jquiterio',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jquiterio00',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jquiterio00',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#BA63FF',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
