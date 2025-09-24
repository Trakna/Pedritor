import { UserRegisterForm } from "../components/user-register-form/user-register-form";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#f5f8fc] to-white">
      <UserRegisterForm />
    </main>
  );
}