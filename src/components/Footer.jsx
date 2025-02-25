import { NavLink } from "react-router-dom"

export default function Footer() {
    
    return (
        <>
            <div className="container mx-auto mt-10 vb w-full">
                <footer className="py-4 flex flex-col ">
                    <ul className="flex justify-center border-b py-4 rounded-lg bg-gray-200 border-gray-300 pb-3 mb-3">
                        <li className="nav-item mx-2"><NavLink to="/" >Home</NavLink></li>
                        <li className="nav-item mx-2"><NavLink to="/search" >Search</NavLink></li>
                        <li className="nav-item mx-2"><NavLink to={'/upcoming'} >Upcoming</NavLink></li>
                        <li className="nav-item mx-2"><NavLink to={'/popular'} >Popular</NavLink></li>
                        <li className="nav-item mx-2"><NavLink to={"/about"} >About</NavLink></li>
                    </ul>
                    <p className="text-center text-gray-600">© 2024 jaykumar2dear@gmail.com</p>
                </footer>
            </div>

        </>
    )
}
