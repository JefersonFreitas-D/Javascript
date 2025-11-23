
let express = require("express");
let request = require("request");
let cors = require("cors");
let app = express();
let port = 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("arquivo.txt");
  
});

app.get('/jokes/random', (req, res) => {
  request(
    { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;

app.listen(3000, function() {
    console.log('Tá funcionando')

});

