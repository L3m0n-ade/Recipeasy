import { PropsWithChildren } from 'react';
import Navbar from "@/Components/Navbar";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar/>
            <div className="">
                {children}
            </div>
        </>
    );
}
