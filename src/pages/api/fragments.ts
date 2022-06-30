import { gql } from '@apollo/client';


export const CORE_WELCOME_FIELDS =  gql`
    fragment CoreWelcomeFields on WelcomePage {
        id
        welcomeText
        welcomeImage {
            url
        }
    }
`

export const CORE_PROJECTS_FIELDS =  gql`
    fragment CoreProjectsFields on ProjectsPage {
        buttonText
        buttonLink
        cardSlider {
            image {
                url
            }
            title
            content
        }
    }
`



export const CORE_ABOUTME_FIELDS =  gql`
    fragment CoreAboutMeFields on AboutMePage {
        title
        subtitle
        content {
            html
        }
        avatar {
            url
        }
        socialMedias {
            socialMediaName
            socialMediaStatus
            socialMediaLink
        }
    }
`

export const CORE_ABOUT_ENTERPRISE_FIELDS =  gql`
    fragment CoreAboutEnterpriseFields on AboutEnterprisePage {
        banner {
            url
        }
        socialMedias {
            socialMediaLink
            socialMediaName
            socialMediaStatus
        }
        content {
            text
        }
    }
`

export const CORE_CONTACT_ME_FIELDS =  gql`
    fragment CoreContactMeFields on ContactMePage {
        subtitle
        title
    }
`


export const CORE_FOOTER_FIELDS =  gql`
    fragment CoreFooterFields on FooterPage {
        socialMedias {
            socialMediaName
            socialMediaLink
        }
        contactMe
    }
`