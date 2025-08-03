const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({ name: "Kanhaiya Jangid", referralCode: "kanhaiya2025", donationAmount: 8500 });
});

app.listen(PORT, () => console.log('Server running on port ' + PORT));