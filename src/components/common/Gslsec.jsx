import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import FeedbackMo from "./FeedbackMo";

function TimerButton() {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(1);
    const intervalRef = useRef(null);

    // start or resume timer
    function startTimer() {
        setIsPaused(false);
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
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
        <div className="flex items-center bg-[#ddeaff] space-x-3  py-5 px-4 rounded-lg">
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
    );
}

const Gslsec = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    function handleStartClick(index) {
        setActiveIndex(index);
    }


    return (
        <>
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
                            



                        </div>
                    </div>
                </div>

                <div className="flex-1   rounded-lg bg-white">
                    <div className='text-center'>
                        <h1 className='text-gray-800 text-xl font-bold mt-7'>Deligate Info</h1>
                    </div>
                    <div className="p-4 py-5 mt-7 h-[50vh]  rounded-b-lg bg-light-blue-100">
                        <div className=" mt-6 flex items-center justify-center grid-cols-2  gap-1 md:gap-4">
                            <div className="bg-white rounded-lg w-28 h-28 ">
                                <div className="text-sm font-bold text-center">
                                    <h2 className='py-3'>Harsh Gurche</h2>
                                    <TimerButton />
                                </div>
                            </div>
                            <div className="bg-[#ddeaff] text-sm font-bold text-center rounded-lg w-28 h-28 overflow-hidden">
                                <img className="object-cover rounded-t-xl w-full h-full" src="https://cdn.pixabay.com/photo/2013/07/13/14/17/russia-162400_960_720.png" alt="" />
                            </div>
                        </div>

                        <div className="mt-10 text-center  ">
                            <FeedbackMo />
                        </div>
                        <div className='mt-10 text-center'>
                            <button className="bg-blue-300 text-white font-bold py-2 px-4 rounded-lg">Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Gslsec;