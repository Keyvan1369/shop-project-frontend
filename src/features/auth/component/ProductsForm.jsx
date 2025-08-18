import React from 'react'
import { useProducts } from '../../post/component/Product'

export const ProductsForm = () => {
   const products = useProducts();
  return (
     <section className="py-8 px-6 md:px-16 bg-[#C8A897]">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {products.map((products) => (
                    <div key={products.id} className="bg-white p-4 rounded shadow">
                      <img
                        src={products.img}
                        alt={products.name}
                        className="rounded mb-4 w-full h-48 object-cover"
                      />
                      <h3 className="font-medium mb-2">{products.name}</h3>
                      <p className="text-green-700 font-bold">{products.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
  )
}
