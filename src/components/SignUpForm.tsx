"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

const SignUpForm = () => {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: ""
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: `${formdata.firstName} ${formdata.lastName}`,
          photoURL: formdata.photo ? formdata.photo : undefined
        })
          .then((updateProfileres) => {})
          .catch((err) => console.error(err));

        router.push("/verify-email");
      })
      .catch((err) => console.error(err));
  };

  const authContext = useAuth();
  useEffect(() => {
    if(authContext.currentUser?.email){
      router.push('/')
    }
  },[authContext])
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col  gap-4 pb-2 ">
        <div className="flex flex-row gap-4">
          <div>
            <label>First Name: </label>
            <Input
              type="text"
              placeholder="Enter your First Name"
              value={formdata.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <label>Last Name: </label>
            <Input
              type="text"
              placeholder="Enter your Last Name"
              value={formdata.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label>Email: </label>
          <Input
            type="email"
            placeholder="Enter your Email"
            value={formdata.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div>
          <label>Password: </label>
          <Input
            type="password"
            placeholder="Enter your Password"
            value={formdata.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <Input
            type="password"
            placeholder=" Enter your Confirm Password"
            value={formdata.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
          />
        </div>

        <div>
          <Button type="submit" className="w-full">
            Create An Account
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
