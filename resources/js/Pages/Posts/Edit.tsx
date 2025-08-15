import {Head, useForm} from "@inertiajs/react";
import GuestLayout from '@/Layouts/GuestLayout';

// @ts-ignore
function Edit({ post }){
    const { data, setData, put, processing, errors } = useForm({
        title: post.title || ""
    })

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        put(route("posts.update", post.id))
    }

    return (
        <>
            <Head title="Edit"/>
            <GuestLayout>
                <form onSubmit={handleSubmit}>
                    <h5 className="font-bold text-xl">Update</h5>
                    <label>
                        Title
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e)=>setData("title", e.target.value)}
                            className="block rounded-md border-1 w-full"
                        />
                    </label>
                    {/*<label>*/}
                    {/*    Body*/}
                    {/*    <textarea*/}
                    {/*        value={body}*/}
                    {/*        onChange={(e)=>setBody(e.target.value)}*/}
                    {/*        className="block rounded-md border-1 w-full"*/}
                    {/*    />*/}
                    {/*</label>*/}
                    <button
                        type="submit"
                        disabled={processing}
                        className="p-3 my-4 rounded-md bg-gray-200 hover:bg-gray-400"
                    >
                        Update
                    </button>
                </form>
            </GuestLayout>
        </>
    )
}

export default Edit
