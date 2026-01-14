import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session, status } = useSession();
  if (status === "Loading") return null;

  return (
    <div>
      {session ? (
        <Button
          onClick={() => signOut()}
          className="bg-rose-600 hover:bg-rose-700"
        >
          Logout
        </Button>
      ) : (
        <Button
          onClick={() => signIn()}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          Sign In
        </Button>
      )}
    </div>
  );
};

export default AuthButton;
