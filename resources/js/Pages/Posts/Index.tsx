import { Link, router, usePage } from "@inertiajs/react"

// @ts-ignore
export function Index({ posts }) {
    const { flash } : any = usePage().props
    const handleDeletePost = (id : number) => {
        router.delete(route("posts.destroy", id))
    }

    return (
        <>
            <Link href={route("posts.create")}>Create new</Link>
            { flash.message && (
                <div className="bg-gray-500 rounded-full p-3">
                    {flash.message}
                </div>
            )}
            {
                posts && // if posts are found
                posts.map((post : any) => {
                    return <div key={post.id} className="p-5 my-5 border rounded-md shadow-sm text-left">
                        <Link
                            href={route("posts.show", post.id)}
                            // state={post}
                            className="text-xl underline hover:text-amber-600"
                        >
                            <strong>{post.title}</strong>
                        </Link>
                        <h2 className="text-sm"><strong>{post.author}</strong></h2>
                        <p>{post.body}</p>
                        <Link
                            href={route("posts.edit", post.id)}
                            // post={post}
                            className="p-3 my-4 rounded-md bg-gray-200 hover:bg-gray-400"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={()=> handleDeletePost(post.id)}
                            className="p-3 my-4 rounded-md bg-gray-200 hover:bg-gray-400"
                        >
                            Delete
                        </button>
                    </div>
                })
            }
        </>
    )
}
