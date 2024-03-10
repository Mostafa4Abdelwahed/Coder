import './courses.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import request from '../../utils/request';
import Post from "./post"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const courses = () => {
  const { user } = useSelector(state => state.auth)
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();

  const addCourseHandler = async ()=>{
    if (title.trim() === "" || url.trim() === "") {
      toast.error("برجاء ملئ جميع الحقول")
    }
   const res = await request.post("/api/courses",{
    title: title,
    url: url
   },{
    headers: {
      Authorization: "Bearer " + user?.token
    }
   })
  }
  const fetchData = async () => {
    try {
        const { data } = await request.get("/api/courses");
        setData(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};


  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className='p-5 bg-gray-900 min-h-screen text-white'>
      <nav className='flex justify-between items-center'>
        <h1 className='text-2xl'>الكورسات</h1>
        <button onClick={() => document.getElementById('add_course').showModal()} className='inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110'>إضافة كورس</button>
      </nav>

      <div className="grid mt-5 grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
        {
          data.map((course)=>{
            return (
              <Post title={course.title} dipId={course._id} img={course.thumbnail} />
            )
          })
        }
      </div>

      {/* Dialog Add Course */}
      <dialog id="add_course" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">إضافة كورس جديد</h3>
          <from className="mt-5 flex flex-col gap-3">
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="إسم الكورس" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)} placeholder="رابط صورة الكورس" className="input text-white bg-gray-800 input-bordered w-full" />
          </from>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={()=> addCourseHandler()} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إضافة الكورس</button>
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