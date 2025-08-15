import GuestLayout from '@/Layouts/GuestLayout';
import {Head} from "@inertiajs/react";

function Feedback(){


    return (
        <>
            <Head title="Feedback" />
            <GuestLayout>
                <p>Send feedback</p>
                <textarea maxLength={512}></textarea>
            </GuestLayout>
        </>
    )
}

export default Feedback
