import express, {Router} from 'express';
import cors from 'cors';
import upload from 'express-fileupload';

const server = express();
const router = Router();

const {SERVER} = process.env;

server.use(cors({
    // origin: 'http://localhost:6090',
    origin: `http://${SERVER}:6090`,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(upload());

router.use('/static', express.static('static'));
server.use('/api', router);

server.use((_, response) => {
    return response.status(404).json({message: 'route not found'});
});

export {router};
export default server;