console.log('Hello, world');

// greetings
const d = new Date();
const hrs = d.getHours();

var greet;
var c;

if (hrs < 12)
  greet = 'Good morning,',
  document.getElementById('greetings').style.color = '#fcd14d';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good afternoon,',
  document.getElementById('greetings').style.color = '#87ceeb';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good evening,',
  document.getElementById('greetings').style.color = '#131862';

document.getElementById('greetings').innerHTML = greet;

// footerYear
const fYear = document.getElementById('footerYear');
fYear.textContent = d.getFullYear();