import React from 'react'

const DGMotion = () => {
  return (
    <>
    <div className='flex justify-center'>
                <div className=' mt-20 bg-white  h-72 md:h-80 text-center    w-10/12 md:w-[60vh] rounded-2xl'>
                    <h1 className="m-8 mt-20 font-istok text-gray-600 font-bold text-lg md:text-xl">
                        Do you  have any motions on the floor ?
                    </h1>
                    <div className='mt-12 md:mt-[11vh]'>
                    <button class="bg-[#6ED366] hover:bg-blue-700 hover:text-white text-white font-bold py-4 px-4 rounded-xl mr-5 md:mr-20 w-24 md:w-24">YES</button>
                    <button class="bg-[#EC4F4F] hover:bg-blue-700 hover:text-white text-white font-bold py-4 px-4 rounded-xl w-24 md:w-24">NO</button>

                    </div>
                </div>
            </div>
            </>
  )
}

export default DGMotion