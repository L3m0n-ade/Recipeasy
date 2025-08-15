import GuestLayout from '@/Layouts/GuestLayout';
import {Head} from "@inertiajs/react";

function Home(){


    return (
        <>
            <Head title="Home" />
            <GuestLayout>
                <p className="font-bold">Home :)</p>
            </GuestLayout>
        </>
    )
}

export default Home
