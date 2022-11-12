import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function Dashboard() {
  
  return (
    <div>
        <Header />
        <div className="flex">
          <SideBar />
          <main className="bg-gray-100 text-black w-full">
            <div className="flex flex-wrap bg-gray-100 min-h-screen">
                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs"> Warranty Claims (Done) </h5>
                                    <span className="font-semibold text-xl text-blueGray-700">87</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-green-500">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs"> Warranty Claims (Being Worked On)</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">7</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-blue-500">
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Warranty Claims (Failed)</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">5</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i className="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Users</h5>
                                    <span className="font-semibold text-xl text-blueGray-700"> 1717 </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                        <i className="fas fa-percent"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </main>
        </div>
    </div>
  )
}

export default Dashboard;