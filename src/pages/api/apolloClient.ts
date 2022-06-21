import {ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
    uri:"https://api-sa-east-1.graphcms.com/v2/cl3eqncdu3w7r01z42afue5tz/master",
    cache: new InMemoryCache(),
})

export default client