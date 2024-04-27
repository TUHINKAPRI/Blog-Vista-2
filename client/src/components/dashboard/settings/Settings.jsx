import { Bread } from "@/components/Breadcrumb/Bread";
import ProfilePicture from "./ProfilePicture";

function Settings() {

  const breadcrumb=[
    {
      name:'Home',
    path:'/'    },{
      name:'dashboard',
      path:'/dashboard/user',
    },{
      name:'/settings'
    }
  ]
  return (
    <div>
     <div>
        <h1 className="text-[24px] text-darkblue   font-semibold">Settings</h1>
        <Bread breadcrumb={breadcrumb} />
      </div>
      <ProfilePicture />
    </div>
  );
}

export default Settings;
