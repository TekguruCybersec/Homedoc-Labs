const API = import.meta.env.VITE_API_URL || '';

export async function fetchClients(){
    const res = await fetch(`${API}/clients`);
    if(!res.ok) throw new Error("Failed to fetch");
    return res.json();
}

export async function createClient(payload){
    const res = await fetch(`${API}/clients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if(!res.ok) throw new Error('Failed to create client');
    return res.json();
}

export async function updateClient(id, payload){
    const res = await fetch(`${API}/clients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if(!res.ok) throw new Error('Failed to update client');
    return res.json();
}

export async function deleteClient(id){
    const res = await fetch(`${API}/clients/${id}`, { method: 'DELETE' });
    if(!res.ok) throw new Error('Failed to delete client');
    return res.json();
}