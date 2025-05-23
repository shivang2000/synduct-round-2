"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";
import { auth } from "@/firebase";
import { sendEmailVerification, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const VerifyEmail = () => {
  const authContext = useAuth();

  const handleResentEmailVerification = () => {
    if (authContext.currentUser) {
      sendEmailVerification(authContext.currentUser)
        .then(() => {})
        .catch((err) => console.error(err));
    }
  };
  const router = useRouter();
  const logout = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (authContext.currentUser?.email) {
      if (authContext.currentUser.emailVerified) {
        router.push("/");
      } else {
        router.push("/verify-email");
      }
    }
  }, [authContext, router]);
  return (
    <div>
      <Card className="min-w-[360px]">
        <CardHeader>
          <CardTitle className="text-center">
            Please Verify via email.
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="w-full mx-auto flex gap-4 justify-center items-center ">
            <Button
              onClick={handleResentEmailVerification}
              className="text-center"
            >
              Resend
            </Button>
            <Button onClick={logout} className="text-center">
              Log out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail;
