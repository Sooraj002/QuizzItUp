'use client';
import { signIn, useSession } from 'next-auth/react';
// import Router from 'next/router';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const { data } = useSession();
    // const { data: session } = useSession();
    if (data) {
        router.push('/home');
    }
    return (

        <div className="flex flex-col items-center justify-center space-y-4 h-screen bg-black">
            <div className='flex flex-col items-center justify-center space-y-4'>
                <p className="text-center text-lg">You are not logged in.</p>
                <button
                    className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => signIn('github')}
                >
                    Login with GitHub
                </button>
                <button
                    className="bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    // onClick={() => signIn('google')}
                    disabled
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
}

