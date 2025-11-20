import { useState, useEffect } from "react";
import ClientCard from "./ClientCard";
import ClientForm from "./ClientForm";
import { fetchClients, createClient, updateClient, deleteClient } from "../lib/api";

export default function Home() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        (async()=>{
            try {
                setLoading(true);
                const data = await fetchClients();
                setClients(data);
            } catch (e) {
                setError(e.message);
            }
            finally{setLoading(false);}
        })();
    }, []);

    async function handleAdd(client) {
        const created = await createClient(client);
        setClients(prev=>[created, ...prev]);
    }

    async function handleEdit(st) {
        const updated = await updateClient(st._id, st)
        setClients(prev=> prev.map(x=>x._id === st._id ? updated : x));
    }

    async function handleDelete(id) {
        await deleteClient(id);
        setClients (prev => prev.filter(x=> x._id !== id));
    }

    return(
        <main>
            <ClientForm onSubmit={handleAdd} />
            {loading&& <p>Loading...</p>}
            {error&& <p className="text-red-600">{error}</p>}
            {clients.map(c=>
                <ClientCard key={c._id} client={c} onEdit={handleEdit} onDelete={handleDelete}/>
            )}
        </main>
    );
}