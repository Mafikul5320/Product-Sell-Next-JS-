import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-4">
      {/* Login Button */}
      <button
        onClick={() => signIn()}
        className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
      >
        Login
      </button>

      {/* Sign Up Button */}
      <button
        onClick={() => router.push("/register")} // redirect to signup page
        className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
      >
        Sign Up
      </button>
    </div>
  );
}
