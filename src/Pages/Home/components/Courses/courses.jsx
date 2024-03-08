import Post from './post'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { ToastContainer } from 'react-toastify';


const articles = () => {
    return (
        <header id='courses' className="bg-[#fafafa] mx-auto border-y-2 pt-5 pb-14">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
                <h1 className='font-extrabold text-3xl my-6'>كورسات الأكاديمية</h1>
                <div className="carousel-lg hidden md:block px-16">
                    <OwlCarousel dir='ltr' margin={35} className='owl-theme container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-1 lg:gap-8' items="3" loop nav dots>
                    <Post title="Full Stack Diploma" thumb="https://www.coder-eg.com/admin/images/c16222953403c6292e080fd3a7a6870a.png" />
                    <Post title="Front-End Diploma" thumb="https://www.coder-eg.com/admin/images/f50c6ba8def502f3aabd4d39889b2800.png" />
                    <Post title="Flutter Diploma" thumb="https://www.coder-eg.com/admin/images/d9d9fc4b8b932b9fc98f7727f6a2b86d.png" />
                    <Post title="MCSA Diploma" thumb="https://www.coder-eg.com/admin/images/f673d64bda0512844ac1f4f1c942701a.png" />
                    <Post title="Marketing Diploma" thumb="https://www.coder-eg.com/admin/images/f50c6ba8def502f3aabd4d39889b2800.png" />
                    <Post title="CCNA Diploma" thumb="https://www.coder-eg.com/admin/images/279e9c50c8296c444e46ccad2b4bc530.png" />
                    </OwlCarousel>
                </div>
                <div className="carousel-sm block md:hidden px-16">
                <OwlCarousel dir='ltr' margin={35} className='owl-theme container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-1 lg:gap-8' items="1" loop nav dots>
                    <Post title="Full Stack Diploma" thumb="https://www.coder-eg.com/admin/images/c16222953403c6292e080fd3a7a6870a.png" />
                    <Post title="Front-End Diploma" thumb="https://www.coder-eg.com/admin/images/f50c6ba8def502f3aabd4d39889b2800.png" />
                    <Post title="Flutter Diploma" thumb="https://www.coder-eg.com/admin/images/d9d9fc4b8b932b9fc98f7727f6a2b86d.png" />
                    <Post title="MCSA Diploma" thumb="https://www.coder-eg.com/admin/images/f673d64bda0512844ac1f4f1c942701a.png" />
                    <Post title="Marketing Diploma" thumb="https://www.coder-eg.com/admin/images/f50c6ba8def502f3aabd4d39889b2800.png" />
                    <Post title="CCNA Diploma" thumb="https://www.coder-eg.com/admin/images/279e9c50c8296c444e46ccad2b4bc530.png" />
                    </OwlCarousel>
                </div>
            </div>
            <ToastContainer />
        </header>
    )
}

export default articles