import {ISocialMedias} from "./ISocialMedias"

export interface IAboutMePages{
    title: string;
    subtitle: string;
    content: IContent;
    avatar: IAvatar;
    socialMedias: ISocialMedias[];
}

interface IContent{ 
    html: HTMLElement;
}

interface IAvatar{ 
    url: string;
}

