import { signIn, signOut, useSession } from "next-auth/react";

export default function ClientSideAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (session) {
    return (
      <>
        You have logged in {session.user?.name}{" "}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not Logged In <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
