const Navbar = () => {
    return (
        <div className="flex justify-between">
            {/* Website name/Logo */}
            <h3 className="text-3xl font-bold">Recipe Calories</h3>
            {/* Nav Menu */}
            <ul className="menu menu-vertical lg:menu-horizontal  rounded-box">
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>
            </ul>
            {/* Search Field */}
            {/* <input type="search" name="" id="" placeholder="search " /> */}
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
            {/* User Icon */}
            <div className="bg-green-400 w-12 h-12 flex items-center justify-center rounded-full">
                <i className="fa-regular fa-circle-user text-2xl"></i>
            </div>
        </div>
        // <div className="navbar bg-base-100">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost text-xl">daisyUI</a>
        //     </div>
        //     <div className="flex-none gap-2">
        //         <div className="form-control">
        //             <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        //         </div>
        //         <div className="dropdown dropdown-end">
        //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        //                 <div className="w-10 rounded-full">
        //                     <img
        //                         alt="Tailwind CSS Navbar component"
        //                         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        //                 </div>
        //             </div>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        //                 <li>
        //                     <a className="justify-between">
        //                         Profile
        //                         <span className="badge">New</span>
        //                     </a>
        //                 </li>
        //                 <li><a>Settings</a></li>
        //                 <li><a>Logout</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Navbar;