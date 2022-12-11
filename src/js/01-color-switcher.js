function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStop.setAttribute('disabled', 'disabled');

refs.btnStart.addEventListener('click', onStartClick);

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onStartClick() {
  timerId = setInterval(changeColor, 1000);
  refs.btnStart.setAttribute('disabled', 'disabled');
  refs.btnStop.removeAttribute('disabled');
}

refs.btnStop.addEventListener('click', onStopClick);

function onStopClick() {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', 'disabled');
}
