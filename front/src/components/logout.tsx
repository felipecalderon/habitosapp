"use client";
import { userStore } from "@/stores/user";
import { Button } from "@nextui-org/react";

export default function Logout() {
    const { logout } = userStore();
    return (
        <Button color="warning" onClick={() => logout()}>
            Cerrar sesión
        </Button>
    );
}
