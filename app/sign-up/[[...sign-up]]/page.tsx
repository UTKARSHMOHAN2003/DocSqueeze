import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-zinc-900">
      <div className="w-full max-w-sm p-4">
        <SignUp />
      </div>
    </div>
  );
}
