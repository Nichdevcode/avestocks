"use client"
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContextAuthHOC(
    ProtectedComponent: React.FC<any>,
) {
    return function AuthComp(props: any) {

        const session = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            if (!session?.isLoggedIn) {
                router.push("/login");
            }
        }, [session?.isLoggedIn, router]);
        
        return <ProtectedComponent session={session} {...props} />;
    };
}