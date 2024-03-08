import Message from './../../../assets/message.png'

const message = () => {
  return (
    <section id='message'>
    <div className="container mx-auto py-5 mt-5 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">رؤيتنا</h2>
                <p className="mt-4 text-gray-600 text-lg">نحن نؤمن بأننا جميعا نمتلك القدره على التقدم و التطور ما دامت أتيحت لنا بيئة خصبه تساعد فى ذلك ، لذلك نحن فريق عمل Coder نركز على دعم الطالب على المستوى العلمى و التقنى و أيضا النفسى فنحن ننقل رحلة التعلم الى مسار يكون فيه الشغف و المرح أساسا للنجاح ، لذلك تذكر دائما بأننا إلى جانبك و مؤمنين بقدراتك و ننتظر تطورك بشغف .</p>
                <div className="mt-8">
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src={Message} alt="About Us Image" />
            </div>
        </div>
    </div>
</section>

  )
}

export default message