'use client'

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.elements.namedItem("email") as HTMLInputElement;
    const password = event.currentTarget.elements.namedItem("password") as HTMLInputElement;
    const token = { email: email.value, password: password.value };
    localStorage.setItem("token", JSON.stringify(token));
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Login</h1>
      <form className="flex flex-col w-96 mt-10" onSubmit={handleSubmit}>
        <label className="text-xl" htmlFor="email">
          Email
        </label>
        <input className="border-2 p-2" type="email" id="email" name="email" />
        <label className="text-xl" htmlFor="password">
          Password
        </label>
        <input
          className="border-2 p-2"
          type="password"
          id="password"
          name="password"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}


