import AuthLayout from "@/Layout/AuthLayout";
import FormLayout from "@/Layout/FormLayout";

function SignUp() {
  return (
    <AuthLayout>
      <FormLayout  formType="sign-up"  />
    </AuthLayout>
  );
}

export default SignUp;
