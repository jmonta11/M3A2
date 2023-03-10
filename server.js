const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const app = require('./app');
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});