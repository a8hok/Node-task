const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
