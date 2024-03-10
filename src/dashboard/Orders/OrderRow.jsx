import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import request from '../../utils/request';

const OrderRow = ({name, isApprov, courseName, phone, reqId}) => {
    let [isOpenDelete, setIsOpenDelete] = useState(false)
    let [isOpenConfirm, setIsOpenConfirm] = useState(false)
    const { user } = useSelector(state => state.auth)
    return (
        <Fragment>
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-white">{name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">{courseName}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">{phone}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">{isApprov ? "مؤكد" : "انتظار"}</td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                    <button onClick={()=> setIsOpenDelete(true)} className='bg-indigo-700 px-5 mx-2 rounded py-2'>حذف الطلب</button>
                    {
                        isApprov ? ""
                        : 
                        <button onClick={() => setIsOpenConfirm(true)} className='bg-indigo-700 px-5 mx-2 rounded py-2'>تأكيد الطلب</button>
                    }
                </td>
            </tr>
            {/* Delete Order Dialog */}
            <Transition appear show={isOpenDelete} as={Fragment}>
                <Dialog as="div" className="relative z-10 bg-gray-800" onClose={()=>setIsOpenDelete(false)}>
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
                                            هل انت متأكد من حذف الطلب, إذا قمت بحذفة لا يمكنك استرجاعة مرة اخري
                                        </p>
                                    </div>

                                    <div className="mt-4 flex gap-2">
                                        <button
                                            type="button"
                                            className="btn border-none grow text-white hover:bg-indigo-600 w-[50%] bg-indigo-700"
                                            onClick={async () => {
                                                const res = await request.delete(`/api/orders/${reqId}`, {
                                                    headers: {
                                                        Authorization: "Bearer " + user?.token
                                                    }
                                                })
                                                toast.success("تم حذف الطلب بنجاح");
                                                setIsOpenDelete(false);
                                            }}
                                        >
                                            حذف الطلب
                                        </button>

                                        <button
                                            type="button"
                                            className="btn border-none text-white hover:bg-indigo-600 w-[50%] grow bg-indigo-700"
                                            onClick={()=> setIsOpenDelete(false)}
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

            {/* Confirm Order Dialog */}
            <Transition appear show={isOpenConfirm} as={Fragment}>
                <Dialog as="div" className="relative z-10 bg-gray-800" onClose={()=>setIsOpenConfirm(false)}>
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
                                            هل انت متأكد من تأكيد الطلب, إذا قمت بتأكيدة لا يمكنك استرجاع حالة الطلب مرة اخري
                                        </p>
                                    </div>

                                    <div className="mt-4 flex gap-2">
                                        <button
                                            type="button"
                                            className="btn border-none grow text-white hover:bg-indigo-600 w-[50%] bg-indigo-700"
                                            onClick={async () => {
                                                const res = await request.put(`/api/orders/${reqId}`,{
                                                    isApproved: true
                                                }, {
                                                    headers: {
                                                        Authorization: "Bearer " + user?.token
                                                    }
                                                })
                                                toast.success("تم تأكيد الطلب بنجاح");
                                                setIsOpenConfirm(false);
                                            }}
                                        >
                                            تأكيد الطلب
                                        </button>

                                        <button
                                            type="button"
                                            className="btn border-none text-white hover:bg-indigo-600 w-[50%] grow bg-indigo-700"
                                            onClick={()=> setIsOpenConfirm(false)}
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

export default OrderRow