import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomTag from './customTag'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <CustomTag color='#68d39a'>Somethings</CustomTag>
      <CustomTag color='#fa541c'>Somethings</CustomTag>
      <CustomTag color='#d4b106'>Somethings</CustomTag>
      <CustomTag color='#fcffe6'>Somethings</CustomTag>
      <CustomTag color='#52c41a'>Somethings</CustomTag>
      <CustomTag color='#13c2c2'>Somethings</CustomTag>
      <CustomTag color='#722ed1'>Somethings</CustomTag>
    </div>
  );
}

export default App;
