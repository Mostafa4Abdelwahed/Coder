import React from 'react'

const dev = (props) => {
    return (
        <article className="rounded-xl  border-gray-900 border bg-white p-4 flex flex-col items-center">
            <div className="flex items-center gap-4">
                <img alt="developer" src={props.img} className="h-72 md:h-56 rounded object-cover object-top" />
            </div>
            <div>
                <div className="block mt-5 h-full rounded-lg borderp-4">
                    <strong className="font-3xl text-gary-800">{props.job}</strong>

                    <p className="mt-1 text-xl font-extrabold text-gray-900">
                        {props.name}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default dev