import React from 'react'

const Contact = () => {
    return (
        <div>
            <div
                className='flex border rounded-md items-center font-ubuntu p-2 my-1 bg-white mx-1 cursor-pointer hover:bg-gray-100'
            >
                <div className='h-10 w-[12%] bg-yellow-500 rounded-full'></div>
                <div className='flex justify-between w-[80%] ml-2'>
                    <div className=''>
                        <p className='text-[20px]'>Abhinav Kumar</p>
                        <p className='text-[12px] text-gray-500 font-thin'>Hello,This is the API key...</p>
                    </div>
                    <div className='w-16 flex items-center'>
                        <p className='text-[10px] '>11:42 pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact