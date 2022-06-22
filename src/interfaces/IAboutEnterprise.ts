import {ISocialMedias} from "./ISocialMedias"

export interface IAboutEnterprisePages{
    banner: IBanner;
    content: IContent;
    socialMedias: ISocialMedias[];
}

interface IContent{ 
    text: string;
}

interface IBanner{ 
    url: string;
}

