import Post from './post'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { ToastContainer } from 'react-toastify';
import request from '../../../../utils/request';
import { useEffect, useState } from 'react';
import Slider from "react-slick";

const articles = () => {
    const [data, setData] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                },
            },
        ],

    };

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
        <header id='courses' className="bg-[#fafafa] mx-auto border-y-2 pt-5 pb-14">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
                <h1 className='font-extrabold text-3xl my-6'>كورسات الأكاديمية</h1>
                    <div className="slider-container">
                            <Slider {...settings}>
                                {
                                    data.map((post) => {
                                        return (
                                            <Post title={post.title} courseId={post._id} thumb={post.thumbnail} />
                                        )
                                    })
                                }
                            </Slider>
                    </div>
            </div>
            <ToastContainer />
        </header>
    )
}

export default articles