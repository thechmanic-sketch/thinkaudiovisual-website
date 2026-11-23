// Single source of truth for business details (keep NAP identical everywhere for local SEO).
export const site = {
  name: 'Think Audio Visual',
  shortName: 'Think AV',
  tagline: 'Reliable at all times',
  url: 'https://thinkaudiovisual.co.za',
  director: 'Mr T. Masango',
  address: {
    street: '78 Carnforth Avenue',
    suburb: 'Bonela',
    city: 'Durban',
    postalCode: '4091',
    region: 'KwaZulu-Natal',
    country: 'ZA',
  },
  // TODO(owner): confirm coordinates for the map + schema
  geo: { lat: -29.8516, lng: 30.9682 },
  phone: { display: '+27 83 418 0085', tel: '+27834180085' },
  landline: { display: '+27 31 811 1311', tel: '+27318111311' },
  email: 'admin@thinkaudiovisual.co.za',
  // TODO(owner): confirm WhatsApp number (assumed same as cell)
  whatsapp: '27834180085',
  whatsappMessage: "Hi Think AV, I'd like a quote for an event on ",
  // TODO(owner): confirm hours
  hours: 'Mon–Fri 08:00–17:00 · Events 7 days',
  areas: ['Durban CBD', 'Umhlanga', 'Ballito', 'Westville', 'Pinetown', 'Chatsworth', 'Umlazi', 'Pietermaritzburg', 'South Coast'],
  // TODO(owner): replace each '' with the real profile URL. Icons with an empty href are shown but
  // link to the contact page until filled in (so there are no dead links); remove any you don't use.
  social: [
    { label: 'Facebook', icon: 'facebook', href: '' },
    { label: 'Instagram', icon: 'instagram', href: '' },
    { label: 'TikTok', icon: 'tiktok', href: '' },
    { label: 'YouTube', icon: 'youtube', href: '' },
    { label: 'LinkedIn', icon: 'linkedin', href: '' },
  ] as { label: string; icon: string; href: string }[],
};

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const services = [
  {
    slug: 'sound-hire-durban',
    short: 'Sound',
    title: 'Sound & PA Hire',
    spec: '01 / SOUND',
    blurb: 'PA systems, line arrays, subs, wireless mics and DJ setups, with an engineer on the desk.',
    items: ['PA systems & line arrays', 'Subwoofers', 'Wireless & conference microphones', 'Digital mixing consoles', 'Live performance & backline', 'DJ setups', 'Audio recording'],
  },
  {
    slug: 'projector-screen-hire-durban',
    short: 'AV & Screens',
    title: 'Projector & Screen Hire',
    spec: '02 / AV',
    blurb: 'Data projectors, fastfold and daylight screens, laptops and video recording for presentations.',
    items: ['Fastfold screens', 'Daylight screens', 'Data projectors', 'Laptops & presentation aids', 'Video recording & projection'],
  },
  {
    slug: 'stage-hire-durban',
    short: 'Staging',
    title: 'Stage & Podium Hire',
    spec: '03 / STAGE',
    blurb: 'Performance, fashion-show and main-table stages, plus podiums, set up safely and on time.',
    items: ['Performance stages', 'Fashion show runways', 'Main table stages', 'Podium raising', 'Podiums & lecterns'],
  },
  {
    slug: 'event-lighting-hire-durban',
    short: 'Lighting',
    title: 'Event Lighting Hire',
    spec: '04 / LIGHT',
    blurb: 'Stage washes, moving heads, uplighting and décor lights that transform any venue.',
    items: ['Stage lights & moving heads', 'Uplighting', 'Décor lights', 'Disco & party lights'],
  },
] as const;

export const nav = [
  { label: 'Sound Hire', href: '/services/sound-hire-durban/' },
  { label: 'Services', href: '/services/' },
  { label: 'Our Work', href: '/our-work/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
