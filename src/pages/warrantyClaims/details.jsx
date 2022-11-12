import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Loading from '../../components/Loading';
import { warrantyClaimList } from '../../constant/api/warrantyClaims';

function WarrantyClaimDetail({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [warrantyClaimData, setWarrantyClaimData] = useState({});

    const params = useParams();

    useEffect(() => {
        setIsLoading(true);
        setWarrantyClaimData(warrantyClaimList.data.find((warranty) => warranty._id === params.id))
        setTimeout(() => setIsLoading(false), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function WarrantyStatus ({ status }) {
        let customerStatus = 'blue-200';

        if (status === 'approved') customerStatus = 'green-200';
        else if (status === 'failed') customerStatus = 'red-500';
        else if (status === 'done') customerStatus = 'yellow-200';

        return (
          <span className={`uppercase bg-${customerStatus} text-${customerStatus}-600 py-1 px-3 rounded-full text-xs`}>
           {status}
          </span>
        );
    }
  
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
                    <div className="pt-4 uppercase" style={{ paddingLeft: '3rem' }}>Warranty Claim Detail</div>
                    <div className="overflow-x-auto pr-10 pl-10">
                        <div className="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                            <div className="w-full">
                                <div className="bg-white shadow-md rounded my-6">
                                    <div className="lg:flex">
                                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                                            <span className="text-xl font-semibold text-gray-800 dark:text-black uppercase">
                                                { warrantyClaimData?.customerId?.username || '-' }
                                                {' - '}
                                                { warrantyClaimData?.customerId?.email || '-' }
                                                {' - '}
                                                <WarrantyStatus status={warrantyClaimData.status}/>
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Product Code: { warrantyClaimData?.productCode || '-' }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Serial Number Product: { warrantyClaimData?.serialNumberProduct || '-' }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Customer Notes: { warrantyClaimData?.customerNotes || '-' }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Staff: { warrantyClaimData?.handledBy?.username || '-' }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Staff Notes: { warrantyClaimData?.staffNotes || '-' }
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Serial Number Photo: <a href={warrantyClaimData?.serialNumberPhoto} target="_blank" rel="noreferrer">
                                                    { warrantyClaimData?.serialNumberPhoto || '-' }
                                                </a>
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Receipt Photo: <a href={warrantyClaimData?.receiptPhoto} target="_blank" rel="noreferrer">
                                                    { warrantyClaimData?.receiptPhoto || '-' }
                                                </a>
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-600">
                                                Purchase Date: { warrantyClaimData?.purchaseDate || '-' }
                                            </span>
                                        </div>
                                        <div className="flex flex-row grow justify-end py-6 lg:mx-6 gap-2.5">
                                            <span className="text-sm text-white">
                                                <button
                                                    onClick={() => alert('should be open the modal, then have an the particular form data')}
                                                    className="uppercase p-3.5 transform rounded-sm bg-gray-50 dark:bg-gray-500 py-2 font-bold duration-300 hover:bg-indigo-400"
                                                >
                                                ACTION
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

export default WarrantyClaimDetail;