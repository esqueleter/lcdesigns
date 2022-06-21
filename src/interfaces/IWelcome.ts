export interface IWelcome{
    data: IWelcomeData
}

export interface IWelcomeData{
    welcomePages: IWelcomePages[]
}

export interface IWelcomePages{
    welcomeText: string;
    welcomeImage: IWelcomeImage
}

export interface IWelcomeImage{ 
    url: string;
}