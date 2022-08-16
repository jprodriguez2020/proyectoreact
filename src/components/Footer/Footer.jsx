import React from 'react';

const Footer = () => {
    return <Footer className="bg-gray-900 text-white">
        <div className="md-flex md:justify-between md:items-center sm:px-12 px-4 bg-themeOrange py-7">
            <h1 classname="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-dynapuff md:w-2/5">
                <span classname="text-teal-400">Free</span> until you're ready to shop</h1>
        </div>
        <input 
            type="text" 
            placeholder="Ingrese su Telefono"
            classname="text-gray-800 sm:w72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
        />
        <button classname="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-dynapuff rounded-md text-white md:w-auto w-full">
            Request Code
        </button>

    </Footer>

}


export default Footer;
