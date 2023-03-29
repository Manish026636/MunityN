import React from 'react'
const MainTab = () => {
    return (
        <>
            <div className='container mx-auto flex justify-center mt-2 md:mt-4 '>
                <div className='bg-gradient-to-r from-cyan-200 to-indigo-100 grid grid-cols-3 md:grid-cols-3 gap-4 container mx-3  justify-center mt-12 h-16 rounded-2xl w-full md:w-1/2 '>
                    <div class="flex items-center justify-center m-2 ">
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-xl w-24 md:w-40">GSL</button>
                    </div><div class="flex items-center justify-center">
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-xl w-24 md:w-40">MD</button>
                    </div><div class="flex items-center justify-center m-2">
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-xl w-24 md:w-40">UNMD</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default MainTab