import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import { toast } from "react-toastify";


const navbar = () => {

  const dispatch = useDispatch();
  const logoutHandler = (e) =>{
    e.preventDefault();
    dispatch(logoutUser());
    toast.success("تم تسجيل الخروج بنجاح")
  }
  const { user } = useSelector(state => state.auth)
  const links = [
    { name: "ما الذي نفعلة", link: "#services" },
    { name: "من نحن", link: "#about" },
    { name: "كورساتنا", link: "#courses" },
    { name: "رئيتنا", link: "#message" },
    { name: "فريق العمل", link: "#team" },
  ]
  return (
    <header className="bg-white mx-auto py-3">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-indigo-700" href="#">
              <h1 className="font-extrabold text-3xl">كــودر</h1>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-1 text-sm">
                <li>
                  <a className="bg-indigo-700 px-5 py-3 rounded-full transition text-gray-100 tajawal-extrabold" href="#"> الرئيسية </a>
                </li>

                {
                  links.map((link) => {
                    <li>
                      <a className="text-gray-900 hover:bg-indigo-700 px-5 py-3 rounded-full tajawal-medium transition hover:text-gray-100" href={link.link}>{link.name}</a>
                    </li>
                  })
                }

                <li>
                  <a className="text-gray-900 hover:bg-indigo-700 px-5 py-3 rounded-full tajawal-medium transition hover:text-gray-100" href="#services"> ما الذي نفعلة</a>
                </li>

                <li>
                  <a className="text-gray-900 hover:bg-indigo-700 px-5 py-3 rounded-full tajawal-medium transition hover:text-gray-100" href="#about"> من نحن </a>
                </li>

                <li>
                  <a className="text-gray-900 hover:bg-indigo-700 px-5 py-3 rounded-full tajawal-medium transition hover:text-gray-100" href="#courses"> كورساتنا </a>
                </li>

                <li>
                  <a className="text-gray-900 hover:bg-indigo-700 px-5 py-3 rounded-full tajawal-medium transition hover:text-gray-100" href="#message"> رئيتنا </a>
                </li>

                <li>
                  <a className="text-gray-900 hover:bg-indigo-700 px-5 py-3 rounded-full tajawal-medium transition hover:text-gray-100" href="#team"> فريق العمل </a>
                </li>

              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {
                user ? (<> {user?.isAdmin ? (<Link className="btn" to="/dashboard">لوحة التحكم</Link>) : 
                <form onSubmit={logoutHandler}>
                <button className="btn" type="submit">تسجيل الخروج</button>
              </form>
                }
                </>) : (<>
                  <Link to="/login"
                    className="rounded-md bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    تسجيل
                  </Link>

                  <div className="hidden sm:flex">
                    <Link to="/register"
                      className="transition rounded-md hover:bg-indigo-700 hover:text-gray-100 bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-700"
                      href="#"
                    >
                      إنشاء حساب
                    </Link>
                  </div></>)
              }
            </div>

            <div className="block md:hidden">
              <div class="hs-dropdown relative inline-flex">
                <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div class="hs-dropdown-menu container z-50 space-y-1 py-2 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-full bg-white shadow-md p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
                  {
                    links.map((link) => {
                      return (
                        <a href={link.link} class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-indigo-700 hover:text-white transition focus:outline-none focus:bg-indigo-700 focus:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                          {link.name}
                        </a>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>)
}

export default navbar