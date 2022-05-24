import badgeFacebook from "../../assets/icons/badgeFacebook.svg"
import badgeTwitter from "../../assets/icons/badgeTwitter.svg"
import badgeMail from "../../assets/icons/badgeMail.svg"
import badgeWhatsapp from "../../assets/icons/badgeWhatsapp.svg"
import badgeInstagram from "../../assets/icons/badgeInstagram.svg"

type ISocialMedia = {
    name: string;
    active: boolean;
    badge: File;
    link: string;
}

export const SocialMedia = [ 
    {
        name: "Twitter",
        active: true,
        badge: badgeTwitter,
        link: "https://twitter.com/"
    },
    {
        name: "Instagram",
        active: true,
        badge: badgeInstagram,
        link: "https://twitter.com/"
    },
    
]