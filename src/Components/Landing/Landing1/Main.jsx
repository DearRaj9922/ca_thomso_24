import React from 'react'
import logo from "../Landing1/assets/thomsologo.png"
import './Main.css'
import img from "./assets/background.png"
import bgmsvg from "../../Assets/landing4desktopbg.svg"
export const Main = () => {
    return (
        <>
            <div className='h-full w-full'>
                <div className='flex flex-row justify-between mt-[1%] '>
                    <img className="ml-[3%] h-[3%] w-[5%]" src={logo} alt="" />
                    <button className='mr-[3%] border text-[30px] font-nashville rounded-sm  border-black italic w-[8%]'>
                        Login
                    </button>
                </div>
                <div className='flex flex-col gap-1 items-center '>
                    <h1 className='text-xs font-nashville text-center  text-[#515151] text-shadow-custom'> CAMPUS AMBASSADOR <br />PROGRAM </h1>
                    <button className='border-4  rounded-sm text-xs text-[#515151] font-nashville shadow-custom border-[#515151] w-20'> Register Now</button>

                    <div className=' mt-[-10%]   '>
                        <img src={img} alt="bgm image
                        " />
                    
              

                    </div>
                </div>
            </div>


        </>
    )
}
