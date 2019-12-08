const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = 'BJi2A_Pzmz-irXRxv38d-bpe04EiUqqoNgvcNSn_7gkTLNs28hEZ9rTjEMjZw5BdkuDEXUTOQP1lmvby8hCtn-c';

const privateVapidKey = '1vpaBL00wqqTt2ZzKRLqh46P4pDc166tA24IZIEzGEk'


webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);


//Subscribe Route
app.post('/subscribe', (req, res) => {
  //get pushSubscription object
  const subscription = req.body;

  //send 201 resource created
  res.status(201).json({});

  //create payload
  const payload = JSON.stringify({title: 'Push Test'});

  //pass object into sendNotification
  webpush.sendNotification(subscription.payload).catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
