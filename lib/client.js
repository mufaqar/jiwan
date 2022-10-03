import { createClient } from "next-sanity";
const config = {
    projectId: "oc6r9g7e",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
}

export const sanityClient = createClient(config);
