 
//  Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//   Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.Необхідно додати посилання на два файли:
// simple - lightbox.min.js і simple - lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.Для цього ознайомся з документацією S
// impleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.Нехай підпис буде знизу 
// і з'являється через 250 мілісекунд після відкриття зображення.




import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const ulEl = document.querySelector(".gallery");



function renderGalleryItems(galleryItems) {
    const markup = galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
        })
        .join('');
    
    ulEl.innerHTML = markup;
}
renderGalleryItems(galleryItems);


let imgsGallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionsDelay: 2500, captionPosition: "bottom"});


