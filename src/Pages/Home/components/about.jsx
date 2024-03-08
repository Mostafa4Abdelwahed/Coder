import AboutImg from './../../../assets/about.png'

const about = () => {
    return (
        <section id='about'>
            <div className="container mx-auto py-5 mt-5 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="mt-12 md:mt-0">
                        <img src={AboutImg} alt="About Us Image" />
                    </div>
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">من نحن ؟</h2>
                        <p className="mt-4 text-gray-600 text-lg">شركة Coder هى شركة متخصصه فى مجال البرمجيات وتدريس لغات البرمجه لانها لا تعتمد على توصيل الماده العلميه نظريا فقط ولكن تنقل لك الخبره المطلوبه لسوق العمل لان مناهجنا متميزه ومختلفه عن المناهج التقليديه لان من قام بتصميمها نخبه من اكبر المبرمجين في مجالات البرمجه المختلفه وبعد الانتهاء من التدريس يتم التدريب علي كل ما تم تدرسيه وتطبيقه عملي من قبل كل طلابنا لننقل الخبرات المطلوبه لسوق العمل وهذا ما جعلنا الخيار الافضل لدي الراغبين في تعلم البرمجه .</p>
                        <div className="mt-8">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about