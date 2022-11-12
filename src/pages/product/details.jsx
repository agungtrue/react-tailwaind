import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Loading from '../../components/Loading';
import { productList } from '../../constant/api/products';

function ProductDetail() {
    const [isLoading, setIsLoading] = useState(false);
    const [productDetailData, setProductDetailData] = useState({});
    const params = useParams();

    useEffect(() => {
        setIsLoading(true);
        setProductDetailData(productList.data.find((product) => product._id === params.id)); // should be called based on id, but just return object data
        setTimeout(() => setIsLoading(false), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
      <div className="containers">
          <Header />
          {/* <div className="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20 shadow-md"> */}
          <div className="flex">
              <SideBar />
              {Boolean(isLoading) && <Loading />}
              {!isLoading && (
                <main
                    className="bg-gray-100 text-black w-full"
                >
                    <div className="pt-4 uppercase text-xl text-gray-500 dark:text-black" style={{ paddingLeft: '3rem' }}>Product Detail</div>
                    <div className="overflow-x-auto pr-10 pl-10">
                        <div className="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                            <div className="w-full">
                                <div className="bg-white shadow-md rounded my-6">
                                    <div className="lg:flex">
                                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                                            <span className="text-xl font-semibold text-gray-800 dark:text-black">
                                                { productDetailData?.brandName }
                                                {' '}
                                                { productDetailData?.productName }
                                            </span>
                                            
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Product Code: { productDetailData?.productCode }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Serial Number: { productDetailData?.serialNumber }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Product Code: { productDetailData?.productCode }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Product Type: <span className="uppercase">{ productDetailData?.productType?.name || 'unknown' }</span>
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Specification: { productDetailData?.specification }
                                            </span>
                                        </div>
                                        <div className="flex flex-row grow justify-end py-6 lg:mx-6 gap-2.5">
                                            <span className="text-sm text-white">
                                                <button
                                                    onClick={() => alert('should be open the modal, then have an the particular form data')}
                                                    className="uppercase p-3.5 transform rounded-sm bg-gray-50 dark:bg-gray-500 py-2 font-bold duration-300 hover:bg-indigo-400"
                                                >
                                                Update
                                                </button>
                                            </span>
                                        </div>
                                    </div>
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

export default ProductDetail;