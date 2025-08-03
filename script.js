fetch('http://localhost:3000/api/intern')
  .then(res => res.json())
  .then(data => {
    document.getElementById('internName').textContent = 'Name: ' + data.name;
    document.getElementById('referralCode').textContent = 'Referral: ' + data.referralCode;
    document.getElementById('donations').textContent = 'Total Raised: ₹' + data.donationAmount;
  });