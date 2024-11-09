console.log('Hello, world');

// greetings
const d = new Date();
const hrs = d.getHours();

var greet;

if (hrs < 12)
  greet = 'Good morning,';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good afternoon,';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good evening,';

document.getElementById('greetings').innerHTML = greet;

// footerYear
const fYear = document.getElementById('footerYear');
fYear.textContent = d.getFullYear();