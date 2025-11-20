import { useState } from "react";

export default function ClientCard({ client, onEdit, pnDelete}){
    const [edit, setEdit] = useState(false);
    const [draft, setDraft] = useState(client);


    return(
        <div className="rounded-xl border bg-white p-4 shadow-sm">
            {!edit?(
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Name: {client.name}</h3>
                        <p className="text-slate-600 text-sm">Email: {client.email}</p>
                        <p className="text-slate-600 text-sm">Age: {client.age}</p>
                        <p>Gender: {client.gender}</p>
                    </div>
                    <div className="flex gaap-2">
                        <button onClick={() => setEdit(true)} className="border px-3 py-1 rounded-lg text-sm">Edit</button>
                        <button onClick={()=> setDelete(client._id)} className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm">Del</button>
                    </div>
                </div>
            ):(
                <form>
                    <input
                    className="border rounded-lg px-3 py-1 w-full"
                    value={draft.name}
                    onChange={e=> setDraft({ ...draft, name:e.target.value})}/>
                    <input
                    className="border rounded-lg px-3 py-1 w-full"
                    value={draft.email}
                    onChange={e=> setDraft({ ...draft, email:e.target.value})}/>
                    <input
                    className="border rounded-lg px-3 py-1 w-full"
                    value={draft.age}
                    onChange={e=> setDraft({ ...draft, age:Number(e.target.value)})}/>
                    <input
                    className="border rounded-lg px-3 py-1 w-full"
                    value={draft.gender}
                    onChange={e=> setDraft({ ...draft, gender:e.target.value})}/>

                    <div>
                        <button className="by-green-600 text-white px-3 py-1 rounded-lg text-sm">Save</button>
                        <button type="button" onClick={()=>setEdit(false)} className="border px-3 py-1 rounded-lg text-sm">Cancel</button>
                    </div>
                </form>
            )}
        </div>
    );
}