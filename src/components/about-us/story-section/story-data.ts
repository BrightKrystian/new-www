interface Story {
  images: readonly { src: string; alt: string }[]
  logos: readonly { src: string; alt: string }[]
  heading: string
  subheading: string
  content: string
}
export const story: readonly Story[] = [
  {
    images: [
      {
        src: '/images/why-us/timeline/michal_history.png',
        alt: 'Michał Łukasiewicz',
      },
      {
        src: '/images/why-us/timeline/daniel_history.png',
        alt: 'Daniel Makurat',
      },
    ],
    logos: [],
    heading: '2005-2011',
    subheading: '',
    content: `Michał and Daniel, the founders of Bright Inventions, met while studying Computer Science at Gdansk University of Technology. Then, while working in one of the global IT companies they decided to set up their own business and create a place where people would really enjoy working in.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/why-us/timeline/bright-inventions.png',
        alt: 'bright inventions logo',
      },
    ],
    heading: '2012',
    subheading: '',
    content: `Bright Inventions is born!`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/why-us/timeline/practi.png',
        alt: 'practi logo',
      },
    ],
    heading: '2013',
    subheading: '',
    content: `The beginning of cooperation with one of our main business partners, Practi by JustEat.`,
  },
  {
    images: [
      {
        src: '/images/why-us/timeline/piotr-mionskowski.png',
        alt: 'Piotr Mionskowski',
      },
      {
        src: '/images/why-us/timeline/mateusz-klimczak.png',
        alt: 'Mateusz Klimczak',
      },
    ],
    logos: [],
    heading: '2014',
    subheading: '',
    content: `First team members appear. Piotr, Adam and Mateusz joined the team. Piotr and Mateusz are playing the main roles in day-to-day company life till these days.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/why-us/timeline/smarthelp_logo2015.png',
        alt: 'Smart Help logo',
      },
    ],
    heading: '2015',
    subheading: '',
    content: `We started working on SmartHelp project, an emergency service app that allows users to easily call for help and provide relevant authorities with personal details.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/why-us/timeline/bds.png',
        alt: 'Baltic Data Science logo',
      },
    ],
    heading: '2016',
    subheading: '',
    content: `Baltic Data Science is founded by Bright Inventions & Datarella, a data science and blockchain consulting company specializing in business-focused solutions. We are entering the cryptocurrency world. New services available. Development of the first Blockchain features.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/why-us/timeline/united-nations.png',
        alt: 'United Nations logo',
      },
    ],
    heading: '2017',
    subheading: '',
    content: `The rise of our successful cooperation with the United Nations organisation.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/why-us/timeline/clutch.png',
        alt: 'Clutch logo',
      },
    ],
    heading: '2018',
    subheading: '',
    content: `Bright Inventions among TOP App Development and B2B agencies in Poland according to Clutch’s reviews.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/5c597db37cfe14a8e24f4a0f_bright_inventions_logo_500-01.png',
        alt: 'Logo from 2001',
      },
    ],
    heading: '2019',
    subheading: '',
    content: `New services launched to support our clients in product design. We now have 30 Bright People on board.`,
  },
  {
    images: [
      {
        src: '/images/why-us/timeline/Magda2020.png',
        alt: 'Magda',
      },
      {
        src: '/images/why-us/timeline/Maciej2020.png',
        alt: 'Maciej',
      },
      {
        src: '/images/why-us/timeline/bartek2020.png',
        alt: 'Bartek',
      },
    ],
    logos: [],
    heading: '2020',
    subheading: '',
    content: `The team is growing. There are 58 Bright People on board.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/bright-treasury.png',
        alt: 'Bright Treasury',
      },
    ],
    heading: '2021',
    subheading: '',
    content: `We launched a beta version of Bright Treasury – our original app dedicated to Substrate Blockchain networks.`,
  },
  {
    images: [],
    logos: [
      {
        src: '/images/why-us/timeline/birthday_2022.png',
        alt: 'Bright Inventions 10th birthday',
      },
      {
        src: '/images/why-us/timeline/timeline_mirovia.png',
        alt: 'Mirovia',
      },
    ],
    heading: '2022',
    subheading: '',
    content: `We celebrated 10th birthday! Also, we joined the Nordic Group Mirovia.`,
  },  
] as const
