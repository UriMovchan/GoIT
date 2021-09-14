// В HTML есть список ul#gallery.
// Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов images для создания тегов img вложенных в li. 
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  { url:'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'White and Black Long Fur Cat' },
  { url:'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Orange and White Koi Fish Near Yellow Koi Fish' },
  { url:'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Group of Horses Running' }
];

/// /// Wrong solution
// const galleryRef = document.querySelector('#gallery');

// images.map(i => {
//     galleryRef.insertAdjacentHTML('beforeend', `<li class="gallery__item" ><img class="gallery__img" src="${i.url}" alt="${i.alt}"/></li>`);
// })

// const galleryItemRef = galleryRef.querySelectorAll('.gallery__item');
// const galleryImgRef = galleryRef.querySelectorAll('.gallery__img');

// galleryRef.classList.add('gallery');
// galleryItemRef.forEach(i => i.classList.add('gallery__item'));
// galleryImgRef.forEach(i => i.classList.add('gallery__img'));


/// Second try 
// const galleryRef = document.querySelector('#gallery');

// const insert = (item) => galleryRef.insertAdjacentHTML('beforeend', item);

// images.map(i => insert(`<li class="gallery__item" ><img class="gallery__img" src="${i.url}" alt="${i.alt}" /></li>`))

// const galleryItemRef = galleryRef.querySelectorAll('.gallery__item');
// const galleryImgRef = galleryRef.querySelectorAll('.gallery__img');

// galleryRef.classList.add('gallery');
// galleryItemRef.forEach(i => i.classList.add('gallery__item'));
// galleryImgRef.forEach(i => i.classList.add('gallery__img'));

/// Third try
const galleryRef = document.querySelector('#gallery');

const arr = images.map(i => `<li class="gallery__item" ><img class="gallery__img" src="${i.url}" alt="${i.alt}" /></li>`)

galleryRef.insertAdjacentHTML('beforeend', arr.join(''));

const galleryItemRef = galleryRef.querySelectorAll('.gallery__item');
const galleryImgRef = galleryRef.querySelectorAll('.gallery__img');

galleryRef.classList.add('gallery');
galleryItemRef.forEach(i => i.classList.add('gallery__item'));
galleryImgRef.forEach(i => i.classList.add('gallery__img'));

