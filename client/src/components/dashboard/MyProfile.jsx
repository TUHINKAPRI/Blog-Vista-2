import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function MyProfile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="pb-5  ">
      <h1
        className=" mb-[37px] break-words
 font-['Cairo']
 font-bold
 text-[34px]
 text-[var(--black,#202020)]"
      >
        My Profile
      </h1>
      <div className="flex shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] items-center justify-between rounded-md  bg-white px-2 py-8 sm:p-8 sm:px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.profile_picture}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[50px] sm:w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.name}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <button
          className="flex items-center 
            border border-lightblue text-lightblue bg-transparent hover:bg-lightblue hover:text-white              
           cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold"
          onClick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <RiEditBoxLine />
        </button>
      </div>
      <div className="my-10  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]  flex flex-col gap-y-10 rounded-md   bg-white px-2 py-8 sm:p-8 sm:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <button
            className="flex items-center 
            border border-lightblue text-lightblue bg-transparent hover:bg-lightblue hover:text-white              
           cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold"
            onClick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </button>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] bg-white px-2 py-8 sm:p-8 sm:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <button
            className="flex items-center 
            border border-lightblue text-lightblue bg-transparent hover:bg-lightblue hover:text-white              
           cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold"
            onClick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.name}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.dateOfBirth ?? "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
