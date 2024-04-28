import AuthLayout from "@/Layout/AuthLayout";
import SmallLoading from "@/components/Loading/SmallLoading";
import { Input } from "@/components/ui/input";
import { setBookmarkData } from "@/redux/slices/bookmarkSlice";
import { setProfileValue } from "@/redux/slices/profileSlice";
import { sign_in } from "@/services/operations/authOperation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
const { register,
  handleSubmit,}=useForm()
  const {mutate,isPending}=useMutation({
    mutationFn:sign_in,
    onSuccess:(data)=>{
      toast.success(data?.message)
      dispatch(setProfileValue(data))
      dispatch(setBookmarkData(data))
      navigate('/')
    },
    onError:(err)=>{
      if(err?.data?.message){
        toast.error(err?.data?.message)
      }else{
        toast.error(err?.message)
      }
      
     
    }
  })

  const loginHandler=(data)=>{
    console.log(data)
    mutate(data)
  }

  return (
    <AuthLayout>
      <div className="flex justify-center items-center h-screen   ">
        <form   onSubmit={handleSubmit(loginHandler)}    className="w-[361px] h-[505px] text-gray font-semibold flex flex-col gap-2">
          <div>
            <label className="mb-[12px]">Email</label>
            <Input
              className="!ring-0 mt-2 border-gray h-12 rounded-lg "
              placeholder="Enter email"
              {...register('email',{required: true})}
            />
          </div>
          <div>
            <label className="mb-[12px]">Password</label>
            <Input
              className="!ring-0 mt-2 border-gray  h-12 rounded-lg"
              placeholder="Enter password"
              {...register('password',{required:true})}
            />
          </div>

          <div className="font-semibold mt-3 text-lightblue">
            <p>Forgot password?</p>
          </div>
          <button className="w-full rounded-lg py-3 flex justify-center bg-lightblue text-white ">
          {
            isPending?(<>
              <SmallLoading/>
            </>):(<>
              Sign-In
            </>)
          }
            
          </button>
          <div className="flex justify-between">
            <p>Create a new account</p>
            <Link className="text-lightblue  font-semibold" to="/sign-up">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default SignIn;
