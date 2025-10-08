import { Link } from "@inertiajs/react";

function Navbar(){


    return (
        <nav className="navbar">
            <ul className="flex justify-between">
                <div id="left" className="">
                    <li>
                        <Link href={route("home")}>Home</Link>
                    </li>
                </div>
                <div id="right" className="flex gap-3">
                    <li>
                        <Link href={route("browse")}>Browse</Link>
                    </li>
                    <li>
                        <Link href={route("feedback")}>Feedback</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
