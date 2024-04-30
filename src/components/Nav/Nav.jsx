import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { IoIosLogOut } from "react-icons/io";


const Nav = () => {


    const { user, logOut } = useContext(AuthContext);
    // console.log(user)



    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
                // setSuccess('login')
                Swal.fire({
                    title: "congratulations!",
                    text: "You have Successfully Login an Account!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.error(error)
                alert("No")
            })
    }


    const navLinks = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={"/AllTouristsSpot"}>All Tourists Spot</NavLink></li>
        {user && <>
            <li><NavLink to={'/AddTouristsSpot'}>Add Tourists Spot</NavLink></li>
            <li><NavLink to={'/myList'}>My List</NavLink></li>
        </>

        }

    </>

    return (
        <div>

            <div className="bg-slate-600">

                <div className="navbar h-20 container mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to={'/'} className="btn hidden lg:flex bg-slate-600"><span className="self-center text-2xl text-white hover:text-black font-semibold">Aisa<span className="text-purple-500">Adventure</span></span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-white menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>




                    <div className="flex-none navbar-end">







                        {
                            user ?
                                <>
                                    {/* Dark Mood */}
                                    <label className="cursor-pointer grid place-items-center ml-2">
                                        <input type="checkbox" value="night" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    </label>

                                    <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user.displayName}>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full " >
                                                <img alt="Tailwind CSS Navbar component" src={user.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={handleLogOut} className="btn bg-purple-500 hover:bg-transparent text-white hover:text-black " >

                                        LogOut
                                        <IoIosLogOut></IoIosLogOut>
                                    </button>
                                </>

                                :

                                <>
                                    <label className="cursor-pointer grid place-items-center ml-2">
                                        <input type="checkbox" value="night" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    </label>

                                    <NavLink to={'/login'}>
                                        <button className="btn  bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3" >Login</button>
                                    </NavLink>
                                    <NavLink to={'/registration'}>
                                        <button className="btn bg-purple-500 hover:bg-transparent text-white hover:text-black "  >Registration</button>
                                    </NavLink>
                                </>

                        }




                    </div>
                </div>

            </div>




        </div>
    );
};

export default Nav;