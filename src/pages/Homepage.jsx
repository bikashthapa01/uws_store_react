import React from 'react';
import Product from '../components/product/Product';
import productsData from '../products.json';

function generateProducts(count) {
  const products = [];
  for (let i = 0; i < count; i++) {
    const originalProduct = productsData.products[i % productsData.products.length];
    const product = {
      ...originalProduct,
      id: i + 1,
      thumbnail:originalProduct.thumbnail + "?s=" + i + 1, // Ensure unique IDs for generated products
    };
    products.push(product);
  }
  return products;
}

function HomePage() {
  const generateProductsCount = 1000; // Adjust the count as needed
  const generatedProducts = generateProducts(generateProductsCount);

  const loadProductsStartTime = performance.now();

  const productsDOM = generatedProducts.map(product => (
    <div className="col-md-4 mb-4" key={product.id}>
      <Product product={product} />
    </div>
  ));

  const loadProductsEndTime = performance.now();


  console.log('Generated products:', generatedProducts.length);

  return (
    <div className="container mt-5">
      <div className="row">
        {productsDOM}
      </div>
      {console.log('Total DOM manipulation time for loading all products (in milliseconds):', loadProductsEndTime - loadProductsStartTime)}
    </div>
  );
}

export default HomePage;
