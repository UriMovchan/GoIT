// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории(всех вложенных в него элементов li).

const categoriesRef = document.querySelector("#categories");
const categoriesItemRef = categoriesRef.querySelectorAll(".item");

console.log(`В списке ${categoriesItemRef.length} категории.`)

const categoriesItemTitle = categoriesItemRef.forEach(i => {
    console.log(` Категория: ${i.querySelector('h2').innerText}`);
    console.log(`  Количество элементов: ${i.querySelectorAll('li').length}`);
});
    
categoriesRef.style.display = 'flex';
categoriesRef.style.justifyContent = 'space-around';
categoriesRef.style.maxWidth = '550px';
categoriesRef.style.marginBottom = '50px';
categoriesRef.style.padding = '0';
categoriesRef.style.listStyle = 'none';



