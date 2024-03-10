import Dev from './dev'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { useEffect, useState } from 'react'
import request from "../../../../utils/request"

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
    }, []);

    return (
        <section id='team' className="bg-[#fafafa] mx-auto border-y-2 pt-5 pb-14">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
                <h1 className='font-extrabold text-4xl text-center my-6'>فريق العمل</h1>
            </div>
            <div className="carousel-lg hidden md:block px-16">
                <OwlCarousel dir='ltr' margin={35} className='owl-theme container' items="4" loop nav dots>
                    {
                        data.map((eng) => {
                            return (
                                <Dev name={eng.name} job={eng.job} img={eng.image} />
                            )
                        })
                    }
                </OwlCarousel>
            </div>
            <div className="carousel-sm block md:hidden px-16">
                <OwlCarousel dir='ltr' margin={35} className='owl-theme container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-1 lg:gap-8' items="1" loop nav dots>
                {
                        data.map((eng) => {
                            return (
                                <Dev name={eng.name} job={eng.job} img={eng.image} />
                            )
                        })
                    }
                </OwlCarousel>
            </div>
        </section>
    )
}

export default team