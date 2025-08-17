import React from "react";
import { LoginForm } from "../component/LoginForm";
import { AuthLayout } from "../../../shared/copmonents/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};
