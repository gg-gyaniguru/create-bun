import connection from './database/connection.js';
import io from './configurations/socket.js';
import {router} from './configurations/express.js';
import http from './configurations/http.js';
import {expressMiddleware as middleware} from '@as-integrations/express5';
import apollo from './configurations/apollo.js';

(async () => {
    try {
        await connection();

        io.on('connection', (socket) => {

        });

        router.get('/', (_, response) => {
            return response.status(200).json({message: 'server is running'});
        });

        router.use('/apollo', middleware(apollo));

        http.listen(9060);
    } catch (error) {
        console.error(error.message);
    }
})();