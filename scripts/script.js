console.log('Hello, world');

// greetings
const d = new Date();
const year = d.getFullYear();
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
document.querySelectorAll('.footerYear').forEach(el => el.innerText = year);

/* Button */
const alertBtn = document.getElementById('btn-alert');

alertBtn.addEventListener('click', () => {
  alert("YOU'VE BEEN HACKED! MWAHAHAHA! \u{2620} jk");
}); //Alert message

alertBtn.addEventListener('mouseover', () => {
  alertBtn.textContent = "PLS Click Me";
});//Hover text

alertBtn.addEventListener('mouseout', () => {
  alertBtn.textContent = "Click Me";
});//Reg text