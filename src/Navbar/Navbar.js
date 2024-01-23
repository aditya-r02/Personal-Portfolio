
import { useState } from 'react';
import './Navbar.css'
import { CiDark, CiLight } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

export default function Navbar({ projectRef, skillRef, contactRef, mode, changeMode }) {
    const scrollTo = (element) => {
        //console.log(contactRef)
        //console.log(element.current.getBoundingClientRect());
        const targetPos = element.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(!open);
    }

    return (
        <div className="w-full flex justify-center items-center fixed z-50 bg-white border-b border-gray-200
        dark:bg-[#222831] dark:text-[#EEEEEE] dark:border-[#393E46] ">

            {/*Navbar*/}
            <div className='w-full max-w-[75rem] px-4 py-2 flex justify-between items-center bg-white dark:bg-[#222831]'>
                {/*Aditya Rana*/}
                <div className="flex items-center">
                    <span className="lobster text-4xl laptop:text-5xl">
                        A
                    </span>
                    <span className='font-calibri text-xl font-medium laptop:text-2xl'>
                        ditya
                    </span>
                    <span className='font-calibri hidden laptop:text-2xl laptop:inline'>
                        &nbsp;Rana
                    </span>
                </div>

                {/*Ul list*/}
                <div className='flex gap-3 text-lg laptop:text-xl items-center'>
                    <span onClick={() => { scrollTo(projectRef) }} className='cursor-pointer  select-none hidden laptop:inline'>
                        Projects
                    </span>
                    <span onClick={() => { scrollTo(skillRef) }} className='cursor-pointer  select-none hidden laptop:inline'>
                        Skills
                    </span>
                    <span onClick={() => { scrollTo(contactRef) }} className='cursor-pointer hidden laptop:inline underline select-none'>
                        Contact Me
                    </span>

                    <span className='cursor-pointer laptop:hidden text-3xl text-black dark:text-white'
                        onClick={openModal}>
                        <FiMenu />
                    </span>

                    {/*Change Mode*/}
                    <div className={`hidden laptop:flex items-center transition duration-150 
                      ${mode ? 'bg-blue-500' : 'bg-black'} py-1 rounded-full px-1 cursor-pointer`}
                        onClick={() => { changeMode(!mode) }}>

                        <span className={`bg-yellow-300 text-white rounded-full  transition duration-150
                        ${mode ? '' : 'translate-x-3 opacity-0'} flex items-center justify-center w-6 h-6`}>
                            <CiLight />
                        </span>

                        <span className={`rounded-full bg-[#393E46]  text-white transition duration-150
                        ${mode ? '-translate-x-3 opacity-0' : ''}  flex items-center justify-center w-6 h-6`}>
                            <CiDark />
                        </span>

                    </div>


                </div>
            </div>

            {/*Sidebar*/}
            <div className={`${open ? 'absolute' : 'hidden'} top-0 right-0 left-0 dark:bg-white/30 bg-black/30  w-full h-screen`}
                onClick={() => { setOpen(false) }}>
                <div className={`${open ? '' : 'translate-x-96 opacity-0'}  flex flex-col absolute top-12 right-4 items-end
                 dark:bg-[#393E46] rounded-lg px-5 py-2 gap-3 bg-white`}>
                    <span onClick={() => { scrollTo(projectRef) }} className='cursor-pointer  select-none'>
                        Projects
                    </span>
                    <span onClick={() => { scrollTo(skillRef) }} className='cursor-pointer  select-none '>
                        Skills
                    </span>
                    <span onClick={() => { scrollTo(contactRef) }} className='cursor-pointer  underline select-none'>
                        Contact Me
                    </span>

                    {/*Change Mode*/}
                    <div className={`w-fit flex items-center transition duration-150
                      ${mode ? 'bg-blue-500' : 'bg-black'} py-1 rounded-full px-1 cursor-pointer`}
                        onClick={() => { changeMode(!mode) }}>

                        <span className={`bg-yellow-300 text-white rounded-full  transition duration-150
                        ${mode ? '' : 'translate-x-3 opacity-0'} flex items-center justify-center w-6 h-6`}>
                            <CiLight />
                        </span>

                        <span className={`rounded-full bg-[#393E46]  text-white transition duration-150
                        ${mode ? '-translate-x-3 opacity-0' : ''}  flex items-center justify-center w-6 h-6`}>
                            <CiDark />
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}