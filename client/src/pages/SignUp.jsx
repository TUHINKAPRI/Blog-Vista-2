import AuthLayout from "@/Layout/AuthLayout";
import SmallLoading from "@/components/Loading/SmallLoading";
import { Input } from "@/components/ui/input";
import { setSignupData } from "@/redux/slices/authSlice";
import { send_otp } from "@/services/operations/authOperation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      re_password: "",
    },
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: send_otp,
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      navigate("/send-otp");
    },
    onError: (data) => {
      toast.error(data?.data?.message);
    },
  });
  const formSubmit = (data) => {
    const { password, re_password } = data;
    if (password !== re_password) {
      toast.error("password not match");
    }
    dispatch(setSignupData(data));
    mutate(data);
  };
  return (
    <AuthLayout>
      <div className="flex justify-center items-center h-screen   ">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="w-[361px] h-[505px] text-gray font-semibold flex flex-col gap-2"
        >
          <div>
            <label className="">Name</label>
            <Input
              type="text"
              className="!ring-0 mt-2 border-gray h-12 rounded-lg "
              placeholder="Enter name"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <label className="mb-[12px]">Email</label>
            <Input
              type="email"
              className="!ring-0 mt-2 border-gray h-12 rounded-lg "
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className="mb-[12px]">Password</label>
            <Input
              type="password"
              className="!ring-0 mt-2 border-gray  h-12 rounded-lg"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
          </div>

          <div>
            <label className="mb-[12px]">Re-password</label>
            <Input
              type="password"
              className="!ring-0 mt-2 border-gray h-12  rounded-lg "
              placeholder="Enter re-password"
              {...register("re_password", { required: true })}
            />
          </div>

          <div className="font-semibold mt-3 text-lightblue">
            <p>Forgot password?</p>
          </div>
          <button
            disabled={isPending ? true : false}
            className="w-full rounded-lg  flex justify-center  py-3 bg-lightblue text-white "
          >
            {isPending ? (
              <>
                <SmallLoading />
              </>
            ) : (
              <>Sign-up</>
            )}
          </button>
          <div className="flex justify-between">
            <p>You have an account?</p>
            <Link className="text-lightblue  font-semibold" to="/sign-in">
              sign-in
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
