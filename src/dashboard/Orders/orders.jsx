import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './orders.css'
import OrderRow from "./OrderRow"
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import { useSelector } from 'react-redux';

const orders = () => {
  const { user } = useSelector(state => state.auth)

    // Get All Orders
    const [orders, setOrders] = useState([]);
    const fetchData = async () => {
      try {
        const { data } = await request.get("/api/orders", {
          headers: {
            Authorization: "Bearer " + user?.token
          }
        });
        setOrders(data)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      fetchData()
    }, [orders])
  
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
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الكورس</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">رقم الهاتف</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الحالة</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">المزيد</th>
            </tr>
          </thead>

          <tbody className="divide-y table-users divide-gray-200">
            {
              orders.map((order)=>{
                return (
                  <OrderRow name={order?.user?.name} phone={order?.user?.phone} courseName={order?.course?.title} isApprov={order?.isApproved} reqId={order?._id}/>
                )
              })
            }
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