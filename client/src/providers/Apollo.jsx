import {ApolloProvider as Provider} from '@apollo/client/react';
import apollo from '@/configurations/apollo.js';

const Apollo = ({children}) => {
    return (
        <>
            <Provider client={apollo}>
                {children}
            </Provider>
        </>
    );
};

export default Apollo;