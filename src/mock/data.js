import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '#AhmadCaughtCoronaIris', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    "Wedding website to share details and media from Iris and Ahmad's upcoming wedding", // e.g: Welcome to my website
};

// LIVESTREAM DATA
export const livestreamData = {
  title: 'Livestream',
  lang: 'en',
  description: "A livestream of the events from Iris and Ahmad's Nikkah ceremony, and more!",
  paragraphOne:
    "We are streaming our Nikkah Ceremony live at 12:00 PM EST. It's a way to include all of our loved ones on our special day, even if they cannot physically join us.",
};

// GUESTBOOK DATA
export const guestbookData = {
  title: 'Guestbook',
  lang: 'en',
  description:
    'A page for family and friends to leave a message for the bride and groom. You can leave your well wishes, give your best marriage advice, or simply just say hello!',
  paragraphOne: 'Share your thoughts and wishes with the Newly Weds!',
  paragraphTwo:
    "Feel free to write any message you'd like, best wishes, marriage advice, jokes, fun date suggestions, or even a link to a picture of whatever outfit you wore on our wedding day",
  paragraphThree: 'Only the Bride and Groom will see your message',
};

// HERO DATA
export const heroData = {
  title: "Hi, we're ",
  name: 'Iris & Ahmad',
  subtitle: "And we're getting married!",
  cta: 'Learn More',
  img: 'iaWeds_Hero.jpeg',
};

// ABOUT DATA
export const aboutData = {
  title: "What's Happening?",
  img: 'iaWeds_About.jpg',
  paragraphOne: 'Alhamdulilah, we are elated to announce that we are tying the knot this year!',
  paragraphTwo:
    "Our Nikkah will take place on January 8th, 2022, Insha'Allah. The Wedding Reception will happen on January 9th, 2022, Insha'Allah",
  paragraphThree:
    'As much as we would love to have all our family and friends join us from far and wide, due to the recent COVID variant and travel restrictions we understand that not everyone can physically attend. However we hope that through this website you can join us in spirit, and watch our special occasion through Livestream and photos.',
};

// EVENTS DATA
export const eventsData = [
  {
    id: nanoid(),
    img: 'iaWeds_Nikkah.jpg',
    title: 'Nikkah Livestream',
    info: 'Watch our Nikkah ceremony, live from Scarborough',
    info2:
      "The Nikkah ceremony live stream will start at 12:00 PM EST on January 8th, 2022. And don't worry - a recorded video will be available if you miss it!",
    url: '/livestream',
    cta: 'See Live',
  },
  {
    id: nanoid(),
    img: 'iaWeds_Guestbook.png',
    title: 'Virtual Guestbook',
    info:
      'If you cannot reach us in person, we would be so grateful if you left a note and photo of your beautiful faces for us to see',
    info2: 'Click the link to leave your best wishes and/or selfie for the Bride and Groom!',
    url: '/guestbook',
    cta: 'Leave a Note',
  },
  {
    id: nanoid(),
    img: 'iaWeds_Events.jpg',
    title: 'Nikkah and Wedding Reception Information',
    info:
      'Lost your wedding invite cards? No worries!',
    info2: 'Click below for information about the time and location of the Nikkah ceremony and Wedding Reception ceremony',
    url: '/eventinformation',
    cta: 'Get Information',
  },
];

// EVENT INFORMATION PAGE DATA
export const eventInformationPageData = {
  title: 'Information Page',
  lang: 'en',
  description: 'Page where people can get infomation about the location and time of the events',
};

// NIKKAH CARD DATA
export const nikkahCardData = {
  id: 'nikkahCard',
  title: 'Nikkah Information',
  img: 'nikkahCardImg.jpeg',
};

// Wedding Reception CARD DATA
export const walimaCardData = {
  id: 'walimaCard',
  title: 'Wedding Reception Information',
  img: 'walimaCardImg.jpeg',
};

// CONTACT DATA
export const contactData = {
  title: 'Contact',
  cta: 'Have any questions? Feel free to shoot a message to the email below',
  btn: 'Lets Talk',
  phone: 'iaweds2022@gmail.com',
};
