const eventForm = document.querySelector('#substr__form')
const inputStr = eventForm.querySelector('#add__str')
const inputIndex = eventForm.querySelector('#add__index')
const inputLenght = eventForm.querySelector('#add__lenght')

const substr = (str, startIndex, endLenght) => {
  const x = str[startIndex];
  if (startIndex >= 0 && endLenght < 0) return x;
  if (startIndex < 0 && endLenght < 0) return str[0];
  if (startIndex < 0) startIndex = 0;
  if (endLenght < 0) endLenght = endLenght + endLenght + endLenght;
  const y = str.slice(startIndex, endLenght + startIndex);
  return y;
};


eventForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  substr(inputStr.value, inputIndex.value, inputLenght.value);
  if (inputStr.value === '') {
    document.getElementById('answer').innerHTML = "Пустое значение";
  } else {
    document.getElementById('substrOut').innerHTML = substr(inputStr.value, inputIndex.value, inputLenght.value);
  }

});