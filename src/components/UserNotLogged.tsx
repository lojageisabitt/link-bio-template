import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function UserNotLogged(){
    return (
        <Card className="flex justify-center p-20 border-0">
            <CardHeader className="bg-accent rounded">
                <CardTitle className="p-4">Você não está logado</CardTitle>
                    <CardDescription className="flex justify-center p-4">
                        <Link className="bg-popover hover:bg-secondary font-bold py-2 px-4 rounded" href="auth/signin">
                            <span>Login</span>
                        </Link>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}