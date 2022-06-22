import { IAboutEnterprisePages } from "./IAboutEnterprise";
import { IAboutMePages } from "./IAboutMe";
import { IProjectsPages } from "./IProjects";
import { IWelcomePages } from "./IWelcome";

export interface IStaticData{
    welcomePages: IWelcomePages[]
    projectsPages: IProjectsPages[]
    aboutMePages: IAboutMePages[]
    aboutEnterprisePages: IAboutEnterprisePages[]
}