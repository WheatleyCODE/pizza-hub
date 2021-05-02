import React, { useEffect } from 'react';
import useActions from '../../hooks/useAction';
// import useTypedSelector from '../../hooks/useTypedSelector';
import './Menu.scss';
import Product from './Product/Product';

const menu = [
  {
    collectionName: 'Пица',
    collection: [
      {
        title: 'Гавайская',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c992a10b195f4276b3b7417fa2c23a07_292x292.png',
        description: 'Ветчина, ананасы, моцарелла, томатный соус',
        price: 395,
      },
      {
        title: 'Двойной цыпленок',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0fbe5a8c798d4c548c193c34ffb1b785_292x292.jpeg',
        description: 'Цыпленок, моцарелла, соус альфредо',
        price: 295,
      },
      {
        title: 'Пепперони фреш',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_292x292.jpeg',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
        price: 245,
      },
      {
        title: 'Сырная',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/38a9d286399345c7a560fb649e09e8b4_292x292.jpeg',
        description: 'Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо',
        price: 245,
      },
      {
        title: 'Гавайская',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c992a10b195f4276b3b7417fa2c23a07_292x292.png',
        description: 'Ветчина, ананасы, моцарелла, томатный соус',
        price: 395,
      },
      {
        title: 'Двойной цыпленок',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0fbe5a8c798d4c548c193c34ffb1b785_292x292.jpeg',
        description: 'Цыпленок, моцарелла, соус альфредо',
        price: 295,
      },
      {
        title: 'Пепперони фреш',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_292x292.jpeg',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
        price: 245,
      },
      {
        title: 'Сырная',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/38a9d286399345c7a560fb649e09e8b4_292x292.jpeg',
        description: 'Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо',
        price: 245,
      },
    ],
  },
  {
    collectionName: 'Комбо',
    collection: [
      {
        title: 'Комбо за 599р',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/6dca194599cd40cba642bef6bef34d4e_292x292.webp',
        description: 'Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.',
        price: 599,
      },
      {
        title: '2 пицы',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/f55b3c83e94b4c4d99b44f3e2e856af1_292x292.webp',
        description: 'Самое популярное комбо из 2 пицц 30 см. Большой выбор',
        price: 899,
      },
      {
        title: '2 пицы и напиток',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/3ccc2085e30f4a3e8b1d7f550228be46_292x292.webp',
        description: '2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек.',
        price: 749,
      },
      {
        title: '2 пицы и закуска',
        url: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/32544ea9acac4d509924a25a37bc985f_292x292.webp',
        description: '2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек',
        price: 799,
      },
    ],
  },
];

const Menu = () => {
  // const { menu, loading, error } = useTypedSelector((state) => state.menu);
  const { fetchMenu } = useActions();
  // console.log(menu, loading, error);

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="Menu">
      <div className="Menu__container">
        { menu.map((coll) => (
          <div key={coll.collectionName} className="container__colection">
            <h1 className="colection__title">{coll.collectionName}</h1>
            <div className="colection__product-container">
              { coll.collection.map((product, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Product key={i} product={product} />
              )) }
            </div>
          </div>
        )) }
      </div>
    </div>
  );
};

export default Menu;
