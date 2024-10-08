import React from 'react';
import LayoutAdmin from './LayoutAdmin/LayoutAdmin';
import LayoutCliente from './LayoutCliente/LayoutCliente';
import LayoutOtros from './LayoutOtros/LayoutOtros';

const LayoutWrapper = ({ children, layout }) => {
  switch (layout) {
    case 'admin':
      return <LayoutAdmin >{children}</LayoutAdmin>;
    case 'cliente':
      return <LayoutCliente>{children}</LayoutCliente>;
    default:
      return <LayoutOtros >{children}</LayoutOtros>;
  }
};

export default LayoutWrapper;
