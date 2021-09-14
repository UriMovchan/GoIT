(() => {
    burgerBtn = document.querySelector('[data-mmenu-burger]');
    mmenu = document.querySelector('[data-mmenu]');

    burgerBtn.addEventListener('click', () => {
        expanded = burgerBtn.getAttribute("aria-expanded") === "true" || false;
        burgerBtn.setAttribute("aria-expanded", !expanded);  

        burgerBtn.classList.toggle('is-open');  
        mmenu.classList.toggle('is-hidden');
    });
})();





