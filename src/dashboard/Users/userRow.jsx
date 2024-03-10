import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'
import request from "../../utils/request"


const userRow = (props) => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {setIsOpen(false)}
    function openModal() {setIsOpen(true)}
    const { user } = useSelector(state => state.auth)
    return (
        <Fragment>
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-white">{props.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">{props.email}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">{props.phone}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">{props.isAdmin ? "ادمن" : "مستخدم"}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                    <button onClick={openModal} className='bg-indigo-700 px-5 w-36 rounded py-2'>حذف المستخدم</button>
                </td>
            </tr>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 bg-gray-800" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h1"
                                        className="text-xl font-bold text-right leading-6 text-white"
                                    >
                                        هل أنت متأكد ؟
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-base text-right text-gray-200">
                                            هل انت متأكد من حذف المستخدم, إذا قمت بحذفة لا يمكنك استرجاعة مرة اخري
                                        </p>
                                    </div>

                                    <div className="mt-4 flex gap-2">
                                        <button
                                            type="button"
                                            className="btn border-none grow text-white hover:bg-indigo-600 w-[50%] bg-indigo-700"
                                            onClick={async () => {
                                                const res = await request.delete(`/api/users/${props.userId}`, {
                                                    headers: {
                                                        Authorization: "Bearer " + user?.token
                                                    }
                                                })
                                                toast.success("تم حذف المستخدم بنجاح");
                                                setIsOpen(false);
                                                closeModal()
                                            }}
                                        >
                                            حذف المستخدم
                                        </button>

                                        <button
                                            type="button"
                                            className="btn border-none text-white hover:bg-indigo-600 w-[50%] grow bg-indigo-700"
                                            onClick={closeModal}
                                        >
                                            إلغاء
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Fragment>
    )
}

export default userRow