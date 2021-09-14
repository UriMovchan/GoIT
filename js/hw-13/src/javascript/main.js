import { getImages } from './apiService';
import galleryTpl from '../template/gallery.hbs'

const searchForm = document.getElementById('search-form');
const galleryRef = document.getElementById('gallery');
const showMoreBtn = galleryRef.querySelector('.show-more');




class Gallery {
    constructor() {
        this.images = [];
        this.selector = document.getElementById('gallery');
        this.showMoreBtn = this.selector.querySelector('.show-more');
        this.list = this.selector.querySelector('ul');
        this.lastRequest = '';
        this.page = 0;
        this.perPage = 12;
        this.init()
    }

    async init(q) {
        this.query(q);
        await this.getImg();
        this.render();
        this.initShowMore();
    }

    query(q = '') {
        this.lastRequest === q ? this.page++ : this.page = 1;
        
        this.request = `&page=${this.page}&per_page=${this.perPage}`;
        this.request += q ? `&q=${q}` : '';
       
        this.lastRequest = q;
    }

    async getImg() {  
        this.images = await getImages(this.request);
    }
    
    render() {
        this.list.innerHTML = galleryTpl(this.images);
    }
    
    async loadMore(e) {
        const scrollTarget = e.target.offsetTop;
        
        this.query(this.lastRequest);

        await this.getImg();

        this.list.insertAdjacentHTML('beforeend', galleryTpl(this.images));
        
        window.scrollTo({ top: scrollTarget, behavior: "smooth" });
        this.initShowMore();
    }

    initShowMore() {
        if (this.images.total && this.images.hits.length === this.perPage) {
            this.showMoreBtn.classList.remove('hidden');
        } else {
            this.showMoreBtn.classList.add('hidden');
        }
    }
}
    

const gallery = new Gallery;

const searchImg = (e) => {
    e.preventDefault()
    gallery.init(e.target[0].value);
}

searchForm.addEventListener('submit', searchImg);
showMoreBtn.addEventListener('click', (e) => {gallery.loadMore(e)});

