import c from "../images/icons/c++.svg"
import js from "../images/icons/Javascript.svg"
import html from "../images/icons/HTML.png"
import css from "../images/icons/CSS.png"
import react from "../images/icons/React.png"
import redux from "../images/icons/Redux.svg"
import tailwind from "../images/icons/Tailwind.png"
import bootstrap from "../images/icons/Bootstrap.svg"
import express from "../images/icons/Express.png"
import node from "../images/icons/NodeJs.svg"
import mysql from "../images/icons/mysql.svg"
import mongo from "../images/icons/MongoDB.svg"

export default function Stack(){

    return (
        <div className="w-full max-w-[75rem] my-6">
            <h4 className="text-2xl font-medium mx-5 laptop:text-5xl mb-2">
                My Tech Stack
            </h4>

            <div className="flex flex-col px-5 gap-4 laptop:grid laptop:grid-cols-2">
                {/*programming languages*/}
                <div className="flex flex-col bg-gray-100 p-2 rounded-md gap-2">
                    <h6 className="text-lg font-semibold laptop:text-xl">
                        Programming languages
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <img src={c} alt="icon" className="w-16 "/>
                        <img src={js} alt="icon" className="w-16"/>
                    </div>
                </div>

                {/*Frontend lang*/}
                <div className="flex flex-col bg-gray-100 p-2 rounded-md gap-2">
                    <h6 className="text-lg font-semibold laptop:text-xl">
                        Frontend 
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <img src={html} alt="icon" className="w-16"/>
                        <img src={css} alt="icon" className="w-16"/>
                        <img src={react} alt="icon" className="w-16"/>
                        <img src={redux} alt="icon" className="w-16"/>
                        <img src={tailwind} alt="icon" className="w-16"/>
                        <img src={bootstrap} alt="icon" className="w-16"/>
                    </div>
                </div>

                {/*backend*/}
                <div className="flex flex-col bg-gray-100 p-2 rounded-md gap-2">
                    <h6 className="text-lg font-semibold laptop:text-xl">
                        Backend 
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <img src={express} alt="icon" className="w-16"/>
                        <img src={node} alt="icon" className="w-16"/>
                        
                    </div>
                </div>

                {/*database*/}
                <div className="flex flex-col bg-gray-100 p-2 rounded-md gap-2">
                    <h6 className="text-lg font-semibold laptop:text-xl">
                        Database
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <img src={mongo} alt="icon" className="w-16"/>
                        <img src={mysql} alt="icon" className="w-16"/>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}