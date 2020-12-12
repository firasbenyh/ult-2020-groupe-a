let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

let dbConfig = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {useNewUrlParser: true})
  .then(() => {
    console.log('Database connected successfully !');
  }, error => {
    console.log('Database connction error ! : ' + error);
  });


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

const productRoute = require('./routes/product.route');
app.use('/api/products', productRoute);

// Create port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
