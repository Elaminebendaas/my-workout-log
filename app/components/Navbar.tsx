import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar(){
    const { data } = useSession()
    const pathName = usePathname()
    
    if(data){
        return(
            <>
            
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center">
                            {/* <img src="/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Workout Log</span>
                        </Link>
                        <div className="flex md:order-2">
                            <Button type="button"  onClick={() => {signOut()}}>Sign Out</Button>
                            <Button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </Button>
                        </div>
                        <div className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 items-center mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    {
                                        pathName === '/home' ?
                                        <Link href="/home" className="block py-2 pl-3 pr-4 rounded text-blue-700 font-semibold" >Home</Link>
                                        :
                                        <Link href="/home" className="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" >Home</Link>
                                    }
                                    
                                </li>
                                <li>
                                    {pathName === '/exercises' ?
                                    <Link href="/exercises" className="block py-2 pl-3 pr-4 rounded text-blue-700  font-semibold">Excercises</Link>
                                    :
                                    <Link href="/exercises" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Excercises</Link>
                                    }
                                    
                                </li>
                                <li>
                                    {pathName === '/workouts' ?
                                    <Link href="/workouts" className="block py-2 pl-3 pr-4 rounded text-blue-700  font-semibold ">Workouts</Link>
                                    :
                                    <Link href="/workouts" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Workouts</Link>
                                }
                                    
                                </li>
                                <li>
                                {pathName === '/cardio' ? 
                                <Link href="/cardio" className="block py-2 pl-3 pr-4 rounded text-blue-700  font-semibold ">Cardio</Link>
                                : 
                                <Link href="/cardio" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Cardio</Link>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }else{
        return(
            <>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center">
                            {/* <img src="/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Workout Log</span>
                        </Link>
                        <div className="flex md:order-2">
                            <Button type="button" onClick={() => signIn('google')}>Sign In</Button>
                            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link href="/home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }





}