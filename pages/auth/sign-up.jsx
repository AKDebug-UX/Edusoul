import { useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/Components/ui/Button";
import Loader from "@/Components/ui/Loader";
import { toast } from "react-toastify";

const SignupForm = () => {
  const navigate = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN UP
 

  return (
    <>
      <div className="flex w-full sm:w-[60%] h-screen mx-auto mt-4 md:mt-1 pb-[5em] p-3 md:overflow-y-auto justify-center items-center flex-col">
        {/* <img src="/assets/images/logo.svg" alt="logo" /> */}

        <h2 className="text-[30px] text-white font-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className="text-primary_A2 small-medium md:base-regular mt-2">
          To use SquareMax, Please enter your details
        </p>

        <div className="flex flex-col gap-5 w-full mt-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Akorede Salaudeen"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="akorede123"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="......54@gmail.com"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="shad-input w-full px-3 mt-2 rounded-md"
              required
            />
          </div>

          <Button
            type="submit"
            // onClick={createUserAccount}
            className="bg-primary_A1 text-white p-3 rounded-md"
          >
            {isLoading ? (
              <div className="flex gap-3 justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              href="/sign-in"
              className="text-primary_A2 text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
