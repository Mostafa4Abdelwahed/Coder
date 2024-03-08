import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const post = (props) => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() { setIsOpen(false) }
    function openModal() { setIsOpen(true) }

    return (
        <article href='' className="h-96 bg-white rounded-lg transition hover:shadow-lg">
            <img
                alt=""
                src={props.thumb}
                className="h-56 w-full object-cover object-top"
            />
            <div className="bg-white p-4 sm:p-6 flex justify-end flex-col">
                {/* <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10 اكتوبر 2024 </time> */}
                <a href="#">
                    <h1 className='font-black text-left text-2xl'>{props.title}</h1>
                </a>
                <button type="button" onClick={openModal} className="py-3 transition w-full px-4 inline-flex justify-center mt-4 text-center gap-x-2 text-sm font-semibold rounded-lg border border-indigo-700 text-indigo-700 disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:text-indigo-600 dark:hover:border-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    اشترك الآن
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-right text-gray-900"
                                    >
                                        الإشتراك في الكورس
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-right text-gray-500">
                                            عند الضغط علي زر تاكيد الإشتراك سوف يتم ارسال جميع بياناتك الي الشركة و سيتم التواصل معك لإتمام عملية الاشتراك
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                    <button
                                            onClick={closeModal}
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            إلغاء
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex mx-2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={()=>{
                                                setIsOpen(false)
                                                toast.success("تم إرسال طلب الإشتراك")
                                            }}
    
                                        >
                                            تأكيد الإشتراك
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </article>
    )
}

export default post