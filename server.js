const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  
  