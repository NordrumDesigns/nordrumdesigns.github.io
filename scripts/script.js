console.log(`Hello, world!`);

/* Author */
const firstName = "Chris";
const middleName = "Haakon";
const lastName = "Nordrum";

console.log(`I'm ${firstName} ${middleName} ${lastName}.`);

/* Date */
const d = new Date();
const yyyy = d.getFullYear();
const month = d.getMonth();
const dd = d.getDate();
const hrs = d.getHours();
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

let mm = months[month];

console.log(`${mm} ${dd}, ${yyyy}.`);

// greetings
let greet;

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

// btn-alert
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