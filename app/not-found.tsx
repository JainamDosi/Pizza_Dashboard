import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function NotFound() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[#141414] px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-sm sm:text-base mb-2">
                You seem to have discovered a secret dimension...
            </p>
            <p className="text-sm sm:text-base mb-6">
                Grab your slice 🍕 and  hit the  !!
            </p>
            <Link href="/login">
                <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-md">
                    Go to Login
                </button>
            </Link>
        </div>
    );
}