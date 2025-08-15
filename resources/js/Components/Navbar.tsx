import { Link } from "@inertiajs/react";

function Navbar(){


    return (
        <nav className="pb-3 mb-3 border-b">
            <ul className="flex justify-end space-x-5">
                <li>
                    <Link href={route("home")}>Home</Link>
                </li>
                <li>
                    <Link href={route("browse")}>Browse</Link>
                </li>
                <li>
                    <Link href={route("feedback")}>Feedback</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
