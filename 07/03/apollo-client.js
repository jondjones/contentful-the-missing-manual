

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-boost";

const SPACEID = process.WHATEVER.SPACEID;
const ACCESS_TOKEN = process.WHATEVER.ACCESS_TOKEN;

const url = `https://graphql.contentful.com/content/v1/spaces/${SPACEID}`;

const contentfulLink = new HttpLink({
                                uri: url,
                                headers: {
                                    authorization: `Bearer ${ACCESS_TOKEN}`,
                                    "Content-language": "en-us"
                                },
                                opts: {
                                    credentials: "same-origin"
                                }});

 export const apolloClient = new ApolloClient({
                            link: contentfulLink,
                            cache: new InMemoryCache()});