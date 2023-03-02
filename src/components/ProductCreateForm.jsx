import './formStyles.css';
import { createProduct } from 'api/products';

const ProductCreateForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title: e.target[0].value,
      description: e.target[1].value,
      price: e.target[2].value,
    };
    createProduct(payload);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  };
  return (
    <div className='formWrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          className='formInput'
        />
        <textarea
          name='description'
          placeholder='Description'
          className='textArea'
        />
        <input
          type='number'
          placeholder='Price'
          name='price'
          className='formInput'
        />
        <input type='submit' className='formButton' />
      </form>
    </div>
  );
};

export default ProductCreateForm;
