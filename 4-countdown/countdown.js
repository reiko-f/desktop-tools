let setDate = document.getElementById('set-date');

let targetEvent = document.getElementById('event');
let targetBtn = document.getElementById('target-btn');
targetBtn.addEventListener('click', setEvent);

function setEvent() {
  let title = document.getElementById('title');
  title.innerHTML += ' ' +targetEvent.value;
}

let startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startCountdown);

function startCountdown() {
  setInterval(()=> {

    // let targetDate = new Date(setDate.value).getTime();
    // let realTime = new Date().getTime(); 
  
    let targetDate = new Date(setDate.value);
    let realTime = new Date();

    let timeToTargetDate = targetDate - realTime;
    
    let timeBreakDown = {
      days: Math.floor(timeToTargetDate / (1000*60*60*24)),
      hours: Math.floor((timeToTargetDate % (1000*60*60*24)) / (1000*60*60)),
      minutes: Math.floor((timeToTargetDate % (1000*60*60)) / (1000*60)),
      seconds: Math.floor((timeToTargetDate % (1000*60)) / 1000)
    };
    
    let timer = document.getElementById('timer');
    timer.innerHTML = timeBreakDown.days + ' days ' + timeBreakDown.hours + ' hours ' + timeBreakDown.minutes + ' minutes ' + timeBreakDown.seconds + ' seconds';
    
  })

}