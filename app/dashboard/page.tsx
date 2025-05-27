import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Roboto, Montserrat } from 'next/font/google';
export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#141414] text-white px-4">
      <div className="flex flex-row items-center gap-x-6 bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-yellow-100/10 hover:scale-[1.02] transition-transform duration-300 max-w-3xl w-full">
        <p className="text-6xl sm:text-7xl">🍕</p>
        <h1
          className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-300 drop-shadow-md`}
        >
           Welcome, {session.user?.name}!
        </h1>
      </div>
    </div>
  );
}
