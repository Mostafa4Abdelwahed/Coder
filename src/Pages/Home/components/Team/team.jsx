import Dev from './dev'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

const team = () => {
    return (
        <section id='team' className="bg-[#fafafa] mx-auto border-y-2 pt-5 pb-14">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
                <h1 className='font-extrabold text-4xl text-center my-6'>فريق العمل</h1>
            </div>
            <div className="carousel-lg hidden md:block px-16">
            <OwlCarousel dir='ltr' margin={35} className='owl-theme container' items="4" loop nav dots>
                <Dev name="Eng/ Said Elhosiny" job="Full Stack Instracture" img="https://www.coder-eg.com/admin/images/8687c896cfe56db6fd6c03648c4b78e5.png"/>
                <Dev name="Eng/ Mohamed Elrafey" job="Front End Instracture" img="https://www.coder-eg.com/admin/images/59a56da519cdb72fcec2e63bc31b531a.jpg"/>
                <Dev name="Eng/ Ahmed Hatem" job="Front End Instracture" img="https://www.coder-eg.com/admin/images/460bef5f9110c0fa28f6d2dcc0df7a18.png"/>
                <Dev name="Eng/ Eslam Orabi" job="Network Instracture" img="https://www.coder-eg.com/admin/images/b0712bf093d8d3525c248bb81f65b1e4.png"/>
                <Dev name="Eng/ Mahmoud Emad" job="Back End Instracture" img="https://www.coder-eg.com/admin/images/84fee0d815902d523526f1cb01f2d961.png"/>
                <Dev name="Eng/ Mahmoud Madkour" job="Back End Trainer" img="https://www.coder-eg.com/admin/images/16b2ba5bd680d402c99c2a9574fc17ee.png"/>
            </OwlCarousel>
            </div>
            <div className="carousel-sm block md:hidden px-16">
            <OwlCarousel dir='ltr' margin={35} className='owl-theme container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-1 lg:gap-8' items="1" loop nav dots>
                <Dev name="Eng/ Said Elhosiny" job="Full Stack Instracture" img="https://www.coder-eg.com/admin/images/8687c896cfe56db6fd6c03648c4b78e5.png"/>
                <Dev name="Eng/ Mohamed Elrafey" job="Front End Instracture" img="https://www.coder-eg.com/admin/images/59a56da519cdb72fcec2e63bc31b531a.jpg"/>
                <Dev name="Eng/ Ahmed Hatem" job="Front End Instracture" img="https://www.coder-eg.com/admin/images/460bef5f9110c0fa28f6d2dcc0df7a18.png"/>
                <Dev name="Eng/ Eslam Orabi" job="Network Instracture" img="https://www.coder-eg.com/admin/images/b0712bf093d8d3525c248bb81f65b1e4.png"/>
                <Dev name="Eng/ Mahmoud Emad" job="Back End Instracture" img="https://www.coder-eg.com/admin/images/84fee0d815902d523526f1cb01f2d961.png"/>
                <Dev name="Eng/ Mahmoud Madkour" job="Back End Trainer" img="https://www.coder-eg.com/admin/images/16b2ba5bd680d402c99c2a9574fc17ee.png"/>
            </OwlCarousel>
            </div>
        </section>
    )
}

export default team