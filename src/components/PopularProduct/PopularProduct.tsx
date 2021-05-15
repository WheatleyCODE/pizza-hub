import React from 'react';
import ProductSlider from '../UI/ProductSlider/ProductSlider';
import './PopularProduct.scss';

const PopularProduct = () => {
  const popular = [
    {
      title: 'Маргарита',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_760x760.jpeg',
      price: 'От 345 ₽',
      route: '/margarita',
    },
    {
      title: 'Ветчина и грибы',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_584x584.jpeg',
      price: 'От 345 ₽',
      route: '/ham-and-mushrooms',
    },
    {
      title: '2 пиццы',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/f55b3c83e94b4c4d99b44f3e2e856af1_292x292.webp',
      price: '899 ₽',
      route: '/two-pizza',
    },
    {
      title: 'Комбо за 599 ₽',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/6dca194599cd40cba642bef6bef34d4e_760x760.png',
      price: '599 ₽',
      route: '/combo599',
    },
    {
      title: 'Острый Додстер',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2ec8a54a9a7d44a68b3f97e4b37ed426_760x760.jpeg',
      price: '159 ₽',
      route: '/sharp-dodster',
    },
    {
      title: 'Картофель из печи',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e3eeee00e41c4b2cb4f3f5f2fc0f504e_760x760.jpeg',
      price: '179 ₽',
      route: '/potatoes-from-the-oven',
    },
    {
      title: 'Смородиновый молочный коктейль',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1e74fb971fe34337a87ef5358b0df0dc_760x760.jpeg',
      price: '159 ₽',
      route: '/сurrant-milkshake',
    },
    {
      title: 'Молочный коктейль с печеньем Орео',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/86fe757e450745b295c8b1645efc2a3f_760x760.jpeg',
      price: '179 ₽',
      route: '/milkshake-with-oreo-cookies',
    },
    {
      title: 'Coca-Cola',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/3e245152-1a34-441e-8eeb-0cde9c099777.jpg',
      price: '95 ₽',
      route: '/coca-cola',
    },
    {
      title: 'Вода негазированная',
      url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/63d6f83e-1eec-493f-84a1-47bd393408b8.jpg',
      price: '65 ₽',
      route: '/water',
    },
  ];
  return (
    <div className="PopularProduct">
      <h2>Новое и популярное</h2>
      <ProductSlider products={popular} />
    </div>
  );
};

export default PopularProduct;
