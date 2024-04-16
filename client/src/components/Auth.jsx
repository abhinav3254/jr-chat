import { useState } from "react"

const Auth = () => {

    const [loginPage, setLoginPage] = useState(true);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="w-full h-screen flex justify-center items-center font-ubuntu">
            {/* signup */}
            {!loginPage && (
                <div className="flex flex-col w-1/5">
                    <div className="flex items-center border rounded-md p-2 my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="border-none outline-none px-2 py-1 w-full" type="text" placeholder="Name" />
                    </div>
                    <div className="flex items-center border rounded-md p-2 my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="border-none outline-none px-2 py-1 w-full" type="text" placeholder="Username" />
                    </div>
                    <div className="flex items-center border rounded-md p-2 my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="border-none outline-none px-2 py-1 w-full" type="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-col items-center my-1 text-[10px]">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-sm">Register</button>
                        <p>Already have an account? <span className="text-blue-500 cursor-pointer my-2"
                            onClick={() => setLoginPage(true)}
                        >login</span> </p>
                    </div>
                </div>
            )}
            {/* login */}
            {loginPage && (
                <div className="flex flex-col w-1/5">
                    <div className="flex items-center border rounded-md p-2 my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="border-none outline-none px-2 py-1 w-full" type="text" placeholder="Username" />
                    </div>
                    <div className="flex items-center border rounded-md p-2 my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="border-none outline-none px-2 py-1 w-full" type="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-col items-center my-1 text-[10px]">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-sm">Register</button>
                        <p>Don't have an account? <span className="text-blue-500 cursor-pointer my-2"
                            onClick={() => setLoginPage(false)}
                        >Signup</span> </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Auth