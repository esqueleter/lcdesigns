import {ISocialMedias} from "./ISocialMedias"

export interface IAboutEnterprisePages{
    banner: IBanner;
    content: IContent;
    socialMedias: ISocialMedias[];
}

interface IContent{ 
    html: HTMLElement;
}

interface IBanner{ 
    url: string;
}

