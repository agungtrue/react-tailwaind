import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Loading from '../../components/Loading';
import { productList } from '../../constant/api/products';

function Product({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [productData, setProductData] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setProductData(productList.data)
        setTimeout(() => setIsLoading(false), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
  return (
      <div className="containers">
          <Header />
          <div className="flex">
              <SideBar />
              {Boolean(isLoading) && <Loading />}
              {!isLoading && (
                <main
                    className="bg-gray-100 text-black w-full"
                >
                    <div className="pt-4 uppercase" style={{ paddingLeft: '3rem' }}>Product</div>
                    <div className="p-4" style={{ paddingLeft: '3rem' }}>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                        </div>
                    </div>
                    <div className="overflow-x-auto pr-10 pl-10">
                        <div className="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                            <div className="w-full">
                                <div className="bg-white shadow-md rounded my-6">
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">Product Name</th>
                                                <th className="py-3 px-6 text-left">Product Code</th>
                                                <th className="py-3 px-6 text-center">Serial Number</th>
                                                <th className="py-3 px-6 text-center">Product Type</th>
                                                <th className="py-3 px-6 text-center">Brand</th>
                                                <th className="py-3 px-6 text-center">Created At</th>
                                                <th className="py-3 px-6 text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm font-light">
                                            {Boolean(productData.length) && productData.map((product) => (
                                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={product._id}>
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <span className="font-medium">{ product.productName}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <div className="flex items-center">
                                                            <span>{ product.productCode || '-'}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex items-center justify-center">
                                                            <span>{ product.serialNumber || '-'}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center uppercase">
                                                        <span>{ product.productType?.name || '-'}</span>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <span>{ product.brandName || '-'}</span>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex item-center justify-center">
                                                            <span>{ product.createdAt || '-' }</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex item-center justify-center">
                                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                <Link to={`/product/${product._id}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                            <div
                                                                className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 pointer"
                                                                onClick={() => alert('should be open the modal, then have an the particular form data')}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                                onClick={() => alert('should be open the confirmation modal, then do the action')}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
              )}
          </div>
      </div>
  )
}

export default Product;