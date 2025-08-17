import React from "react";
import { SignupForm } from "../component/signupForm";
import { AuthLayout } from "../../../shared/copmonents/AuthLayout";

export const SignupPage = () => {
  return (
    <>
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
    
    </>
  )
};
