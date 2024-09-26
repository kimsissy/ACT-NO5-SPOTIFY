const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/router'); 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', router);


const PORT = process.env.PORT || 3009; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
