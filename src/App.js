import React from 'react';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="App" style={{ margin: 'auto', paddingTop: '2%' }} >
      <Gallery imageFolder={'./images/'} />
    </ div>
  );
}

export default App;
