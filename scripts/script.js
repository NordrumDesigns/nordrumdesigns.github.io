console.log(`Hello, world!`);

/* Author */
const firstName = "Chris";
const middleName = "Haakon";
const lastName = "Nordrum";

console.log(`I'm ${firstName} ${middleName} ${lastName}.`);


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
document.querySelectorAll('.footerYear').forEach(copyright => {
  copyright.innerHTML = year;
});

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

/* for Loop */
const numbersEl = document.getElementById("numbers");

for (let i = 0; i <= 12; i++) {
  if (i === 0) {
    const li = document.createElement('li');
    li.innerText = "even";
    numbersEl.appendChild('li');
  }
  else if (i % 2 === 0) {
    console.log
  }
  else {

  }
}