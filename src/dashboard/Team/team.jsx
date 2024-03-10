import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './team.css'
import Eng from "./eng"
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import { useSelector } from 'react-redux';

const team = () => {
  const { user } = useSelector(state => state.auth)
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [url, setUrl] = useState("");

  const addEngHandler = async ()=>{
    if (name.trim() === "" || job.trim() === "" || url.trim() === "") {
      return toast.error("برجاء ملئ جميع الحقول")
    }
    const res = await request.post("/api/enginners",{
     name: name,
     job: job,
     url: url,
    },{
     headers: {
       Authorization: "Bearer " + user?.token
     }
    })
    toast.success("تم اضافة المهندس بنجاح")
    setName("")
    setJob("")
    setUrl("")
   }
 

  const fetchData = async () => {
    try {
      const { data } = await request.get("/api/enginners");
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
        <h1 className='text-2xl'>الفريق</h1>
        <button onClick={() => document.getElementById('add_course').showModal()} className='inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110'>إضافة مهندس</button>
      </nav>

      <div className="grid mt-5 grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
        {
          data.map((eng)=>{
            return(
              <Eng name={eng.name} img={eng.image} engId={eng._id}/>
            )
          })
        }
      </div>

      {/* Dialog Add Course */}
      <dialog id="add_course" className="modal text-white">
        <div className="modal-box bg-gray-900">
          <h3 className="font-bold text-lg mb-4">إضافة مهندس جديد</h3>
          <from className="mt-5 flex flex-col gap-3">
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="إسم المهندس" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="text" value={job} onChange={(e)=> setJob(e.target.value)} placeholder="الوظيفة" className="input text-white bg-gray-800 input-bordered w-full" />
            <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)} placeholder="رابط صورة المهندس" className="input text-white bg-gray-800 input-bordered w-full" />
          </from>
          <div className="modal-action">
            <form method="dialog" className="w-[100%] flex gap-2">
              <button onClick={addEngHandler} className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إضافة المهندس</button>
              <button className="btn border-none text-white hover:bg-indigo-600 w-[50%] bg-indigo-700">إلغاء</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  )
}

export default team