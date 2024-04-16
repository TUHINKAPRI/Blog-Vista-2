import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function FormLayout({ formType }) {
  return (
    <div  className="flex justify-center items-center h-screen   " >
      <form className="w-[361px] h-[505px] text-gray font-semibold flex flex-col gap-2">
        {formType === "sign-up" && (
          <div>
            <label className="">Name</label>
            <Input
              className="!ring-0 mt-2 border-gray h-12 rounded-lg "
              placeholder="Enter name"
            />
          </div>
        )}
        <div>
          <label className="mb-[12px]">Email</label>
          <Input
            className="!ring-0 mt-2 border-gray h-12 rounded-lg "
            placeholder="Enter email"
          />
        </div>
        <div>
          <label className="mb-[12px]">Password</label>
          <Input
            className="!ring-0 mt-2 border-gray  h-12 rounded-lg"
            placeholder="Enter password"
          />
        </div>
        {formType === "sign-up" && (
          <div>
            <label className="mb-[12px]">Re-password</label>
            <Input
              className="!ring-0 mt-2 border-gray h-12  rounded-lg "
              placeholder="Enter re-password"
            />
          </div>
        )}

        <div className="font-semibold mt-3 text-lightblue">
          <p>Forgot password?</p>
        </div>
        <button className="w-full rounded-lg py-3 bg-lightblue text-white ">{formType}</button>
        <div className="flex justify-between"  >
          <p>
            {formType === "sign-in"
              ? "Create a new account"
              : "You have an account?"}
          </p>
          <Link
            className="text-lightblue  font-semibold"
            to={`${formType === "sign-in" ? "/sign-up" : "/sign-in"}`}
          >
            {formType === "sign-in" ? "sign-up" : "sign-in"}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormLayout;
