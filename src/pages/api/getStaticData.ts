import { gql } from '@apollo/client';
import {CORE_ABOUTME_FIELDS, CORE_WELCOME_FIELDS, CORE_ABOUT_ENTERPRISE_FIELDS, CORE_PROJECTS_FIELDS} from "./fragments"

export const GET_STATIC_DATA = gql`
    ${CORE_WELCOME_FIELDS}
    ${CORE_ABOUTME_FIELDS}
    ${CORE_ABOUT_ENTERPRISE_FIELDS}
    ${CORE_PROJECTS_FIELDS}
    query GetStaticData {
        welcomePages {
            ...CoreWelcomeFields
        }
        projectsPages {
            ...CoreProjectsFields
        }
        aboutMePages {
            ...CoreAboutMeFields
        }
        aboutEnterprisePages{
            ...CoreAboutEnterpriseFields
        }
   
    }
`



