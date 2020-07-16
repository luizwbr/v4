module.exports = {
  siteTitle: 'Luiz Felipe Weber | Consultor de tecnologia',
  siteDescription:
    'Luiz Weber é um consultor de tecnologia, nascido em Cascavel / PR o qual é especializado em customizações em CMS como Joomla, Wordpress e e-commerces como Magento ou Virtuemart. Também trabalha com consultoria em Big Data, é entusiasta da área de segurança da informação e possui conhecimentos em criação de páginas web e prototipação com Adobe XD.',
  siteKeywords:
    'Luiz Weber, Luiz, Weber, luizwbr, front-end, back-end, web developer, javascript, php, design, e-commerce, joomla, wordpress, magento, virtuemart',
  siteUrl: 'http://weber.eti.br',
  siteLanguage: 'pt_BR',
  googleAnalyticsID: 'UA-10598838-1',
  googleVerification: '',
  name: 'Luiz Felipe Weber',
  location: 'Cascavel, PR',
  email: 'luizwbr@gmail.com',
  github: 'https://github.com/luizwbr',
  twitterHandle: '@luizwbr',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/luizwbr',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/luizwbr',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/luizwbr',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/luizwbr',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/luizwbr',
    },
  ],

  navLinks: [
    {
      name: 'Sobre',
      url: '/#about',
    },
    {
      name: 'Experiência',
      url: '/#jobs',
    },
    {
      name: 'Projetos',
      url: '/#projects',
    },
    {
      name: 'Contato',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#0076a8',
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
