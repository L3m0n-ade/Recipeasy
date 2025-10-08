import { Link, router, usePage } from "@inertiajs/react"

// @ts-ignore
export function Index({ posts }) {
    const { flash } : any = usePage().props
    const handleDeletePost = (id : number) => {
        router.delete(route("posts.destroy", id))
    }

    return (
        <>
            <div className="flex justify-end">
                <Link href={route("posts.create")} className="btn b-primary">Create new</Link>
            </div>
            { flash.message && (
                <div className="bg-gray-500 rounded-full p-3">
                    {flash.message}
                </div>
            )}
            {
                posts && // if posts are found
                posts.map((post : any) => {
                    return <div key={post.id} className="card">
                        <Link
                            href={route("posts.show", post.id)}
                            // state={post}
                            className="text-xl hover:underline hover:text-amber-600"
                        >
                            <strong>{post.title}</strong>
                        </Link>
                        <h2 className="text-sm"><strong>{post.author}</strong></h2>
                        <p>{post.body}</p>
                        <div className="flex gap-2">
                            <Link
                                href={route("posts.edit", post.id)}
                                // post={post}
                                className="btn"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={()=> handleDeletePost(post.id)}
                                className=""
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                })
            }
        </>
    )
}
