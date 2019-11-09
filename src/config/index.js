module.exports = {
  siteTitle: 'Jorge Quitério | DevOps Engineer',
  siteDescription: '',
  siteKeywords: 'Jorge Quitreio, DevOps',
  siteUrl: 'https://jorge.quiterio.eu',
  siteLanguage: 'en_UK',
  googleAnalyticsID: 'UA-69491700-1',
  googleVerification: 'JaT8lN2AdrkhG9bH0QwZ5SRLq39FxRZhdyXcMs5lMG0',
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
  greenColor: '#000000',
  navyColor: '#7A7A7A',
  darkNavyColor: '#FFFFFF',

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
