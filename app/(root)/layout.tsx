import { isAuthenticated } from "@/lib/actions/auth.action";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const Rootlayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated) redirect("/sign-in");

    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="logo" width={38} height={3} />

                    <h2 className="text-primary-100">PrepWise</h2>
                </Link>
            </nav>

            {children}
        </div>
    );
};

export default Rootlayout;
