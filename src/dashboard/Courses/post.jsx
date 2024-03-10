import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import request from '../../utils/request'
import { Dialog, Transition } from '@headlessui/react'

const post = ({ img, title, dipId }) => {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {setIsOpen(false)}
  function openModal() {setIsOpen(true)}
  const { user } = useSelector(state => state.auth)

  return (
    <Fragment>
      <div className="block rounded-lg p-2 border bg-gray-950 shadow-indigo-100">
        <div className="img-course relative">
          <img alt="thumbinal" src={img}
            className="h-52 w-full course-b -z-10 rounded-md object-cover object-top"
          />
          <h1 className="text-left z-10 text-white font-extrabold text-2xl absolute bottom-2 left-3">{title}</h1>
        </div>
        <div className="mt-3">
          <button onClick={openModal} className="btn bg-indigo-700 border-none w-full text-white hover:bg-indigo-600">حذف الكورس</button>
        </div>
      </div>

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
                    هل انت متأكد من حذف الكورس, إذا قمت بحذفة لا يمكنك استرجاعة مرة اخري
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                  <button
                      type="button"
                      className="btn border-none grow text-white hover:bg-indigo-600 w-[50%] bg-indigo-700"
                      onClick={async () => {
                        const res = await request.delete(`/api/courses/${dipId}`, {
                          headers: {
                            Authorization: "Bearer " + user?.token
                          }
                        })
                      }}
                    >
                      حذف الكورس
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

export default post