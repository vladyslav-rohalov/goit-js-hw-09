import Notiflix from 'notiflix';
const refs = {
  formSubmit: document.querySelector('[type="submit"]'),
  formField: document.querySelector('form'),
};

const formDate = {};

refs.formField.addEventListener('input', onFormInput);

function onFormInput(e) {
  formDate[e.target.name] = Number(e.target.value);
}

refs.formSubmit.addEventListener('click', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let { amount, delay, step } = formDate;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(value => Notiflix.Notify.success(value))
      .catch(error => Notiflix.Notify.failure(error));
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rejected(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
