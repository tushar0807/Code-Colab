import { spawn } from 'child_process';

// Start the GraphQL server
const graphqlServer = spawn('node', ['index.js'], { stdio: 'inherit' });

// Start the WebSocket server
const webSocketServer = spawn('node', ['server.js'], { stdio: 'inherit' });

// Log a message when both servers are started
console.log('GraphQL server running on port 4000');
console.log('WebSocket server running on port 5000');