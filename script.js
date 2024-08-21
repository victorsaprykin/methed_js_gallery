'use stict';

const gallery = document.querySelector('.app');
let url;
let title;
const galleryTitle = `
  <h1>
  галерея водопадов
  </h1>
`;
gallery.style.cssText = 'padding: 20px; text-align: center';
const h1 = document.createElement('h1');
h1.innerHTML = galleryTitle;
gallery.append(h1);
h1.style.cssText =
  'margin: 0; padding: 0; color: blue; font-family: "Arial"; font-size: 60px; font-variant: small-caps';

const ul = document.createElement('ul');

gallery.append(ul);
ul.style.cssText = 'list-style: none; display: flex; gap: 30px';

const galleryList = [
  {
    url: 'img/pic01.jpg',
    title: 'Замерзший водопад',
    alt: 'Замерзший водопад',
  },

  {
    url: 'img/pic02.jpg',
    title: 'Еще водопад',
    alt: 'Водопад',
  },

  {
    url: 'img/pic03.jpg',
    title: 'Завораживающий водопад',
    alt: 'Завораживающий водопад',
  },
  {
    url: 'img/pic04.jpg',
    title: 'Прямо с вершины',
    alt: 'Прямо с вершины',
  },
  {
    url: 'img/pic05.jpg',
    title: 'Волшебные струи',
    alt: 'Волшебные струи',
  },
  {
    url: 'img/pic06.jpg',
    title: 'Водопад "Аленушка"',
    alt: 'Водопад "Аленушка"',
  },
  {
    url: 'img/pic07.jpg',
    title: 'Водопад в джунглях',
    alt: 'Водопад в джунглях',
  },
  {
    url: 'img/pic08.jpg',
    title: 'Водопад в ущелье',
    alt: 'Водопад в ущелье',
  },
];

for (let i = 0; i < galleryList.length; i++) {
  const li = document.createElement('li');
  const itemUrl = galleryList[i].url;
  const itemTitle = galleryList[i].title;
  const itemAlt = galleryList[i].alt;

  const item = `
           <figure style 'margin: 0;'>
            <img src=${itemUrl} alt=${itemAlt} width="200px">
            <figcaption style = 'font-family: "Arial"; font-weight: 700'>
            ${itemTitle}
            </figcaption>
          </figure>
          `;
  li.innerHTML = item;

  ul.append(li);

  li.style.cssText = 'width: 250px; hight: 200px';
}
