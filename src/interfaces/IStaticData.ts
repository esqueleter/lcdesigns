import { IAboutEnterprisePages } from "./IAboutEnterprise";
import { IAboutMePages } from "./IAboutMe";
import { IProjectsPages } from "./IProjects";
import { IWelcomePages } from "./IWelcome";
import { IContactMe } from "./IContactMe";
import { IFooter } from "./IFooter";

export interface IStaticData{
    welcomePages: IWelcomePages[]
    projectsPages: IProjectsPages[]
    aboutMePages: IAboutMePages[]
    aboutEnterprisePages: IAboutEnterprisePages[]
    contactMePages: IContactMe[]
    footerPages: IFooter[]
}