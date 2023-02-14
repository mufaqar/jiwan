import { createClient } from "next-sanity";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const config = {
    projectId: "oc6r9g7e",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
}
export const sanityClient = createClient(config);



export const client = new ApolloClient({
  // uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  uri: 'https://makerbros.co/jiwan/graphql',  //site URL (graphQL)
  cache: new InMemoryCache(),
});
