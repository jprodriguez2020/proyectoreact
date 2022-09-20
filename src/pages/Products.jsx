import { useDispatchCart } from '../components/Cart/Cart';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('http://localhost:5000/products');
      const data = await response.data;
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const dispatch = useDispatchCart();
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: product });
  };
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map((product) => (
              <div key={product.id} className="group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                  <img src={product.imageSrc} alt={product.description} className="object-cover object-center w-full h-full group-hover:opacity-75"/>
                </div>
                <h3 className="h-20 mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-center text-gray-900">$ {product.price}</p>
                <button className="button font-poppins mb-16 mt-3 flex mx-auto py-1.5 px-14 shadow-xl" onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
          )
        )}

        </div>
      </div>
    </div>
    
  );
};

export default Products;
