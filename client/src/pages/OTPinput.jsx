import AuthLayout from "@/Layout/AuthLayout";
import { useState } from "react";
import OtpInput from "react18-input-otp";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { send_otp, sign_up } from "@/services/operations/authOperation";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import SmallLoading from "@/components/Loading/SmallLoading";
function OTPinput() {
  const dispatch = useDispatch();
  const { signupData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: sign_up,
    onSuccess: (data) => {
      toast.success(data?.message);
      navigate("/sign-in");
    },
    onError: (data) => {
      toast.error(data?.data?.message);
    },
  });

  const{mutate:resendMutate,isPending:resendPending}=useMutation({
    mutationFn:send_otp,
    onSuccess: (data) => {
      toast.success(data?.data?.message);
    },
    onError: (data) => {
      toast.error(data?.data?.message);
    },
  })
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    mutate({ ...signupData, otp: otp });
  };

  const resendHandler=(e)=>{
    e.preventDefault();
    resendMutate(signupData)

  }

  return (
    <AuthLayout>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="absolute">
            <button
              className=""
              onClick={() => {
                navigate(-1);
              }}
            >
              <MoveLeft />
            </button>
          </div>
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {signupData?.email}</p>
              </div>
            </div>
            <div>
              <form>
                <div className="flex flex-col space-y-7">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        separator={<span></span>}
                        inputStyle={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "5px",
                          display: "flex",
                          marginRight: "5px",
                          color: "gray",
                          borderColor: "white",
                          border: "1px solid black",
                          outlineColor: "#0D2436",
                          fontSize: "16px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        onClick={(e) => {
                          submitHandler(e);
                        }}
                        className="flex  bg-lightblue flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        {isPending ? <SmallLoading /> : <>Verify Account</>}
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <button
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                        type="button"
                        onClick={(e)=>{resendHandler(e)}}
                      >
                        Resend
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default OTPinput;
