import Dev from './dev'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { useEffect, useState } from 'react'
import request from "../../../../utils/request"
import Slider from "react-slick";


const team = () => {
    // State to store the fetched data
    const [data, setData] = useState([]);

    // Function to fetch data using Axios
    const fetchData = async () => {
        try {
            const { data } = await request.get("/api/enginners");
            setData(data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    // Call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, [data]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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


    return (
        <section id='team' className="bg-[#fafafa] mx-auto border-y-2 pt-5 pb-14">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
                <h1 className='font-extrabold text-4xl my-6'>فريق العمل</h1>
                <div className="slider-container">
                <Slider {...settings}>
                    {
                        data.map((eng) => {
                            return (
                                <Dev name={eng.name} job={eng.job} img={eng.image} />
                            )
                        })
                    }
                </Slider>
            </div>

            </div>
        </section>
    )
}

export default team