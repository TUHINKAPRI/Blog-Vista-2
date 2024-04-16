import MainLayout from "@/Layout/MainLayout";
import { Breadcrumbs } from "@/components/Breadcrumb";
import React from "react";

function SingleBlog() {
  return (
    <MainLayout>
      <div className="h-screen">
        <div className="mb-[29px]">
          <Breadcrumbs />
        </div>
        <div className="flex ">
          <div className="w-[637px] h-[405px]  rounded-lg ">
            {/* img */}
            <div>
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                alt="banner"
                className="w-[637px] h-[405px]  rounded-lg "
              />
            </div>
            {/* categfory */}
            <h1 className="my-[25px] text-lightblue ">EDUCATION</h1>
            <div className=" font-medium text-[26px] mb-[26px] text-[#0D2436]">
              title
            </div>
            <div>descripntion</div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SingleBlog;
