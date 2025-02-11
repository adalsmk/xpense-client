"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChildren?: boolean;
}


export const LoginButton = ({ children, mode = "redirect", asChildren }: LoginButtonProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
}