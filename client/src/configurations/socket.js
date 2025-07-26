import {io} from 'socket.io-client';

const {VITE_SERVER} = import.meta.env;

// const socket = io('http://localhost:9060/api');
const socket = io(`http://${VITE_SERVER}:9060/api`);

export default socket;