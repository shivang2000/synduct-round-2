"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword,  } from "firebase/auth";
import { useAuth } from "@/context/auth-context";
import { auth } from "@/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuth();
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const user = await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if(authContext.currentUser?.email){
      router.push('/')
    }
  },[authContext])
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col  gap-4 pb-2 ">
        <div>
          <label>Email: </label>
          <Input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-1.5 ">
          <Link className="text-blue-700 text-sm" href={"/forgot-password"}>
            Forgot password?
          </Link>
          <Link className="text-blue-700 text-sm" href={"/signup"}>
            Create an account!
          </Link>
        </div>
        <div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
