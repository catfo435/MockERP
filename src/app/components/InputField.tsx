'use client'

import { Component } from "react";

interface InputFieldProps {
    label : string,
    type: string
}
 
 
class InputField extends Component<InputFieldProps> {
    render() { 
        return (
            <div className="relative mx-20 my-10">
            <input id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg outline-red-300 appearance-none dark:text-white dark:outline-gray-600 dark:focus:outline-blue-500 focus:ring-0 focus:outline-blue-600 peer" placeholder=" " {...this.props}/>
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{this.props.label}</label>
        </div>
        );
    }
}
 
export default InputField;