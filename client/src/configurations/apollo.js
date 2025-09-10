import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const {VITE_SERVER} = import.meta.env;

const apollo = new ApolloClient({
    // link: new HttpLink({uri: `http://localhost:9060/api/apollo`}),
    link: new HttpLink({uri: `http://${VITE_SERVER}:9060/api/apollo`}),
    cache: new InMemoryCache()
});

export default apollo;