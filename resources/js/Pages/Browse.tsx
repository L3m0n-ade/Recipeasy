import {Head} from "@inertiajs/react";
import GuestLayout from '@/Layouts/GuestLayout';
import { Index as Posts } from "../Pages/Posts/Index";

// @ts-ignore
function Browse({ posts }){

    return (
        <>
            <Head title="Browse" />
            <GuestLayout>
                <p>Browse recipes</p>
                <Posts posts={posts} />
            </GuestLayout>
        </>
    )
}

export default Browse
