import {
  ButtonHTMLAttributes,
  createRef,
  DetailedHTMLProps,
  useEffect,
  useState,
} from "react";

function Navbar() {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  let refBtn = createRef<any>();
  function menuMobileToggler() {
    console.log(openMenuMobile);

    let openMenuMobileVar = !openMenuMobile;
    setOpenMenuMobile(openMenuMobileVar);
    // if (openMenuMobile === true) {
    //   setOpenMenuMobile(false);
    // } else {
    //   setOpenMenuMobile(true);
    // }
  }

  function closeMenu($e: MouseEvent) {

        
    
    if (refBtn.current && !refBtn.current.contains($e.target)) {
      setTimeout(() => {
        setOpenMenuMobile(false);
      }, 100);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });
  function menuMobile() {
    if (openMenuMobile === false) {
      return <></>;
    } else {
      return (
        <div className="flex flex-col p-3">
          <a
            href="#"
            className="p-2 my-1 bg-gray-900 text-white rounded-md font-display"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="p-2 my-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md font-display"
          >
            Team
          </a>
          <a
            href="#"
            className="p-2 my-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md font-display"
          >
            Projects
          </a>
          <a
            href="#"
            className="p-2 my-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md font-display"
          >
            Calendar
          </a>
        </div>
      );
    }
  }
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="p-1 flex md:hidden justify-between justify-items-center items-center">
            <button
              ref={refBtn}
              id="navbar-toggle-button"
              className={
                "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              }
              onClick={menuMobileToggler}
            >
              <svg
                className={openMenuMobile ? "hidden" : "hidden" + "h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={
                  openMenuMobile === false ? "hidden" : "block" + "h-6 w-6"
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center text-gray-200 font-bold font-display">
              NKODEX
            </div>
            {/* <div>
            <img className="h-10 w-auto rounded-full" src="https://randomuser.me/api/portraits/men/58.jpg" alt="" />
          </div> */}
            <div className="p-2">
              <button
                type="button"
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                ></img>
              </button>
            </div>
          </div>

          {menuMobile()}
        </div>
        <div
          className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 hidden md:block"}
        >
          <div className="py-3 p-2 flex justify-items-center items-center">
            <div className="text-gray-300 font-bold text-lg pr-10 font-display">
              NKODEX
            </div>
            <a
              href="#"
              className="p-2 bg-gray-900 text-white rounded-md mx-2 font-display"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2 font-display"
            >
              Team
            </a>
            <a
              href="#"
              className="p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2 font-display"
            >
              Projects
            </a>
            <a
              href="#"
              className="p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-2 font-display"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
