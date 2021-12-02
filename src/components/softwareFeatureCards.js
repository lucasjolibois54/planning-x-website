import React, { useState } from "react";

import Vector from "../images/Vector.png";

function MyApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="bg-maybe-dark-background">
                <div className="container mx-auto">
                    <div role="article" className="bg-maybe-dark-background py-12 md:px-8">
                        
                        <div className="px-62 xl:px-0">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-20">
                                <div role="cell" className="bg-white border rounded-3xl">
                                    <div className="bg-white p-5 border rounded-3xl relative h-full w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <div className="flex">
                                        <img src={Vector} className="pt-6 w-14" alt="mockup" />
                                        
                                        <h1 className="pb-4 mt-5 text-2xl font-semibold ">User centered</h1></div>
                                        <div className="my-5">
                                            <div className="flex items-center dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">We have created a convenient social network. Here you can communicatewith your family members, set tasks for them, propose events, plan weekends and holidays.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="cell" className="bg-white border rounded-3xl">
                                    <div className="bg-white p-5 border rounded-3xl relative h-full w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                        <img src={Vector} className="pt-6 w-14" alt="mockup" />
                                        </span>
                                        <h1 className="pb-4 mt-5 text-2xl font-semibold">User centered</h1>
                                        <div className="my-5">
                                            <div className="flex items-center dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">We have created a convenient social network. Here you can communicatewith your family members, set tasks for them, propose events, plan weekends and holidays.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="cell" className="bg-white border rounded-3xl">
                                    <div className="bg-white p-5 border rounded-3xl relative h-full w-full">
                                        {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                        <img src={Vector} className="pt-6 w-14" alt="mockup" />
                                        </span>
                                        <h1 className="pb-4 mt-5 text-2xl font-semibold">User centered</h1>
                                        <div className="my-5">
                                            <div className="flex items-center dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">We have created a convenient social network. Here you can communicatewith your family members, set tasks for them, propose events, plan weekends and holidays.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyApp;