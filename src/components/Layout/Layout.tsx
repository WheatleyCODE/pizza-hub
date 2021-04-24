import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Layout.scss';

const Layout = () => {
  const { menu, loading, error } = useTypedSelector((state) => state.user);
  const { fetchMenu } = useActions();
  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(menu, loading, error);

  return (
    <div className="Layout">
      <h1>Layout</h1>
    </div>
  );
};

export default Layout;
