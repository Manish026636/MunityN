import React from 'react'
import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";

const QuestionForm = () => {
    return (
        <>
             <div className='container mx-auto flex justify-center  mt-2 md:mt-4 '>
                <div className='bg-white  mx-3  justify-center mt-12 h-auto py-10 text-center rounded-2xl w-full md:w-5/12   '>
                    <div className="flex justify-center items-center ">
                        <Card color="transparent" shadow={false}>
                            <Typography variant="h5" className="mt-10 text-gray-500">
                            Enter the required details
                            </Typography>
                            
                            <form className="mt-8 mb-2 w-80 md:w-60 max-w-screen-lg sm:w-96">
                                <div className="mb-4  flex flex-col gap-6">
                                    <Input size="md"     label="Enter the Topic name......." />
                                    <Input type="number" size="md"  label="Set the time for Discussion......" />
                                    <Input type="number"  size="md" label="Enter the number of speakers...." />
                                </div>
                                
                                <button class="mt-2 bg-[#6EB6F9] hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-2 rounded-xl w-40 md:w-40">Submit</button>

                                
                            </form>
                        </Card>
                    </div>
                </div>
          </div>
        </>
    )
}

export default QuestionForm