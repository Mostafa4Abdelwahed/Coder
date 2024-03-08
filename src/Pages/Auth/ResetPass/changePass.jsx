import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputBox from './../components/InputBox'
import { useState } from 'react';

const changePass = () => {
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const submitHandle = (e)=>{
        e.preventDefault();
        if (password.trim() === "") {
            toast.error("من فضلك قم بادخال الباسورد")
        }else if(repassword.trim() === ""){
            toast.error("من فضلك قم باعادة ادخال الباسورد")
        }else if(repassword != password) {
            toast.error("الباسورد غير متطابك")
        }
        else{
            toast.success("تم تغيير كلمة السر بنجاح")
        } 
    }
    return (
        <section className="bg-gray-100 flex justify-center items-center min-h-[100vh] py-20 dark:bg-dark lg:py-[50px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-right md:mb-8">
                                <h1 className='text-3xl'>تغيير كلمة السر</h1>
                            </div>
                            <form onSubmit={submitHandle}>
                                <InputBox value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" name="password" placeholder="كلمة السر الجديدة" />
                                <InputBox value={repassword} onChange={(e)=>{setRepassword(e.target.value)}} type="text" name="password" placeholder="تأكيد كلمة السر" />
                                <div className="mb-10">
                                    <button type='submit'
                                        className="w-full block cursor-pointer rounded-md border border-indigo-700 bg-indigo-700 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                                    >
                                        تغيير كلمة السر
                                    </button>
                                    <ToastContainer />

                                </div>
                            </form>

                            <div>
                                <span className="absolute right-1 top-1">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="1.39737"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 14.0086)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute bottom-1 left-1">
                                    <svg
                                        width="29"
                                        height="40"
                                        viewBox="0 0 29 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="2.288"
                                            cy="25.9912"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 25.9912)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="25.9911"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 25.9911)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="25.9911"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 25.9911)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="13.6944"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 13.6944)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="13.6943"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 13.6943)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="13.6943"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 13.6943)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="38.0087"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 38.0087)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="1.39739"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 1.39739)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="38.0089"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 38.0089)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="38.0089"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 38.0089)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="1.39761"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 1.39761)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="1.39761"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 1.39761)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default changePass