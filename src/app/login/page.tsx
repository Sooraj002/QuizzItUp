"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const password = event.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    const token = { email: email.value, password: password.value };
    localStorage.setItem("token", JSON.stringify(token));
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded h-32 w-64"
        type="button"
        onClick={() => router.push("/")}
      ></button>
    </div>
  );
}
