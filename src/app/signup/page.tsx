"use client"

import SignUpForm from "@/components/SignUpForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SingUp = () => {
  return (
    <div>
      <Card className="min-w-[360px]">
        <CardHeader>
          <CardTitle className="text-center">Sign up to AI Chat</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <SignUpForm />

          {/* <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border py-2">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <div className="flex flex-row justify-between content-center justify-items-center  ">
            <div className="grow justify-self-center ">Google</div>
            <div className="grow justify-self-center ">Microsoft</div>
            <div className="grow justify-self-center ">Github</div>

          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default SingUp;
