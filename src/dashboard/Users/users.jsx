import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './users.css'
import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react';
import request from "../../utils/request"
import UserRow from './userRow';
import { useSelector } from 'react-redux';

const users = () => {
  const [enabled, setEnabled] = useState(false)
  const { user } = useSelector(state => state.auth)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


  const addUserHandler = async () => {
    try {
      if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || password.trim() === "") {
        toast.error("برجاء ملئ جميع الحقول")
      }
      const res = await request.post("/api/auth/newuser", {
        name: name,
        email: email,
        phone: phone,
        password: password,
        isAdmin: enabled
      },{
        headers: {
          Authorization: "Bearer " + user?.token
        }
      })
      setName("")
      setEmail("")
      setPhone("")
      setPassword("")
      toast.success("تم اضافة المستخدم بنجاح")
    } catch (error) {
      console.log(error);
    }
  }

  // Get All Users
  const [students, setStudents] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await request.get("/api/users", {
        headers: {
          Authorization: "Bearer " + user?.token
        }
      });
      setStudents(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [students])


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
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">النوع</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">المزيد</th>
            </tr>
          </thead>
          <tbody className="divide-y table-users divide-gray-200">
            {
              students.map((user) => {
                return (
                  <UserRow name={user.name} email={user.email} phone={user.phone} userId={user._id} isAdmin={user.isAdmin} />
                )
              })
            }
          </tbody>
        </table>
      </div>

      {/* Dialog Add User */}
      <dialog id="add_user" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">إضافة مستخدم جديد</h3>
          <from className="mt-5 flex flex-col gap-3">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="الإسم" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="الإيميل" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="رقم الهاتف" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="الباسورد" className="input text-white bg-gray-800 input-bordered w-full" />

            <div className='flex justify-between my-2'>
              <h1>صلاحيات الادمن</h1>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-indigo-800' : 'bg-indigo-400'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${enabled ? '-translate-x-6' : '-translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            </div>
          </from>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={() => addUserHandler()} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إضافة المستخدم</button>
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