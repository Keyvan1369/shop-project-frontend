import { AuthFooter } from "./AuthFooter";
import { AuthHeader } from "./AuthHeader";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <div>{children}</div>
      <AuthFooter />
    </>
  );
};
