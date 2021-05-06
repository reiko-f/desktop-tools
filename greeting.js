function displayTime() {
  let today = new Date();

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let sevenDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let date = sevenDays[today.getDay()] + ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

  let dateDisplay = document.getElementById('date');
  dateDisplay.innerText = date;

  let time = {
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds()
  }

  if (time.hours < 10) {
    time.hours = '0' + time.hours;
  } else {
    time.hours;
  }
  if (time.minutes < 10) {
    time.minutes = '0' + time.minutes;
  } else {
    time.minutes;
  }
  if (time.seconds < 10) {
    time.seconds = '0' + time.seconds;
  } else {
    time.seconds;
  }
  
  let timeDisplay = document.getElementById('time');
  timeDisplay.innerHTML = `${time.hours} : ${time.minutes} : ${time.seconds}`;

  let greeting = document.getElementById('greeting');

  if (time.hours>5 && time.hours<12) {
    greeting.innerHTML = 'Good morning!';
  } else if (time.hours>=12 && time.hours<=16) {
    greeting.innerHTML = 'Good afternoon!';
  } else {
    greeting.innerHTML = 'Good evening!';
  }   

  setTimeout(displayTime, 1000);
}
displayTime();


function putName() {  
  let name = document.getElementById('name').value;
  let nameHolder = document.getElementById('name-holder');
  nameHolder.innerHTML = `${name}, hope you have a great day so far!` 
}
// putName();