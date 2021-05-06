let numOfChoices = document.getElementById('select');

function makeBar() {
  let container = document.getElementById('container');

  if (select.value==2) {    
    let numOfBars = 2;
    for (let i=1; i<=numOfBars; i++) {
      container.innerHTML = 
  `<div id="bar-container">
    <div id="choices">${select.value} choices are gonna race for being chosen!</div>
    <p>Entry #1</p>
    <div id="bar1">
    <input type="text" placeholder="type your choice #1">
    </div>
    <p>Entry #2</p>
    <div id="bar2">
    <input type="text" placeholder="type your choice #2">
    </div>    
  </div>  
  <button id="choice-btn" onclick="choose()">Choose One!</button>`;    
    }
  } else if (select.value==3) {    
    let numOfBars = 3;
    
    for (let i=1; i<=numOfBars; i++) {
      container.innerHTML = 
  `<div id="bar-container">
     <div id="choices">${select.value} choices are gonna race for being chosen!</div>
     <p>Entry #1</p>
    <div id="bar1">
    <input type="text" placeholder="type your choice #1">
    </div>
    <p>Entry #2</p>
    <div id="bar2">
    <input type="text" placeholder="type your choice #2">
    </div>
    <p>Entry #3</p>
    <div id="bar3">
    <input type="text" placeholder="type your choice #3">
    </div>    
    <button id="choice-btn" onclick="choose()">Choose One!</button>`;
  let barContainer = document.getElementById('bar-container');
  barContainer.style.height = '350px';
    } 
  } else if (select.value==4) {    
    let numOfBars = 4;
    for (let i=1; i<=numOfBars; i++) {
      container.innerHTML = 
    `<div id="bar-container">
      <div id="choices">${select.value} choices are gonna race for be chosen!</div>
      <p>Entry #1</p>
      <div id="bar1">
      <input type="text" placeholder="type your choice #1" style="background:rgb(238, 226, 245)">
      </div>
      <p>Entry #2</p>
      <div id="bar2">
      <input type="text" placeholder="type your choice #2" style="background:rgb(238, 226, 245)">
      </div>
      <p>Entry #3</p>
      <div id="bar3">
      <input type="text" placeholder="type your choice #3" style="background:rgb(238, 226, 245)">
      </div>
      <p>Entry #4</p>
      <div id="bar4">
      <input type="text" placeholder="type your choice #4" style="background:rgb(238, 226, 245)">
      </div>
      <button id="choice-btn" onclick="choose()">Choose One!</button>`;
    let barContainer = document.getElementById('bar-container');
    barContainer.style.height = '450px';   
      } 
  } 
}

function choose() {  
  let bar1 = document.getElementById('bar1');
  let width = 0;
  let id1 = setInterval(frame1, 10);
  function frame1() {
    if (width==100) {
      clearInterval(id1);
    } else {
      width++;
      let speed = Math.random()*15;
      bar1.style.width = width + '%';
      bar1.style.backgroundColor = 'hotpink';
      bar1.style.transition = `width ${speed}s`;
    }
  }

  let bar2 = document.getElementById('bar2');
  // let width = 0;
  let id2 = setInterval(frame2, 10);
  function frame2() {
    if (width==100) {
      clearInterval(id2);
    } else {
      width++;
      let speed = Math.random()*15;
      bar2.style.width = width + '%'; 
      bar2.style.backgroundColor = 'lightsalmon';
      bar2.style.transition = `width ${speed}s`;
    }
  }

  let bar3 = document.getElementById('bar3');
  // let width = 0;
  let id3 = setInterval(frame3, 10);
  function frame3() {
    if (width==100) {
      clearInterval(id3);
    } else {
      width++;
      let speed = Math.random()*15;
      bar3.style.width = width + '%';
      bar3.style.backgroundColor = 'lightgreen';
      bar3.style.transition = `width ${speed}s`;
    }
  }
  let bar4 = document.getElementById('bar4');
  // let width = 0;
  let id4 = setInterval(frame4, 10);
  function frame4() {
    if (width==100) {
      clearInterval(id4);
    } else {
      width++;
      let speed = Math.random()*15;
      bar4.style.width = width + '%';
      bar4.style.backgroundColor = 'turquoise';
      bar4.style.transition = `width ${speed}s`;    
    }
  }
}


