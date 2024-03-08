import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './orders.css'

const orders = () => {
  return (
    <div className='p-5 bg-gray-900 min-h-screen text-white'>
      <nav className='flex justify-between items-center'>
        <h1 className='text-2xl'>الأوردرات</h1>
      </nav>

      <div className="overflow-x-auto table-users text-right border-spacing-x-5 mt-5 rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 text-white text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الإسم</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الإيميل</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">رقم الهاتف</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الحالة</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">المزيد</th>
            </tr>
          </thead>

          <tbody className="divide-y table-users divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">مصطفي محمد</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">mstfa.mohmd22@gmail.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">01282313371</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">انتظار</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">
                <button onClick={() => document.getElementById('delete_confirm').showModal()} className='bg-indigo-700 px-5 mx-2 rounded py-2'>حذف الطلب</button>
                <button onClick={() => document.getElementById('order_confirm').showModal()} className='bg-indigo-700 px-5 mx-2 rounded py-2'>تأكيد الطلب</button>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">مصطفي محمد</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">mstfa.mohmd22@gmail.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">01282313371</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">مؤكد</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">
                <button onClick={() => document.getElementById('delete_confirm').showModal()} className='bg-indigo-700 px-5 mx-2 rounded py-2'>حذف الطلب</button>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-white">مصطفي محمد</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">mstfa.mohmd22@gmail.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">01282313371</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">انتظار</td>
              <td className="whitespace-nowrap px-4 py-2 text-white">
                <button onClick={() => document.getElementById('delete_confirm').showModal()} className='bg-indigo-700 px-5 mx-2 rounded py-2'>حذف الطلب</button>
                <button onClick={() => document.getElementById('order_confirm').showModal()} className='bg-indigo-700 px-5 mx-2 rounded py-2'>تأكيد الطلب</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <dialog id="order_confirm" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">هل أنت متأكد؟</h3>
          <p>هل انت متأكد من تأكيد طلب شراء الكورس,
          </p>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={() => { toast.success("تم تأكيد الطلب بنجاح") }} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">تأكيد الطلب</button>
              <button className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إلغاء</button>
            </form>
          </div>
        </div>
      </dialog>


      {/* Dialog Delete Confirmation */}
      <dialog id="delete_confirm" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">هل أنت متأكد؟</h3>
          <p>هل انت متأكد من حذف طلب شراء الكورس,
            إذا قمت بحذفة لا يمكنك استرجاعة مرة اخري</p>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={() => { toast.success("تم حذف الطلب بنجاح") }} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">حذف الطلب</button>
              <button className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إلغاء</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  )
}

export default orders