import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './users.css'

const users = () => {
  return (
    <div className='p-5 bg-gray-900 min-h-screen text-white'>
      <nav className='flex justify-between items-center'>
        <h1 className='text-2xl'>المستخدمين</h1>
        <button onClick={() => document.getElementById('add_user').showModal()} className='inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110'>إضافة مستخدم</button>
      </nav>

      <div className="overflow-x-auto table-users text-right border-spacing-x-5 mt-5 rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 text-white text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الإسم</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الإيميل</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">رقم الهاتف</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">المزيد</th>
            </tr>
          </thead>

          <tbody className="divide-y table-users divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">مصطفي محمد</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">mstfa.mohmd22@gmail.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">01282313371</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">
                <button onClick={() => document.getElementById('delete_confirm').showModal()} className='bg-indigo-700 px-5 w-36 rounded py-2'>حذف المستخدم</button>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">مصطفي محمد</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">mstfa.mohmd22@gmail.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">01282313371</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">
                <button onClick={() => document.getElementById('delete_confirm').showModal()} className='bg-indigo-700 px-5 w-36 rounded py-2'>حذف المستخدم</button>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">مصطفي محمد</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">mstfa.mohmd22@gmail.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">01282313371</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">
                <button onClick={() => document.getElementById('delete_confirm').showModal()} className='bg-indigo-700 px-5 w-36 rounded py-2'>حذف المستخدم</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialog Add User */}
      <dialog id="add_user" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">إضافة مستخدم جديد</h3>
          <from className="mt-5 flex flex-col gap-3">
            <input type="text" placeholder="الإسم" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="email" placeholder="الإيميل" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="text" placeholder="رقم الهاتف" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="password" placeholder="الباسورد" className="input text-white bg-gray-800 input-bordered w-full" />
          </from>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={() => { toast.success("تمت إضافة المستخدم بنجاح") }} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إضافة المستخدم</button>
              <button className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إلغاء</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Dialog Delete Confirmation */}
      <dialog id="delete_confirm" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">هل أنت متأكد؟</h3>
          <p>هل انت متأكد من حذف المستخدم,
            إذا قمت بحذفة لا يمكنك استرجاعة مرة اخري</p>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={() => { toast.success("تم حذف المستخدم بنجاح") }} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">حذف المستخدم</button>
              <button className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إلغاء</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />

    </div> 
  )
}

export default users