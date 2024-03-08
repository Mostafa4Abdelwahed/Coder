import { Link } from 'react-router-dom'
import Logo from './../../assets/logo.png'

const footer = () => {
    return (
        <footer id='footer' className="bg-gray-50 py-5">
            <div className="bg-gradient-to-b container mx-auto py-3">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div>
                            <img src={Logo} alt="logo" className='h-16' />
                            <p className='py-4 mb-5 text-justify'>شركة Coder هى شركة متخصصه فى مجال البرمجيات وتدريس لغات البرمجه لانها لا تعتمد على توصيل الماده العلميه نظريا فقط ولكن تنقل لك الخبره المطلوبه لسوق العمل لان مناهجنا متميزه ومختلفه عن المناهج التقليديه لان من قام بتصميمها نخبه من اكبر المبرمجين في مجالات البرمجه المختلفه وبعد الانتهاء من التدريس يتم التدريب علي كل ما تم تدرسيه وتطبيقه عملي من قبل كل طلابنا لننقل الخبرات المطلوبه لسوق العمل وهذا ما جعلنا الخيار الافضل لدي الراغبين في تعلم البرمجه .
                            </p>
                            <Link className='bg-indigo-600 rounded text-white px-7 py-3' to="/register">انضم الينا</Link>
                        </div>

                        <div className='my-10 lg:my-0'>
                            <h1 className='text-3xl underline underline-offset-4'>العنوان</h1>
                            <p className='text-justify mt-8'>
                                شارع المحافظة - بجوار أبناء التوحيد و النور المبنى المقابل لشركة الرحمة للأستيرد و التصدير - برج الدولية الدور التالت علوى.
                                <a href="https://www.google.com/maps/dir/30.8009984,31.2740808/30.5890369,31.5000826/@30.7060163,31.5199371,11z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0" className='text-indigo-700'>/ Zagazig, Al Sharqia Governorate, Egypt 7120730</a>
                            </p>
                            <p className='mt-4'>
                                يمكنك الاتصال بنا على
                                <a href="whatsapp://send?text=اهلآ%كودر!&phone=+201551033800" className='text-indigo-700'> 01551033800 / 01554933829 / 0552313393 </a>
                            </p>
                        </div>

                        <div>
                            <h1 className='text-3xl underline underline-offset-4'>اتصل بنا</h1>
                            <form className='flex flex-col gap-5 mt-8'>
                                <input className='border py-3 focus:outline-none focus:scale-105 shadow px-5' type="text" placeholder='اسمك' />
                                <input className='border py-3 focus:outline-none focus:scale-105 shadow px-5' type="text" placeholder='رقم موبايلك' />
                                <textarea className='border focus:outline-none focus:scale-105 shadow py-3 px-5' cols="15" rows="5" placeholder='اكتب رسالتك هنااا'></textarea>
                                <a className='bg-indigo-700 px-5 py-3 text-white text-center' href='#'>ابعت</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 border-t-2 border-gray-200 pt-8">
                <p className="text-center text-xd/relaxed text-gray-500">
                    © Company 2022. All rights reserved.
                    <br />
                    Developed By
                    <a href="https://fb.com/sasa.des2" target='_blank' className="text-gray-700 underline transition hover:text-gray-700/75"> Mostafa Mohamed </a>.
                </p>
            </div>
        </footer>
    )
}

export default footer