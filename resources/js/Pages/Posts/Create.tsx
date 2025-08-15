import { Link, Head, useForm } from "@inertiajs/react"
import GuestLayout from '@/Layouts/GuestLayout'

function Create(){
    const { data, setData, post, processing, errors } = useForm({
        title: ""
    })
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        post(route("posts.store"))
    }

    return (
        <>
            <Head title="Create"/>
            <GuestLayout>
                <form onSubmit={handleSubmit}>
                    <h5 className="font-bold text-xl">Create</h5>
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
                        Save and post
                    </button>
                </form>
            </GuestLayout>
        </>
    )
}

export default Create
