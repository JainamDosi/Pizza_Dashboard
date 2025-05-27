import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#141414] text-white px-4">
      <div className="w-full max-w-screen-xl bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl border border-yellow-100/10 hover:scale-[1.02] transition-transform duration-300 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4 sm:gap-6">
        <p className="text-6xl sm:text-7xl">🍕</p>
        <h1
          className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-300 drop-shadow-md`}
        >
          Hello, {session.user?.name || "User"}!
        </h1>
      </div>

      <p
        className={`${montserrat.className} text-lg sm:text-xl md:text-2xl text-white mt-6 text-center`}
      >
        Baking the perfect analytics for you...
      </p>
    </div>
  );
}
