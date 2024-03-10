import Post from './post'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { ToastContainer } from 'react-toastify';
import request from '../../../../utils/request';
import { useEffect, useState } from 'react';

const articles = () => {
    const [data, setData] = useState([]);

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
    }, []);


    return (
        <header id='courses' className="bg-[#fafafa] mx-auto border-y-2 pt-5 pb-14">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
                <h1 className='font-extrabold text-3xl my-6'>كورسات الأكاديمية</h1>
                <div className="carousel-lg hidden md:block px-16">
                    <OwlCarousel dir='ltr' margin={35} className='owl-theme container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-1 lg:gap-8' items="3" loop nav dots>
                        {
                            data.map((post) => {
                                return (
                                    <Post title={post.title} courseId={post._id} thumb={post.thumbnail} />
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
                <div className="carousel-sm block md:hidden px-16">
                    <OwlCarousel dir='ltr' margin={35} className='owl-theme container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-1 lg:gap-8' items="1" loop nav dots>
                        {
                            data.map((post) => {
                                return (
                                    <Post title={post.title} courseId={post._id} thumb={post.thumbnail} />
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
            <ToastContainer />
        </header>
    )
}

export default articles