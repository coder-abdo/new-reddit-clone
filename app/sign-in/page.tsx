import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
export default function SignIn() {
  return (
    <main className="flex h-full w-full">
      <form className="w-96">
        <h1 className="text-zinc-800 text-2xl font-bold">Log In</h1>
        <p>
          By continuing, you are setting up a Reddit account and agree to our{" "}
          <Link href={"/user-agreement"}>User Agreement</Link> and{" "}
          <Link href={"/privacy-policy"}>Privacy Policy</Link>.
        </p>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <button>
          <FcGoogle />
          <span>continue with Google</span>
        </button>
        <button>
          <ImAppleinc />
          <span>continue with Apple</span>
        </button>
        <div className="divider">OR</div>
        <div className="input-group">
          <div>
            <input type="text" name="username" />
            <span>Username</span>
          </div>
          <div>
            <input type="password" name="password" />
            <span>Password</span>
          </div>
          <p>
            Forgot your <b>username</b> or <b>password</b>
          </p>
        </div>
        <button type="submit">log in</button>
      </form>
    </main>
  );
}
