export const salon = {
  name: "Santosha Hair Salon",
  street: "94 Ponahawai St, Ste A",
  city: "Hilo, HI 96720",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=94+Ponahawai+St+Ste+A+Hilo+HI+96720",
  phoneHref: "tel:+18083452970",
  phoneDisplay: "(808) 345-2970",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/explore/locations/122306725/santosha-salon-and-spa/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/SantoshaSalonAndSpa/",
    },
    {
      label: "Yelp",
      href: "https://www.yelp.com/biz/santosha-hair-salon-hilo",
    },
  ],
};

export const hours = [
  { day: "Monday", time: "9 a.m.–5 p.m." },
  { day: "Tuesday", time: "10 a.m.–6 p.m." },
  { day: "Wednesday", time: "9 a.m.–6 p.m." },
  { day: "Thursday", time: "10 a.m.–6 p.m." },
  { day: "Friday", time: "10 a.m.–6 p.m." },
  { day: "Saturday", time: "9 a.m.–5 p.m." },
  { day: "Sunday", time: "Closed" },
];

export const photos = {
  salonWork: "/images/santosha-work.jpg",
  hairFinish: "/images/santosha-hair-finish.jpg",
  lashDetail: "/images/santosha-lash-detail.jpg",
  salonInterior: "/images/santosha-interior.jpg",
};

export const work = [
  {
    src: photos.salonWork,
    alt: "Glossy dark hair styled in soft waves at Santosha Hair Salon",
    caption: "Glossy waves",
  },
  {
    src: photos.hairFinish,
    alt: "Smooth, shoulder-length brown hair styled at Santosha Hair Salon",
    caption: "Smooth finish",
  },
  {
    src: photos.lashDetail,
    alt: "Close-up of a finished lash look",
    caption: "Lash detail",
  },
  {
    src: photos.salonInterior,
    alt: "Santosha Hair Salon interior with styling stations and mirrors",
    caption: "Inside the salon",
  },
];

export const services = [
  {
    n: "01",
    name: "Women's cut and style",
    price: "$70",
  },
  {
    n: "02",
    name: "Women's wet cut",
    price: "$60",
  },
  {
    n: "03",
    name: "Men's cut",
    price: "$50",
  },
  {
    n: "04",
    name: "Cut with color",
    price: "$45",
  },
  {
    n: "05",
    name: "Root touch-up",
    price: "$115",
  },
  {
    n: "06",
    name: "Roots and glaze",
    price: "$130",
  },
  {
    n: "07",
    name: "Roots and foils",
    price: "$155 / $230",
  },
  {
    n: "08",
    name: "Mini highlight",
    price: "$150",
  },
  {
    n: "09",
    name: "Custom half foil",
    price: "$180+",
  },
  {
    n: "10",
    name: "Full foil",
    price: "$230+",
  },
  {
    n: "11",
    name: "Smoothing treatment",
    price: "$255+",
  },
];
