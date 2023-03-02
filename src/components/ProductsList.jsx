import { useState } from 'react';
import { useQuery } from 'react-query';
import { getSearchProducts } from 'api/products';
import debounce from 'lodash.debounce';
import './listStyles.css';

const ProductsList = () => {
  const [search, setSearch] = useState('');
  const { isLoading, data: products } = useQuery(['products', search], () =>
    getSearchProducts(search, 15)
  );
  const handleSearch = debounce((e) => setSearch(e), 1000);
  return (
    <div className='wrapper'>
      <input
        type='text'
        onChange={(e) => handleSearch(e.target.value)}
        className='input'
        placeholder='Search...'
      />
      {!products?.length && search ? (
        isLoading ? (
          <p className='undefined'>Loading...</p>
        ) : (
          <p className='undefined'>Products not found</p>
        )
      ) : (
        <div className='list'>
          {products?.map((product) => (
            <div key={product.id} className='list_item'>
              <div className='list_item_titleWrapper'>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className='list_item_image'
                />
                <span>{product.title}</span>
              </div>
              <div className='list_item_mainContent'>
                <span className='list_item_description'>
                  {product.description}
                </span>
                <div className='list_item_price'>
                  <span>{product.price} $</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
