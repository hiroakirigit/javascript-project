import '../scss/style.scss';

const newYears = "1 Jan 2023";

function countdown(){
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  //何秒残されているか計算。
  const leftSeconds = (newYearDate - currentDate) / 1000;

  //日・時間・分・秒を取得する
  const days = Math.floor( leftSeconds / 3600 / 24);
  const hours = Math.floor( (leftSeconds - days * 3600 * 24) / 60 / 60 );
  const minutes = Math.floor( (leftSeconds - (days * 3600 * 24 + hours * 3600)) / 60);
  const seconds = Math.floor( leftSeconds - (days * 3600 * 24 + hours * 3600 + minutes * 60));

  // console.log(leftSeconds);
  // console.log(days, hours, minutes, seconds);

  return [days, hours, minutes, seconds];
}

// countdown();

function count() {
  setInterval( () => {
    insertTime(countdown());
  }, 1000)
}

count();

function insertTime([days, hours, minutes, seconds]){
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

