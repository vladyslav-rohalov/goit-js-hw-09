import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', 'disabled');
refs.startBtn.addEventListener('click', onStartBtnClick);

let pickedDate = null;
const dateNow = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    pickedDate = selectedDates[0];

    if (selectedDates[0] > dateNow) {
      refs.startBtn.removeAttribute('disabled');
    } else {
      Notiflix.Report.failure(
        'Error',
        'Please choose a date in the future',
        'Try again'
      );
    }
  },
};

flatpickr('#datetime-picker', options);

function onStartBtnClick() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const timeDiff = pickedDate - currentTime;
    const { days, hours, minutes, seconds } = convertMs(timeDiff);
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timerId);
    }
    timerUpdate(days, hours, minutes, seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timerUpdate(days, hours, minutes, seconds) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
