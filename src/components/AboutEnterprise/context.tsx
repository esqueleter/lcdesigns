import { BsTwitter, BsInstagram } from 'react-icons/bs';

type ISocialMedia = {
  name: string;
  active: boolean;
  badge: File;
  link: string;
};

export const SocialMedia = [
  {
    name: 'Twitter',
    active: true,
    badge: BsTwitter,
    link: 'https://twitter.com/',
  },
  {
    name: 'Instagram',
    active: true,
    badge: BsInstagram,
    link: 'https://twitter.com/',
  },
];
