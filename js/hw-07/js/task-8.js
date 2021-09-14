// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxesQuantity = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let width = 30, height = 30;

destroyBtn.addEventListener('click', () => boxesRef.innerHTML = '')

const createBoxes = (amount) => {
    while (amount > 0) {
        var r = () => Math.random() * 256;

        const newBox = document.createElement('div');
        newBox.style.width = width + 'px';
        newBox.style.height = height + 'px';
        newBox.style.background = `rgb(${r()}, ${r()}, ${r()})`;

        boxesRef.append(newBox);
        
        width = height += 10, amount--;
    }
};

renderBtn.addEventListener('click', () => createBoxes(boxesQuantity.value));
