export interface IProjectsPages{
    buttonText: string;
    buttonLink: string;
    cardSlider: ICardSlider[]
}

export interface ICardSlider{
    image: IImage;
    content:string
    title:string
}

interface IImage{
    url: string
}
