import AuthLayout from "@/Layout/AuthLayout"
import FormLayout from "@/Layout/FormLayout"


function SignIn() {
  return (
    <AuthLayout>
      <FormLayout formType="sign-in"      />
    </AuthLayout>
  )
}

export default SignIn