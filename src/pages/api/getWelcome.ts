// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from '@apollo/client';

export const GET_WELCOME = gql`
query GetWelcomeData {
  welcomePages {
    id
    welcomeText
    welcomeImage {
      url
    }
  }
}
`
 
