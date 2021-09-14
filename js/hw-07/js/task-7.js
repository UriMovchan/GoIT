// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputFsc = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
textSpan.style.cssText = 'display: block;';

const changeFontSize = (fs) => textSpan.style.fontSize = fs + 'px';

inputFsc.addEventListener('change', (e) => changeFontSize(e.target.value));