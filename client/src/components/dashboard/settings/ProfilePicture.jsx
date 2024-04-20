import SmallLoading from "@/components/Loading/SmallLoading";
import { logout, setUserAfterUpdate } from "@/redux/slices/profileSlice";
import { updateProfilePicture } from "@/services/operations/userOperation";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
function ProfilePicture() {
  const { user } = useSelector((state) => state.profile);
  const dispatch=useDispatch()
  const [img, setImg]=useState()
  const {mutate,isPending}=useMutation({
    mutationFn:updateProfilePicture,
    onSuccess:(data)=>{
      console.log(data);
    toast.success(data?.message)
      dispatch(setUserAfterUpdate(data?.data))
    },
    onError:(data)=>{
      if(data?.data?.status===403){
        dispatch(logout())
        window.location.reload();
      }
      console.log(data)
    }
  })
  const uploadHandler=()=>{
    const fd=new FormData();
    fd.append('profile_picture',img)
    mutate(fd);

  }
  return (
    <div className="flex items-center justify-between rounded-md border-richblack-700 bg-white p-8 px-12 ">
      <div className="flex items-center gap-x-4">
        <img
          src={img?(URL.createObjectURL(img)):(user?.profile_picture)}
          alt="profile"
          className="aspect-square w-[78px] rounded-full object-cover"
        />
        <div className="space-y-2">
          <p>Change Profile Picture</p>
          <div className="flex flex-row gap-3">
            <input
              type="file"
              onChange={(e)=>{setImg(e.target.files[0])}}
              placeholder="select"
              className=""
              accept="image/png, image/gif, image/jpeg"
            />

            {
              isPending?(<>
                <SmallLoading/>
              </>):(<>
                <button className="border px-3 rounded-md"  onClick={uploadHandler}  >
              <FiUpload className="text-lg text-lightblue" />
            </button>
              </>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
