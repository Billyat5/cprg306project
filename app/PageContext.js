// app/PageContext.js
import React from 'react';

const PageContext = React.createContext({
  showMainPage: true,
  setShowMainPage: () => {}
});

export default PageContext;
