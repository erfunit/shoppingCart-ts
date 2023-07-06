import { useCartContext } from "../context/CartContext";
// import { useState } from 'react';

type ProductProps = {
    title: string;
    price: number;
    imgURL: string;
    id: number;
}

const Products = ({ id, title, price, imgURL }: ProductProps): JSX.Element => {
  // const products: ProductProps[] = []
  const { getItemQty, addItemCount, decreaseItemCount, removeItem } = useCartContext()

  const qty = getItemQty(id)

  return (
    <div className='w-56 bg-slate-200 duration-300 transition-all flex flex-col gap-3 rounded-xl overflow-hidden p-3'>
          <img src={imgURL} className='rounded-lg' />
          <div className='flex  justify-between items-center'>
            <h3 className='font-bold text-base text-slate-700'>
              {title}
            </h3>
            <span className='text-base bg-slate-100/40 p-2 rounded-md text-slate-600 '>
              {price}
            </span>
          </div>
          <div>
            {
              qty === 0 ? (
                <button onClick={() => addItemCount(id)} className="text-slate-50 rounded-lg bg-slate-600 active:bg-slate-500 transition-all w-full py-2 ">
                  add to cart
                </button>
              ) : (
                <div className="flex flex-col gap-2 w-full items-center">
                  <div className="flex w-full justify-evenly">
                  <button onClick={() => addItemCount(id)} className="h-10 w-10 rounded bg-slate-600 text-slate-100 active:scale-95 transition-all flex items-center justify-center">+</button>
                  <span>{qty}</span>
                  <button onClick={() => decreaseItemCount(id)} className="h-10 w-10 rounded bg-slate-600 text-slate-100 active:scale-95 transition-all flex items-center justify-center">-</button>
                  </div>
                  <button onClick={() => removeItem(id)} className="text-red-700 w-full px-4 py-2 rounded bg-red-200/0 active:bg-red-200/100 transition-all">remove</button>
                </div>
              )
            }
          </div>
    </div>
  )
}

export default Products