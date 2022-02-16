import './App.css';
import { useState, useEffect } from "react";
import ListDisplay from "./components/listDisplay";
import React from 'react';
import MyContext from './context/MyContext'




function App() {


  const url = 'http://52.26.193.201:3000/';

  const [productList, setProductList] = useState([]);
  const [clickedProduct, setClickedProduct] = useState([]);

  useEffect(() => {
    fetchProductList()
  }, [])

  function fetchProductList(){
    return fetch(`http://52.26.193.201:3000/products/list?page=1&count=1000`)
    .then((response) => response.json())
    .then((data) => setProductList(data))

  }

  function handleProductClick(id){
    return fetch(url + 'products/' + id +'/styles')
    .then(response => response.json())
    .then(data => setClickedProduct(data))

  }

  let contextObj = {
    handleProductClick,
    clickedProduct


  }





  return (
    <MyContext.Provider value={contextObj}>
      <div className="App">
        <header className="App-header">
          <ListDisplay productList={productList}/>
        </header>
      </div>
    </MyContext.Provider>
  );
}

export default App;
