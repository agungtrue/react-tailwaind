import React from "react";
import Navbar from "../../components/Navbar";
import Logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <div className="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20 shadow-md">
            <div className="inline-flex">
                <button className="_o6689fn">
                    <div className="hidden md:block">
                        <img src={Logo} width="102" height="32" alt="logo" />
                    </div>
                    <div className="block md:hidden">
                        <img src={Logo} width="30" height="32" alt="logo" />
                    </div>
                </button>
            </div>
            <Navbar />
        </div>
    )
}

export default Header;