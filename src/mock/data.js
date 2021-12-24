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
  img: 'heroImg700.jpeg',
};

// ABOUT DATA
export const aboutData = {
  title: "What's Happening?",
  img: 'AboutImg350.jpeg',
  paragraphOne: 'Alhamdulilah, we are elated to announce that we are tying the knot this year!',
  paragraphTwo:
    "Our Nikkah will take place on January 8th, 2021, Insha'Allah. The Walima will happen on January 9th, 2021, Insh'Allah",
  paragraphThree:
    'As much as we would love to have all our family and friends join us from far and wide, due to the recent new COVID variant and travel restrictions we understand not everyone can physically make it. However we hope that through this website you can join us in spirit, and watch our special occaison through Livestream and photos.',
};

// EVENTS DATA
export const eventsData = [
  {
    id: nanoid(),
    img: 'nikkah.jpg',
    title: 'Nikkah Livestream',
    info: 'Watch our Nikkah ceremony, live from Scarborough',
    info2:
      "The Nikkah ceremony live stream will start at 12:00 PM EST on January 8th, 2021. And don't worry - a recorded video will be available if you miss it!",
    url: '/livestream',
    cta: 'See Live',
  },
  {
    id: nanoid(),
    img: 'guestbook-min.JPG',
    title: 'Virtual Guestbook',
    info:
      'If you cannot reach us in person, we would be so grateful if you left a note and photo of your beautiful faces for us to see',
    info2: 'Click the link to leave your best wishes and/or selfie for the Bride and Groom!',
    url: '/guestbook',
    cta: 'Leave a Note',
  },
  // TODO: Add Events for Nikkah info and Walima info.
  // Will just be a link to a blank page that has the cards only
];

// CONTACT DATA
export const contactData = {
  title: 'Contact',
  cta: 'Have any questions? Feel free to call or shoot a text message at the number below',
  btn: 'Lets Talk',
  phone: '647-969-1407',
};

// Second option: CONTACT DATA
// export const contactData = {
//   title: 'Contact',
//   cta: 'Have any questions? Feel free to shoot a message to the email below',
//   btn: 'Lets Talk',
//   phone: 'iaweds2022@gmail.com',
// };
