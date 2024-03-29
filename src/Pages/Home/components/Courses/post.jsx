import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import request from '../../../../utils/request';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const post = (props) => {
    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth)

    const showAlert = () => {
        swal({
            title: "هل انت متأكد من الاشتراك في الكورس ؟",
            buttons: ["إلغاء","إشتراك"],
        })
            .then(async (value) => {    
                if (value) {
                    swal({
                        title: "تم ارسال طلب الاشتراك",
                        icon: "success"
                    })
                    const response = await request.post("/api/orders",{
                        course: props.courseId,
                        user: user?._id
                    });
                };
            });
    }
    const shoaAlertReg = () => {
        swal({
            title: "يجب عليك التسجيل اولا للتمكن من طلب الإشتراك",
            buttons: ["إلغاء","تسجيل"],
        })
            .then(async (value) => {    
                if (value) {
                    navigate("/login")
                };
            });
    }


    return (
        <article href='' className="h-96 bg-white rounded-lg transition hover:shadow-lg">
            <img
                alt=""
                src={props.thumb}
                className="h-56 w-full object-cover object-top"
            />
            <div className="bg-white p-4 sm:p-6 flex justify-end flex-col">
                <a href="#">
                    <h1 className='font-black text-left text-2xl'>{props.title}</h1>
                </a>
                <button type="button" onClick={user ? showAlert : shoaAlertReg} className="py-3 transition w-full px-4 inline-flex justify-center mt-4 text-center gap-x-2 text-sm font-semibold rounded-lg border border-indigo-700 text-indigo-700 disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:text-indigo-600 dark:hover:border-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    اشترك الآن
                </button>
            </div>
        </article>
    )
}

export default post