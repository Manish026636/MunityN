import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaPlus, FaUser, FaUsers, FaFlag, FaClock, FaHashtag } from "react-icons/fa";
import FeedbackMo from "./FeedbackMo";
import Gslsetting from "./Gslsetting";

function TimerButton() {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(1);
    const intervalRef = useRef(null);

    // start or resume timer
    function startTimer() {
        setIsPaused(false);
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    }

    // pause timer
    function pauseTimer() {
        setIsPaused(true);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    // reset timer

    // stop timer when component unmounts
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);



    return (
        <>

            <div className="flex justify-center items-center bg-white  mt-6 gap-[4px] space-x-3  py-3 w-full rounded-lg">
                <FaClock className="w-6 h-6 text-green-400" /><span>:</span>
                <span className="text-lg font-bold">{time}s</span>
                {isPaused ? (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={startTimer}
                    >
                        <FaPlay />
                    </button>
                ) : (
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={pauseTimer}
                    >
                        <FaPause />
                    </button>
                )}
            </div>
        </>
    );
}

const Gslsec = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    function handleStartClick(index) {
        setActiveIndex(index);
    }

    return (
        <>


            <div className='w-full flex flex-col items-center justify-center mt-5 p-2 sm:p-4 md:p-6 lg:p-8'>
                <div className='container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-full p-2'>
                        <div className='flex items-center flex-row w-full bg-blue-300 rounded-xl p-3'>
                        <div className='flex justify-center text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12'>
                                <FaUsers className="w-5 h-5" />

                            </div>
                            <div className='flex flex-col justify-around flex-grow ml-5 text-white'>
                                <div className='text-xs whitespace-nowrap'>
                                    Committee Name
                                </div>
                                <div className=''>
                                    Polaskaram
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-full p-2'>
                        <div className='flex items-center flex-row w-full bg-blue-500 rounded-xl p-3'>
                            <div className='flex justify-center text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12'>
                                <FaClock className="w-5 h-5" />

                            </div>
                            <div className='flex flex-col justify-around flex-grow ml-5 text-white'>
                                <div className='text-xs whitespace-nowrap'>
                                    Session Name
                                </div>
                                <div className=''>
                                    Change in World Order
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-full p-2'>
                        <div className='flex items-center flex-row w-full bg-blue-800 rounded-xl p-3'>
                            <div className='flex justify-center text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12'>
                                <FaHashtag className="w-5 h-5" />

                            </div>
                            <div className='flex flex-col justify-around flex-grow ml-5 text-white'>
                                <div className='text-xs whitespace-nowrap'>
                                    Session ID
                                </div>
                                <div className=''>
                                    4564
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="flex   justify-center items-center gap-[7px]">
                    <Gslsetting />
                    <div className="mt-6  md:mt-1 flex justify-center">
                        <div className=" flex items-center justify-center">
                            <button
                                type="button"

                                className="rounded-xl bg-indigo-400 bg-opacity-90  px-6 py-3 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <div className="flex items-center">
                                    <FaPlus className="mr-2" />
                                    <span>Add GSL</span>
                                </div>
                            </button>
                        </div>


                    </div>
                </div>
            </div>

            <div className="container p-4 mx-auto   flex flex-col md:flex-row gap-4">
                <div className="flex-1 md:flex-[3] rounded-xl bg-white">
                    <div className="text-center">
                        <h1 className="text-gray-800 text-xl font-bold mt-7">Speakers</h1>
                    </div>

                    <div className=" mt-7 h-[50vh] hide-scrollbar  rounded-b-lg bg-light-blue-100 overflow-y-auto">
                        <div className=" p-4 ">
                            <div
                                className={`bg-[#F4f6f9]  my-2 h-16 rounded-xl ${activeIndex === 0 ? "bg-green-100 " : ""
                                    }`}
                            >
                                <table className="w-full">
                                    <thead>
                                        <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                                            <th className="w-6 border-r-2 font-bold py-6">8</th>
                                            <th className="w-10 border-r-2">
                                                <img
                                                    className=" w-[4vh] md:w-[6vh] rounded mx-auto"
                                                    src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png"
                                                    alt=""
                                                />
                                            </th>
                                            <th className="w-20 border-r-2">INDIA</th>

                                            <th className="w-16  border-r-2">Akash Yadav</th>
                                            <th className="w-20">
                                                <button
                                                    className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl "
                                                    onClick={() => handleStartClick(0)}
                                                >
                                                    START
                                                </button>
                                            </th>
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
                                            <th className="w-10 border-r-2">
                                                <img
                                                    className=" w-[4vh] md:w-[6vh] rounded mx-auto"
                                                    src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png"
                                                    alt=""
                                                />
                                            </th>
                                            <th className="w-20 border-r-2">INDIA</th>

                                            <th className="w-16  border-r-2">Akash Yadav</th>
                                            <th className="w-20">
                                                <button
                                                    className="bg-[#45ADF8] text-white font-bold py-3 px-4 rounded-xl "
                                                    onClick={() => handleStartClick(1)}
                                                >
                                                    START
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 h-[30vh] rounded-xl bg-white">
                    <div className="text-center">
                        <h1 className="text-gray-800 text-xl font-bold mt-7">
                            Deligate Info
                        </h1>
                    </div>
                    <div className="p-4 py-5 mt-7 h-auto rounded-b-lg bg-light-blue-100">

                        <div className=" rounded overflow-hidden mx-auto  z-10 ">
                            <div className="flex justify-center">
                                <img
                                    className="object-cover rounded-xl w-1/2 h-full"
                                    src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png"
                                    alt=""
                                />
                            </div>

                            <div className="flex bg-white rounded-xl justify-center mt-6 items-center gap-[7px]">
                                <FaFlag className="w-4 h-5 text-red-500" />:
                                <h1 className="text-lg font-bold mt-4 text-gray-800 mb-4">Russia</h1> |
                                <FaUser className="w-4 h-5 text-blue-400" />:
                                <h1 className="text-lg font-bold mt-4 text-gray-800 mb-4">Akash Yadav</h1>

                            </div>
                        </div>
                        <div className="mt-2  flex justify-center">
                            <TimerButton />

                        </div>
                        <div className="mt-10 text-center  ">
                            <FeedbackMo />
                        </div>



                    </div>
                </div>
            </div>
        </>
    );
};

export default Gslsec;
