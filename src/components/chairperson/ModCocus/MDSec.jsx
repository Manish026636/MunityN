import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaPlus, FaUser, FaUsers, FaFlag, FaClock, FaHashtag } from "react-icons/fa";
import MODFeedbackMo from "../ModCocus/MODFeedbackMo";

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

            <div className="flex justify-center items-center bg-blue-200 mt-6 gap-[4px] space-x-3  py-3 w-full rounded-xl opacity-80">
                <FaClock className="w-6 h-6 text-red-600" /><span>:</span>
                <span className="text-lg font-bold">{time}s</span>
                {isPaused ? (
                    <button
                        className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
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
                        <div className='flex items-center flex-row w-full shadow-lg  bg-blue-300 rounded-xl p-3'>
                            <div className='flex justify-center text-blue-700 dark:text-white items-center bg-[#ffd92e] dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12'>
                                <FaUsers className="w-5 h-5" />

                            </div>
                            <div className='flex flex-col justify-around flex-grow ml-5 text-white'>
                                <div className='text-md whitespace-nowrap'>
                                    Committee Name
                                </div>
                                <div className=''>
                                    <h1 className="text-lg font-bold">Polaskaram</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full p-2'>
                        <div className='flex items-center shadow-lg  flex-row w-full bg-blue-500 rounded-xl p-3'>
                            <div className='flex justify-center text-blue-700 dark:text-white items-center bg-[#ffd92e] dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12'>
                                <FaClock className="w-5 h-5" />

                            </div>
                            <div className='flex flex-col justify-around flex-grow ml-5 text-white'>
                                <div className='text-md whitespace-nowrap'>
                                    Session Name
                                </div>
                                <div className=''>
                                    <h1 className="text-lg font-bold">Change in World Order</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full p-2'>
                        <div className='flex items-center shadow-lg  flex-row w-full bg-blue-800 rounded-xl p-3'>
                            <div className='flex justify-center text-blue-700 dark:text-white items-center bg-[#ffd92e] dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12'>
                                <FaHashtag className="w-5 h-5" />

                            </div>
                            <div className='flex flex-col justify-around flex-grow ml-5 text-white'>
                                <div className='text-md whitespace-nowrap'>
                                    Session ID
                                </div>
                                <div className=''>
                                    <h1 className="text-lg font-bold">4564</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="flex   justify-center items-center gap-[7px]">
                    <div className="mt-6  md:mt-1 flex justify-center">
                        <div className=" flex gap-4 items-center justify-center">
                            <button
                                type="button"

                                className="rounded-xl bg-blue-400 bg-opacity-90  px-6 py-3 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <div className="flex text- font-bold items-center">
                                    <FaPlus className="mr-2" />
                                    <span>Create MD ID</span>
                                </div>
                            </button>
                            <button
                                type="button"

                                className="rounded-xl bg-indigo-400 bg-opacity-90  px-6 py-3 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <div className="flex text- font-bold items-center">
                                    <FaPlus className="mr-2" />
                                    <span>Add MD</span>
                                </div>
                            </button>
                        </div>


                    </div>
                </div>
            </div>

            <div className="container p-4 mx-auto   flex flex-col md:flex-row gap-4">
                <div className="flex-1 shadow-lg z-10 md:flex-[3] rounded-xl bg-gradient-to-r from-yellow-700  to-yellow-400">
                    <div className="text-center">
                        <h1 className="text-white font-custom text-2xl leading-8 font-bold mt-7 transform scale-105">Speakers</h1>
                    </div>

                    <div className=" mt-7 h-[50vh] hide-scrollbar  rounded-b-lg bg-white overflow-y-auto">
                        <div className=" p-4 ">
                            <div
                                className={`bg-[#F4f6f9]  my-2 h-16 rounded-xl ${activeIndex === 0 ? "bg-cyan-100 " : ""
                                    }`}
                            >
                                <table className="w-full">
                                    <thead>
                                        <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-700">
                                            <th className="w-6 border-r-2 md:text-[2vh] font-bold py-6">1</th>
                                            <th className="w-10 border-r-2">
                                                <img
                                                    className=" w-[4vh] md:w-[6vh] rounded mx-auto"
                                                    src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png"
                                                    alt=""
                                                />
                                            </th>
                                            <th className="w-20   md:text-lg border-r-2">INDIA</th>

                                            <th className="w-16   md:text-lg border-r-2">Akash Yadav</th>
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
                                className={`bg-[#F4f6f9] my-2 h-16 rounded-xl ${activeIndex === 1 ? "bg-cyan-100 " : ""
                                    }`}
                            >
                                <table className="w-full">
                                    <thead>
                                        <tr className="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-700">
                                            <th className="w-6 border-r-2 md:text-[2vh] font-bold py-6">2</th>
                                            <th className="w-10 border-r-2">
                                                <img
                                                    className=" w-[4vh] md:w-[6vh] rounded mx-auto"
                                                    src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png"
                                                    alt=""
                                                />
                                            </th>
                                            <th className="w-20  md:text-lg border-r-2">INDIA</th>

                                            <th className="w-16  md:text-lg border-r-2">Akash Yadav</th>
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

                <div className="flex-1 h-[30vh] shadow-lg z-10 rounded-xl bg-gradient-to-r from-yellow-700  to-yellow-400">
                    <div className="text-center">
                        <h1 className="text-white font-custom text-2xl font-bold mt-7">
                            Deligate Info
                        </h1>
                    </div>
                    <div className="p-4 py-5 mt-7 h-auto rounded-b-xl  bg-white">

                        <div className=" rounded overflow-hidden mx-auto  z-10 ">
                            <div className="flex justify-center">
                                <img
                                    className="object-cover border-2 border-gray-300 rounded-xl w-1/2 h-full"
                                    src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png"
                                    alt=""
                                />
                            </div>

                            <div className="flex bg-blue-200  rounded-xl justify-center mt-6 items-center gap-[7px]">
                                <FaFlag className="w-4 h-5 text-red-500" />:
                                <h1 className="text-lg font-bold mt-4 text-white  mb-4">Russia</h1> |
                                <FaUser className="w-4 h-5 text-gray-800" />:
                                <h1 className="text-lg font-bold mt-4 text-white mb-4">Akash Yadav</h1>

                            </div>
                        </div>
                        <div className="mt-2  flex justify-center">
                            <TimerButton />

                        </div>
                        <div className="mt-10 text-center  ">
                            <MODFeedbackMo />
                        </div>



                    </div>
                </div>
            </div>

        </>
    );
};

export default Gslsec;
