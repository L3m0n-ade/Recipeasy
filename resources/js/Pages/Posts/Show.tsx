import {Head, Link} from "@inertiajs/react";
import GuestLayout from '@/Layouts/GuestLayout';

// @ts-ignore
function Show({ post }){

    return (
        <>
            <Head title={post.title}/>
            <GuestLayout>
                <Link href={route("browse")}>Browse all</Link>
                <h5><strong>{post.title}</strong></h5>
                {/*<h5><strong>{post.author}</strong></h5>*/}
                <p className="text-gray-500 text-sm">Created on {new Date(post.created_at).toDateString()}</p>
                {/*<p>{post.body}</p>*/}
            </GuestLayout>
        </>
    )
}

export default Show
