import Products from '../components/Product'
import productItems from '../data/products.json'

const Shop = () => {
  return (
    <div className='flex gap-7 py-7'>
      {
        productItems.data.map(item => (
          <Products title={item.title} price={item.price} imgURL={item.imgUrl} key={item.id} id={item.id}  />
        ))
      }
    </div>
  )
}

export default Shop