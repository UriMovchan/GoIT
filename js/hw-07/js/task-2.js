// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM - узлов используй document.createElement().

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

/// Wrong solution
// ingredients.forEach(i => {
//     const ingredientsRef = document.querySelector('#ingredients');
//     const li = document.createElement('li');
//     li.innerHTML = i;
//     ingredientsRef.prepend( li );
// });

/// Second try
// const ingredientsRef = document.querySelector('#ingredients');

// const insert = (item) => ingredientsRef.prepend( item );

// ingredients.forEach(i => {
//     const li = document.createElement('li');
//     li.innerHTML = i;
//     insert(li);
// });

/// Third try
const ingredientsRef = document.querySelector('#ingredients');

const arr = ingredients.map(i => {
    let li = document.createElement('li');
    li.textContent = i
    return li
});

ingredientsRef.append(...arr);

