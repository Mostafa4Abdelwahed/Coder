import React from 'react'

const InputBox = ({ type, placeholder, name, value, onChange }) => {
    return (
        <div className="mb-3">
            <input
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
            />
        </div>
    )
}

export default InputBox 