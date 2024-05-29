"use client";
import { userStore } from "@/stores/user";
import { Button, Input } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
export default function Login() {
    const { user, setUser } = userStore();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/one/?email=${form.email}`);
        const parseFetch = await fetchData.json();
        if (!parseFetch.data) {
            toast(parseFetch.message);
        } else {
            setUser(parseFetch.data); // poner info en store
        }
    };

    useEffect(() => {
        console.log({ user });
    }, [user]);
    return (
        <div>
            <Toaster position="top-center" />
            <form onSubmit={handleSubmitForm}>
                <Input type="email" name="email" onChange={handleInputChange} />
                <Input type="password" name="password" onChange={handleInputChange} />
                <Button type="submit" color="secondary">
                    Ingresar
                </Button>
            </form>
        </div>
    );
}
