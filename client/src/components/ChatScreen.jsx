import Contact from "./Contact"

const ChatScreen = () => {
    return (
        <div>
            <div className="h-screen w-full flex">
                <div className="w-1/4 bg-green-500 h-full">
                    <Contact />
                </div>
                <div className="w-3/4 h-full flex flex-col px-2">
                    <div className="h-[90%] border my-2 rounded-md p-1">
                        <div className="flex-start">
                            <div
                                className="flex border w-fit max-w-[50%] m-1 px-2 py-1 bg-blue-500 text-white rounded-sm"
                            >
                                <p>Hello,How are you?</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div
                                className="flex border w-fit max-w-[50%] m-1 px-2 py-1 bg-gray-400 text-white rounded-sm justify-end"
                            >
                                <p>Hi Kushi,thanks for asking I am good what about you</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-auto">
                        <div className="flex text-blue-500 h-10 items-center">
                            <div className="w-full border h-10 mr-2">
                                <input className="w-full h-full border-none outline-none px-2" type="text" placeholder="Enter a message" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatScreen