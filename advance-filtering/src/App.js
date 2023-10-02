
import { useState } from 'react';

import './App.css';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recomended from './Recomended/Recomended';
import Sidebar from './sidebar/Sidebar';


// import data 
import products from "./db/data"
import Card from './components/Card';
function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  /*  ------------input  -------------*/
  const [query, setQuery] = useState("")


  // handle input change
  const handleInputChange = event => {
    setQuery(event.target.value)
  }


  const filteredItems =
    products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase ) !== -1
    );


  /*  -----------radio filter -------------*/
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }


  /*  -----------button filter  -------------*/
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }


  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // apply selected filter
    if (selected) {
      filteredProducts =
        filteredProducts.filter(
          ({ category, color, company, newPrice, title }) =>
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
        );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );

  }
  const result = filteredData(products, selectedCategory, query);


  return (
    <>
     <Navigation query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Recomended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
