// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на ul.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) 
// файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку модального вікна із зображенням з
// прикладів бібліотеки basicLightbox.
    
//     Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші 
// HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

//     Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку.Заборони 
// цю поведінку за замовчуванням.
    
//     Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне 
// вікно.Бібліотека basicLightbox містить метод для програмного закриття модального вікна.




import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulEl = document.querySelector(".gallery");

//const liEl = document.querySelector(".gallery__item"); // li


function renderGalleryItems(galleryItems) {
    const markup = galleryItems
        .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= "${preview}"
      data-source = "${original}"
      alt= "${description}"
    />
  </a>
 </li>`;
    })
        .join('');
    
    ulEl.innerHTML = markup;
}
renderGalleryItems(galleryItems);


let instance;

const onGalleryImgClick = event => {
    
    event.preventDefault();
    console.log(event.target.nodeName);

    if (event.target === event.currentTarget) {
        return
    };

    const currentImgLink = event.target.dataset.source;

     instance = basicLightbox.create(`
    <img src="${currentImgLink}" width="800" height="600">
 `)
    
    
    document.addEventListener('keydown', closeEsc);

    
    instance.show()
}

ulEl.addEventListener('click', onGalleryImgClick);     

const closeEsc = event => {
    if (event.code === 'Escape') {
    document.removeEventListener('keydown', closeEsc);
    instance.close();
    } 
}; 





