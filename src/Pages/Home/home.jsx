import Courses from "./components/Courses/courses"
import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Message from "./components/message"
import Team from "./components/Team/team"

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Courses />
            <Message />
            <Team />
        </div>
    )
}

export default Home