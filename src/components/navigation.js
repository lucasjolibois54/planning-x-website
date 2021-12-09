import React, { useState } from "react";
import { navigate } from "gatsby"



import PlannerXlogo from "../images/PlannerXlogo.png";




export default function IndexPage() {
    const [show, setShow] = useState(null);
    
    return (
        <>
            <div className="bg-gray-200 h-full w-full">
                {/* Code block starts */}
                <nav className=" bg-maybe-dark-background shadow xl:block hidden">
                    <div className="mx-auto container px-6 py-2 xl:py-0">
                        <div className="flex items-center justify-between">
                            <div className="inset-y-0 left-0 flex items-center xl:hidden">
                                <div className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                    <div className="visible xl:hidden">
                                        <ul className="p-2 border-r bg-dark-background absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                                            <li className="flex xl:hidden cursor-pointer text-white text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">

                                            </li>
                                        </ul>
                                        <svg onclick="MenuHandler(this,true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    </div>
                                    <div className="hidden close-m-menu text-white" onclick="MenuHandler(this,false)">
                                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                                <div className="flex items-center">
                                    <div className="flex items-center w-20">
                                        <a className="cursor-pointer"  onClick={()=>{navigate("/")}}>
                                        <img src={PlannerXlogo} className="pt-6" alt="mockup" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                                    <a href="javascript: void(0)" className="flex px-5 items-center py-6 text-sm leading-5 text-white hover:bg-dark-background focus:outline-none transition duration-150 ease-in-out"  onClick={()=>{navigate("/")}}>
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                    <a href="javascript: void(0)" className="flex px-5 items-center py-6 text-sm leading-5 text-white hover:bg-dark-background focus:outline-none transition duration-150 ease-in-out"  onClick={()=>{navigate("/software")}}>
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                            </svg>
                                        </span>
                                        Software
                                    </a>
                                    <a href="javascript: void(0)" className="flex px-5 items-center py-6 text-sm leading-5 text-white hover:bg-dark-background focus:outline-none transition duration-150 ease-in-out"  onClick={()=>{navigate("/aboutUs")}}>
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                <circle cx={12} cy={12} r={9} />
                                            </svg>
                                        </span>
                                        About Us
                                    </a>
                                    <div className="flex flex-col mt-4">
                                        <a
                                            href="https://www.apple.com/app-store/"
                                            class="block md:inline-block text-center shadow-lg lg:ml-20 lg:mr-20  bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110"
                                        >
                                            <svg width="16px" height="16px" className="float-left hidden lg:block mr-2 mt-1" viewBox="0 0 256 315">
                                                <g>
                                                    <path
                                                        d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                                                        fill="#fff"
                                                    />
                                                </g>
                                            </svg>
                                            Download App
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav>
                    <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-dark-background fixed top-0 z-40">
                        <div className="w-24">
                            <div className="flex items-center w-20">
                                <a className="cursor-pointer"  onClick={()=>{navigate("/")}}>
                                <img src={PlannerXlogo} className="pt-6" alt="mockup" />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div id="menu" className="text-white" onClick={() => setShow(!show)}>
                                {show ? (
                                    ""
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={4} y1={6} x2={20} y2={6} />
                                        <line x1={4} y1={12} x2={20} y2={12} />
                                        <line x1={4} y1={18} x2={20} y2={18} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full xl:hidden h-full fixed z-40  transform  translate-x-0 " : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"}>
                        <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                        <div className="w-screen z-40 fixed overflow-y-auto z-40 top-0 right-0 bg-dark-background shadow h-full flex-col justify-between xl:hidden pb-6 transition duration-150 ease-in-out">
                            <div className="px-6 h-full">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div>
                                        <div className="mt-6 flex w-full items-center justify-between">
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center">
                                                    <div className="flex items-center w-20">
                                                        <img src={PlannerXlogo} className="pt-6" alt="mockup" />
                                                    </div>
                                                </div>
                                                <div id="cross" className="text-white" onClick={() => setShow(!show)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="f-m-m">
                                            <a className="cursor-pointer"  onClick={()=>{navigate("/")}}>
                                                <li className="text-white pt-10">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                                            </svg>
                                                        </div>
                                                        <p className="text-white xl:text-base md:text-2xl text-base ml-3">Home</p>
                                                    </div>
                                                </li>
                                            </a>
                                            <a className="cursor-pointer"  onClick={()=>{navigate("/software")}}>
                                                <li className="text-white pt-8">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                                </svg>
                                                            </div>
                                                            <p className="text-white xl:text-base md:text-2xl text-base ml-3">Software</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>
                                            <a className="cursor-pointer"  onClick={()=>{navigate("/aboutUs")}}>
                                                <li className="text-white pt-8">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                                <circle cx={12} cy={12} r={9} />
                                                            </svg>
                                                        </div>
                                                        <p className="text-white xl:text-base md:text-2xl text-base ml-3">About Us</p>
                                                    </div>
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                    

                                        <div className="mt-8 border-t border-gray-300">
                                            <div className="w-full items-center justify-between pt-6">
                                            
                                                <a
                                                    href="https://plannerx-software.netlify.app/"
                                                    class="w-42 block md:inline-block text-center shadow-lg bg-black hover:bg-gray-800 text-white font-bold py-2 px-10 rounded-full transition duration-500 ease-in-out transform hover:scale-110"
                                                    >
                                                    Download App
                                                </a>

                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Code block ends */}
            </div>
        </>
    );
}


