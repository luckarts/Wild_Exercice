// The reason behind this is that it won’t listen to the port after testing.

import app from './server.js';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
const port = 5000;
const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server started on port ${process.env.PORT || 8000}`);
});
