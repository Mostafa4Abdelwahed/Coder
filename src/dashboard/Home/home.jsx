import { LuUsers } from "react-icons/lu";
import { HiOutlineSaveAs } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../Orders/orders'
import request from "../../utils/request"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const home = () => {
  const { user } = useSelector(state => state.auth)

  // State to store the fetched data
  const [team, setTeam] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const topUsers = users.slice(0, 5)
  const topOrders = orders.slice(0, 5)

  const fetchTeam = async () => {
    const { data } = await request.get("/api/enginners");
    setTeam(data);
  };
  const fetchOrders = async () => {
    const { data } = await request.get("/api/orders", {
      headers: {
        Authorization: "Bearer " + user.token,
      }
    });
    setOrders(data);
  };
  const fetchUsers = async () => {
    const { data } = await request.get("/api/users", {
      headers: {
        Authorization: "Bearer " + user.token,
      }
    });
    setUsers(data);
  };



  // Call fetchData on component mount
  useEffect(() => {
    fetchTeam();
  }, [team]);
  useEffect(() => {
    fetchOrders();
  }, [orders]);
  useEffect(() => {
    fetchUsers();
  }, [users]);



  return (
    <div className="p-5 bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">

        <div class="rounded-xl text-card-foreground text-white bg-indigo-600">
          <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 class="tracking-tight text-sm font-medium">الطلبات</h3>
            <HiOutlineSaveAs />
          </div>
          <div class="p-6 pt-0">
            <div class="text-2xl font-bold">{orders.length}</div>
            <p class="text-xs text-white text-muted-foreground">العدد الكلي للطلبات</p>
          </div>
        </div>
        <div class="rounded-xl bg-card text-card-foreground text-white bg-indigo-600">
          <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 class="tracking-tight text-sm font-medium">المستخدمين</h3>
            <LuUsers />
          </div>
          <div class="p-6 pt-0">
            <div class="text-2xl font-bold">{users.length}</div>
            <p class="text-xs text-white text-muted-foreground">العدد الكلي للمستخدمين</p>
          </div>
        </div>
        <div class="rounded-xl bg-card text-card-foreground text-white bg-indigo-600">
          <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 class="tracking-tight text-sm font-medium">الفريق</h3>
            <RiTeamLine />
          </div>

          <div class="p-6 pt-0">
            <div class="text-2xl font-bold">{team.length}</div>
            <p class="text-xs text-white text-muted-foreground">العدد الكلي لفريق العمل</p>
          </div>
        </div>

      </div>


      <div className="grid mt-8 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="text-2xl text-white mr-3 mb-2">اخر 5 طلبات</h1>
          <div className="overflow-x-auto table-users text-right border-spacing-x-5 rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-white text-sm">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الإسم</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white">رقم الهاتف</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الكورس</th>
                </tr>
              </thead>

              <tbody className="divide-y table-users divide-gray-200">
                {
                  topOrders.map((order) => {
                    return (
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-white">{order?.user?.name}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-white">{order?.user?.phone}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-white">{order?.course?.title}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-3 md:mt-0">
          <h1 className="text-2xl text-white mr-3 mb-2">المستخدمين الجدد</h1>
          <div className="overflow-x-auto table-users text-right border-spacing-x-5 rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-white text-sm">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الإسم</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white">الإيميل</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white">رقم الهاتف</th>
                </tr>
              </thead>

              <tbody className="divide-y table-users divide-gray-200">
                {
                  topUsers.map((user) => {
                    return (
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-white">{user.name}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-white">{user.email}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-white">{user.phone}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>




      {/* <div class="grid gap-4 grid-cols-1 mt-5">
        <div class="rounded-xl border bg-card text-card-foreground shadow col-span-3 bg-gray-900 text-white">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="font-semibold leading-none tracking-tight">اخر المنتجات</h3>
            <p class="text-sm text-muted-foreground">اخر 5 منتجات تم إضافتها.</p>
          </div>
          <div class="p-6 pt-0">
            <div class="space-y-8">
              <div class="flex items-center">
                <span class="relative text-3xl">
                  <MdOutlineAddTask />
                </span>
                <div class="mr-4 space-y-1">
                  <p class="text-sm font-medium leading-none">ايفون 13 برو ماكس</p>
                  <p class="text-sm text-muted-foreground">يتبع ضمن تصنيف (ابل)</p>
                </div>
                <div class="mr-auto font-medium">3999 ج.م</div>
              </div>
              <div class="flex items-center">
                <span class="relative text-3xl">
                  <MdOutlineAddTask />
                </span>
                <div class="mr-4 space-y-1">
                  <p class="text-sm font-medium leading-none">ايفون 13 برو ماكس</p>
                  <p class="text-sm text-muted-foreground">يتبع ضمن تصنيف (ابل)</p>
                </div>
                <div class="mr-auto font-medium">3999 ج.م</div>
              </div>
              <div class="flex items-center">
                <span class="relative text-3xl">
                  <MdOutlineAddTask />
                </span>
                <div class="mr-4 space-y-1">
                  <p class="text-sm font-medium leading-none">ايفون 13 برو ماكس</p>
                  <p class="text-sm text-muted-foreground">يتبع ضمن تصنيف (ابل)</p>
                </div>
                <div class="mr-auto font-medium">3999 ج.م</div>
              </div>
              <div class="flex items-center">
                <span class="relative text-3xl">
                  <MdOutlineAddTask />
                </span>
                <div class="mr-4 space-y-1">
                  <p class="text-sm font-medium leading-none">ايفون 13 برو ماكس</p>
                  <p class="text-sm text-muted-foreground">يتبع ضمن تصنيف (ابل)</p>
                </div>
                <div class="mr-auto font-medium">3999 ج.م</div>
              </div>
              <div class="flex items-center">
                <span class="relative text-3xl">
                  <MdOutlineAddTask />
                </span>
                <div class="mr-4 space-y-1">
                  <p class="text-sm font-medium leading-none">ايفون 13 برو ماكس</p>
                  <p class="text-sm text-muted-foreground">يتبع ضمن تصنيف (ابل)</p>
                </div>
                <div class="mr-auto font-medium">3999 ج.م</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default home