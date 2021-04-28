import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Menu.scss';

const Menu = () => {
  const { menu, loading, error } = useTypedSelector((state) => state.menu);
  const { fetchMenu } = useActions();
  console.log(menu, loading, error);

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="Menu">
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
