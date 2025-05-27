'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { Roboto, Montserrat } from 'next/font/google';
export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Login() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-[#141414] px-4 text-center">
      <Image
        src="/pizza.png"
        alt="Pizza"
        width={550}
        height={550}
        className="w-52 lg:w-72 h-auto mb-2"
        priority
      />

      <div className="flex flex-col items-center gap-8 max-w-full">
        <h1
          className={`${montserrat.className} p-2 text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-300 drop-shadow-lg`}
        >
          Welcome to <b>CrustLab</b>
        </h1>

        <button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="px-6 py-3 mt-2 text-lg rounded-2xl 
                    bg-black/30 border-2 border-white/20 text-white 
                    backdrop-blur-md shadow-xl 
                    hover:bg-black/50 hover:border-yellow-300 
                    hover:text-yellow-100 transition-all duration-300 
                    hover:shadow-2xl"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
