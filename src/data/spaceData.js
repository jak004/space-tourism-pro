import rawData from '../../data.json';

const slugify = (value) => value.toLowerCase().replace(/\s+/g, '-');

const image = (path) => path.replace('./', '/');

export const destinations = rawData.destinations.map((item) => ({
  ...item,
  id: slugify(item.name),
  images: {
    png: image(item.images.png),
    webp: image(item.images.webp),
  },
}));

export const crew = rawData.crew.map((item) => ({
  ...item,
  id: slugify(item.name),
  images: {
    png: image(item.images.png),
    webp: image(item.images.webp),
  },
}));

export const technology = rawData.technology.map((item) => ({
  ...item,
  id: slugify(item.name),
  images: {
    landscape: image(item.images.landscape),
    portrait: image(item.images.portrait),
  },
}));

export const navItems = [
  { number: '00', label: 'Home', path: '/' },
  { number: '01', label: 'Destination', path: '/destination/moon' },
  { number: '02', label: 'Crew', path: '/crew/douglas-hurley' },
  { number: '03', label: 'Technology', path: '/technology/launch-vehicle' },
];
