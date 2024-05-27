
// sound files

const audio1 = new Audio('mp3/01-White-Noise-10min.mp3');
const audio2 = new Audio('mp3/04-Dryer-10min.mp3');
const audio3 = new Audio('mp3/05-Fan-10min.mp3');
const audio4 = new Audio('mp3/06-Ocean-10min.mp3');
const audio5 = new Audio('mp3/11-Blender-10min.mp3');
const audio6 = new Audio('mp3/27-Shower-10min.mp3');
const audio7 = new Audio('mp3/28-Vacuum-10min.mp3');
const audio8 = new Audio('mp3/32-Waterfall-10min.mp3');
const audio9 = new Audio('mp3/35-Refrigerator-10min.mp3');
const audio10 = new Audio('mp3/38-Underwater-10min.mp3');
const audio11 = new Audio('mp3/42-Rain-10min.mp3');
const audio12 = new Audio('mp3/51-Train-10min.mp3');

audio1.loop = true;
audio2.loop = true;
audio3.loop = true;
audio4.loop = true;
audio5.loop = true;
audio6.loop = true;
audio7.loop = true;
audio8.loop = true;
audio9.loop = true;
audio10.loop = true;
audio11.loop = true;
audio12.loop = true;

//audio play/pause functions

let playing1 = false;
let playing2 = false;
let playing3 = false;
let playing4 = false;
let playing5 = false;
let playing6 = false;
let playing7 = false;
let playing8 = false;
let playing9 = false;
let playing10 = false;
let playing11 = false;
let playing12 = false;

function onoff1() {
  if (playing1 === false){
    audio1.play();
    playing1 = true;
  } else {
    audio1.pause();
    playing1 = false;
  }
};

function onoff2() {
    if (playing2 === false){
      audio2.play();
      playing2 = true;
    } else {
      audio2.pause();
      playing2 = false;
    }
  };

  function onoff3() {
    if (playing3 === false){
      audio3.play();
      playing3 = true;
    } else {
      audio3.pause();
      playing3 = false;
    }
  };

  function onoff4() {
    if (playing4 === false){
      audio4.play();
      playing4 = true;
    } else {
      audio4.pause();
      playing4 = false;
    }
  };

  function onoff5() {
    if (playing5 === false){
      audio5.play();
      playing5 = true;
    } else {
      audio5.pause();
      playing5 = false;
    }
  };

  function onoff6() {
    if (playing6 === false){
      audio6.play();
      playing6 = true;
    } else {
      audio6.pause();
      playing6 = false;
    }
  };

  function onoff7() {
    if (playing7 === false){
      audio7.play();
      playing7 = true;
    } else {
      audio7.pause();
      playing7 = false;
    }
  };

  function onoff8() {
    if (playing8 === false){
      audio8.play();
      playing8 = true;
    } else {
      audio8.pause();
      playing8 = false;
    }
  };

  function onoff9() {
    if (playing9 === false){
      audio9.play();
      playing9 = true;
    } else {
      audio9.pause();
      playing9 = false;
    }
  };

  function onoff10() {
    if (playing10 === false){
      audio10.play();
      playing10 = true;
    } else {
      audio10.pause();
      playing10 = false;
    }
  };

  function onoff11() {
    if (playing11 === false){
      audio11.play();
      playing11 = true;
    } else {
      audio11.pause();
      playing11 = false;
    }
  };

  function onoff12() {
    if (playing12 === false){
      audio12.play();
      playing12 = true;
    } else {
      audio12.pause();
      playing12 = false;
    }
  };

//button animations

function playbutton1(){
    if (playing1 === false){
    button1.style.backgroundImage = "url('gif/sound-wave.gif')";
  }else{
    button1.style.backgroundImage = "url('gif/sound-wave.png')";}
};

function playbutton2(){
    if (playing2 === false){
    button2.style.backgroundImage = "url('gif/dryer.gif')";
  }else{
    button2.style.backgroundImage = "url('gif/dryer.png')";}
};

function playbutton3(){
    if (playing3 === false){
    button3.style.backgroundImage = "url('gif/fan.gif')";
  }else{
    button3.style.backgroundImage = "url('gif/fan.png')";}
};

function playbutton4(){
    if (playing4 === false){
    button4.style.backgroundImage = "url('gif/wave.gif')";
  }else{
    button4.style.backgroundImage = "url('gif/wave.png')";}
};

function playbutton5(){
    if (playing5 === false){
    button5.style.backgroundImage = "url('gif/blender.gif')";
  }else{
    button5.style.backgroundImage = "url('gif/blender.png')";}
};

function playbutton6(){
    if (playing6 === false){
    button6.style.backgroundImage = "url('gif/shower.gif')";
  }else{
    button6.style.backgroundImage = "url('gif/shower.png')";}
};

function playbutton7(){
    if (playing7 === false){
    button7.style.backgroundImage = "url('gif/vacuum.gif')";
  }else{
    button7.style.backgroundImage = "url('gif/vacuum.png')";}
};

function playbutton8(){
    if (playing8 === false){
    button8.style.backgroundImage = "url('gif/waterfall.gif')";
  }else{
    button8.style.backgroundImage = "url('gif/waterfall.png')";}
};

function playbutton9(){
    if (playing9 === false){
    button9.style.backgroundImage = "url('gif/fridge.gif')";
  }else{
    button9.style.backgroundImage = "url('gif/fridge.png')";}
};

function playbutton10(){
    if (playing10 === false){
    button10.style.backgroundImage = "url('gif/underwater.gif')";
  }else{
    button10.style.backgroundImage = "url('gif/underwater.png')";}
};

function playbutton11(){
    if (playing11 === false){
    button11.style.backgroundImage = "url('gif/rain.gif')";
  }else{
    button11.style.backgroundImage = "url('gif/rain.png')";}
};

function playbutton12(){
    if (playing12 === false){
    button12.style.backgroundImage = "url('gif/train.gif')";
  }else{
    button12.style.backgroundImage = "url('gif/train.png')";}
};