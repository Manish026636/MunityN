import React from "react";
import { useState } from "react";


const Gslsec = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    function handleStartClick(index) {
        setActiveIndex(index);
    }

    return (
        <div className='container p-4 mx-auto   flex flex-col md:flex-row gap-4'>
            <div className="flex-1 md:flex-[3] rounded-lg bg-white">
                <div className='text-center'>
                    <h1 className='text-gray-800 text-xl font-bold mt-7'>Speakers</h1>
                </div>

                <div className=" mt-7 h-[50vh] hide-scrollbar  rounded-b-lg bg-light-blue-100 overflow-y-auto">
                    <div className=' p-4 '>
                        <div
                            className={`bg-[#F4f6f9]  my-2 h-16 rounded-xl ${activeIndex === 0 ? "bg-green-100 " : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(0)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <div
                            className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 1 ? "bg-green-100" : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(1)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <div
                            className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 2 ? "bg-green-100" : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(2)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <div
                            className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 3 ? "bg-green-100" : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(3)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <div
                            className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 4 ? "bg-green-100" : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(4)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <div
                            className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 5 ? "bg-green-100" : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(5)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <div
                            className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 6 ? "bg-green-100" : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(6)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <div
                            className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 7 ? "bg-green-100" : ""
                                }`}
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                        <th className="w-6 border-r-2 font-bold py-6">8</th>
                                        <th className="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" /></th>
                                        <th className="w-20 border-r-2">INDIA</th>

                                        <th className="w-16  border-r-2">Akash Yadav</th>
                                        <th className="w-20"><button className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl " onClick={() => handleStartClick(7)}>START</button></th>
                                    </tr>
                                </thead>
                            </table>

                        </div>



                    </div>
                </div>
            </div>

            <div className="flex-1  rounded-lg bg-white">
                <div className='text-center'>
                    <h1 className='text-gray-800 text-xl font-bold mt-7'>Deligate Info</h1>
                </div>
                <div className="p-4 py-5 mt-7 h-[50vh]  rounded-b-lg bg-light-blue-100">
                                
                </div>

            </div>
        </div>

    );
};

export default Gslsec;
