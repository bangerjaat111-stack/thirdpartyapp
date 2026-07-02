import React from 'react'
import { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FcFilingCabinet } from "react-icons/fc";
import { FaUsersGear } from "react-icons/fa6";

import { FiLogIn } from "react-icons/fi";
import { IoCreate } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';



export default function () {
    const menudata = [
        { icons: <FaUser />, name: 'All users', slug: '/all-users' },
        { icons: <FcFilingCabinet />, name: 'All Product', slug: '/all-product' },
        { icons: <FaUsersGear />, name: 'User Input', slug: 'user-input' },
    ]

    const auth = [
        { icons: <FiLogIn />, name: 'log in', slug: '/login' },
        { icons: <IoCreate />, name: 'sign up', slug: '/signup' },
    ]

    const [open, setopen] = useState(true)


    return (
        <header className='p-2 '>
            <nav className='flex justify-between shadow-2xl text-2xl bg-black text-white  py-4 px-2 md:px-6  lg:px-8 xl:px-15 2xl:px-20 items-center rounded-full'>
                <Link to="/"><h1>YB</h1></Link>

                <ul className='lg:flex  hidden justify-between items-center gap-5'>
                    {
                        menudata.map(({ name, icons, slug }, index) => (
                            <Link to={slug}>
                                <li className='flex items-center justify-between gap-1 hover:scale-125 duration-300' key={index}>{icons} <h2>{name}</h2></li>
                            </Link>

                        ))
                    }
                </ul>

                <div className=' lg:flex hidden items-center gap-4'>
                    {
                        auth.map(({ icons, name, slug }, index) => (
                            <Link key={index} to={slug}>
                                <button className=' flex items-center gap-1'>{icons} <h2>{name}</h2></button>
                            </Link>

                        ))
                    }
                </div>

                <div onClick={() => setopen(!open)} className='lg:hidden'>
                    {
                        open ? <FaBarsStaggered /> : <IoMdCloseCircleOutline />
                    }

                </div>


                {/* mobile section data */}

                {open && <div className='lg:hidden absolute w-full inset-s-0 top-18 px-10'>

                    <ul>
                        {
                            menudata.map(({ name, icons, slug }, index) => (
                                <Link to={slug}>
                                    <li className=' bg-black text-white items-center flex gap-2  ' key={index}>{icons} <h2>{name}</h2></li>
                                </Link>

                            ))
                        }
                    </ul>

                    <div>]
                        [0gt4   1XE3DRF45UJ7,RXW9KQ Y5TV32CSXQZAvfbghu8jn6de]
                        {
                            auth.map(({ icons, name, slug }, index) => (
                                <Link key={index} to={slug}>
                                    <button className=' flex items-center gap-1'>{icons} <h2>{name}</h2></button>
                                </Link>

                            ))
                        }
                    </div>

                </div>

                }



            </nav>
        </header>
    )
}
