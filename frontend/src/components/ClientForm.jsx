import { useState } from "react";

export default function ClientForm({ onSubmit }){
    const [form, setForm] = useState({name:"", email:"", age:"", gender:""});

    const handleChange = e  =>{
        const {name,value}= e.target;
        setForm(f => ({...f, [name]:value }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!form.name || !form.email || !form.age || !form.gender) return;

        onSubmit({...form, age:Number(form.age)});
        setForm({name:"", email:"", age:"", gender:""});
    }
    return(
        <form onSubmit={handleSubmit} className="rounded-xl border bg-white p-4 flex flex-wrap gap-4">
            <input 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                placeholder="Name"
                className="border rounded-lg px-3 py-2 flex-1"/>
            <br></br>
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded-lg px-3 py-2 flex-1"/>
            <br></br>
            <input 
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
                className="border rounded-lg px-3 py-2 w-24"/>
            <br></br>
            <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === "male"}
                    onChange={handleChange}/>
                <span>Male</span>
            </label>
            <br></br>
            <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === "female"}
                    onChange={handleChange}/>
                <span>Female</span>
            </label>
            <br></br>
            <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={form.gender === "other"}
                    onChange={handleChange}/>
                <span>Other</span>
            </label>
            <br></br>
            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Add</button>
        </form>
    );
}