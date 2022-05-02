import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { withPageAdmin } from '../../components/hoc'
import Pagination from '../../components/Pagination'
import QuickView from '../../components/QuickView'
   
const Lease: NextPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [products, setProducts] = useState([])
   const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    async function getNgo() {
      setLoading(true)
      const result  = await (await fetch('https://apex.oracle.com/pls/apex/sdg17_1/testlab/RECYC')).json()
      setProducts(result.items)
      setLoading(false)
    }
    getNgo()
  }, [])
  // Your details has been sent to the NGO. Someone will get back  to you

  const openWindow = () => {
    let params =`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=-1000,top=-1000`;
    
    open('https://substation33.com.au/contact-us/', 'test', params);

  }

  return (
    <div className="d-flex flex-col">
      {selectedProduct && (
        <QuickView selectedProduct={selectedProduct}>
                
          <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
              <img src="https://www.mymovingreviews.com/images/static-maps/static-map.php?center=Level%209%2C%20440%20Collins%20StreetMelbourne,Victoria&zoom=12&size=620x300&maptype=roadmap&markers=icon:http%3A%2F%2Fwww%2Emymovingreviews%2Ecom%2Fimages%2Fmmrpin%2Epng%7Cshadow:true%7CLevel%209%2C%20440%20Collins%20StreetMelbourne,Victoria&sensor=false&visual_refresh=true&key=AIzaSyCFEGjaoZtuJwPI-0HBJQXHcJ1ElEN8btI" alt="" className="object-center object-cover" />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{selectedProduct.name}</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <p className="text-2xl text-gray-900">{selectedProduct.address}</p>
              </section>

              <section aria-labelledby="options-heading" className="mt-4">
                  <button
                    type="submit"
                    className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => openWindow()}
                  >
                    Contact
                  </button> 
              </section>
            </div>
          </div>

          
        </QuickView>
      )}
      {isLoading && <div className="my-4">Loading...please wait</div>}
      <ul role="list" className="-my-6 divide-y divide-gray-200 mb-8">
        {products.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(product)
                    }}> {product.name} </a>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.address}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm mt-2">
                <div className="flex flex-row">
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 mr-4" onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(product)
                    }}>
                  Submit
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {!isLoading && (

      <Pagination />
      )}
    </div>
  )
}

export default withPageAdmin(Lease, {
  page: {
    title: 'Recycle',
    subtitle: 'All available recyccle organisation'
  }
})