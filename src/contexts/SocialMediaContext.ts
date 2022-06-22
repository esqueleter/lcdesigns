import {
    BsTwitter,
    BsInstagram,
    BsMailbox,
    BsLinkedin,
    BsPinterest,
    BsWhatsapp,
    BsFacebook,
  } from 'react-icons/bs';

import {HiMail} from 'react-icons/hi'

import { ISocialMedias } from '../interfaces/ISocialMedias';

const SocialMediasContext = [
    {
      name: "twitter" ,
      icon: BsTwitter
    },
    {
      name: "instagram" ,
      icon: BsInstagram
    },
    {
      name: "email" ,
      icon: HiMail
    },
    {
      name: "linkedin" ,
      icon: BsLinkedin
    },
    {
      name: "pinterest" ,
      icon: BsPinterest
    },
    {
      name: "whatsapp" ,
      icon: BsWhatsapp
    },
    {
      name: "facebook" ,
      icon: BsFacebook
    },
];


export const socialMediasIcons = (
  socialMedias: ISocialMedias[]
): ISocialMedias[] => {

  let tempSocialMedias: ISocialMedias[] = JSON.parse(
    JSON.stringify(socialMedias)
  );

  socialMedias.map((value, index) => {

   
    let socialMediasWithIcon = SocialMediasContext.filter((item)=>item.name.includes(value.socialMediaName))
    
    if (socialMediasWithIcon[0].name === value.socialMediaName){
      tempSocialMedias[index].socialMediaIcon =  socialMediasWithIcon[0].icon;
    }
    
   
    
  });
  // console.log(tempSocialMedias)

  return tempSocialMedias;
};
  