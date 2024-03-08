import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './courses.css'


const courses = () => {
  return (
    <div className='p-5 bg-gray-900 min-h-screen text-white'>
      <nav className='flex justify-between items-center'>
        <h1 className='text-2xl'>الكورسات</h1>
        <button onClick={() => document.getElementById('add_course').showModal()} className='inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110'>إضافة كورس</button>
      </nav>

      <div className="grid mt-5 grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
        <div className="block rounded-lg p-2 border bg-gray-950 shadow-indigo-100">
          <div className="img-course relative">
            <img alt="thumbinal" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-52 w-full course-b -z-10 rounded-md object-cover object-top"
            />
            <h1 className="text-left z-10 text-white font-extrabold text-2xl absolute bottom-2 left-3">Full Stack Diploma</h1>
          </div>
          <div className="mt-3">
            <button onClick={() => document.getElementById('delete_confirm').showModal()} className="btn bg-indigo-700 border-none w-full text-white hover:bg-indigo-600">حذف الكورس</button>
          </div>
        </div>
        <div className="block rounded-lg p-2 border bg-gray-950 shadow-indigo-100">
          <div className="img-course relative">
          <img alt="thumbinal" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-52 w-full course-b -z-10 rounded-md object-cover object-top"
            />
            <h1 className="text-left z-10 text-white font-extrabold text-2xl absolute bottom-2 left-3">Full Stack Diploma</h1>
          </div>
          <div className="mt-3">
            <button onClick={() => document.getElementById('delete_confirm').showModal()} className="btn bg-indigo-700 border-none w-full text-white hover:bg-indigo-600">حذف الكورس</button>
          </div>
        </div>
        <div className="block rounded-lg p-2 border bg-gray-950 shadow-indigo-100">
          <div className="img-course relative">
          <img alt="thumbinal" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-52 w-full course-b -z-10 rounded-md object-cover object-top"
            />
            <h1 className="text-left z-10 text-white font-extrabold text-2xl absolute bottom-2 left-3">Full Stack Diploma</h1>
          </div>
          <div className="mt-3">
            <button onClick={() => document.getElementById('delete_confirm').showModal()} className="btn bg-indigo-700 border-none w-full text-white hover:bg-indigo-600">حذف الكورس</button>
          </div>
        </div>
      </div>

      {/* Dialog Add Course */}
      <dialog id="add_course" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">إضافة كورس جديد</h3>
          <from className="mt-5 flex flex-col gap-3">
            <input type="text" placeholder="إسم الكورس" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="file" className="file-input bg-gray-800 file-input-bordered w-full" />
          </from>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={() => { toast.success("تمت إضافة الكورس بنجاح") }} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إضافة الكورس</button>
              <button className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إلغاء</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Dialog Delete Confirmation */}
      <dialog id="delete_confirm" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">هل أنت متأكد؟</h3>
          <p>هل انت متأكد من حذف الكورس,
            إذا قمت بحذفة لا يمكنك استرجاعة مرة اخري</p>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={() => { toast.success("تم حذف الكورس بنجاح") }} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">حذف الكورس</button>
              <button className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إلغاء</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  )
}

export default courses