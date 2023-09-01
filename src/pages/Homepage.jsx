// HomePage.js
import Product from '../components/product/Product';
import productsData from '../products.json';

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="row">
        {productsData.products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
