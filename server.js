const express = require('express');
const bodyParser = require('body-parser'); // Middleware for parsing JSON bodies
const fs = require('fs');
const app = express();
const port = 3000;


// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the /submitData endpoint
app.post('/submitData', (req, res) => {
  const data = req.body.dataInput;
  const filePath = 'data.txt';
  const textToWrite = JSON.stringify(data);


  // Process the data as needed

  fs.writeFile(filePath, data, (err) => { 
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Error writing to file');
    }
    

    console.log('Data sent to file succesfully:', data);
    res.send('Data saved to file successfully'); //change this to say scheudle updated in website

  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});