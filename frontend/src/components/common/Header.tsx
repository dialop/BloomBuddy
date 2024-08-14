import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-green-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-container"></div>
            <div className="md:w-1/2">
                <p className="font-bold text-sm uppercase">Welcome to BloomBuddy</p>
                <button className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Learn More
                </button>
            </div>
            <h1> BloomBuddy </h1>
        </header>
    )
}

export default Header;