import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { getAllCategory } from "@/services/operations/ctegoryOperation";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CahipInput from "./CahipInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import SmallLoading from "@/components/Loading/SmallLoading";

function BlogForm({ submitPostHandler, isLoading, formValue }) {
  const [category, setCategory] = useState();
  const [value, setValues] = useState("");
  const [img, setImg] = useState(null);
  const { data: categoryData } = useQuery({
    queryKey: ["GET_ALL_CATEGORY"],
    queryFn: getAllCategory,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      title: formValue ? formValue?.title : "",
      description: formValue ? formValue?.description : "",
      paid: formValue ? formValue?.paid : false,
      thumbnail: formValue ? formValue?.thumbnail : "",
    },
  });
  useEffect(() => {
    setValue("content", value);
    setValue("category", category);
    setValue("thumbnail", img);
  }, [value, category, setValue, img]);

  useEffect(() => {
    register("category", { required: true });
    register("tags", { required: true });
    register("content", { required: true });
    register("thumbnail");
  }, []);

  useEffect(() => {
    setCategory(formValue?.category?._id);
    setValues(formValue?.content);
  }, []);
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitPostHandler)}
        className="w-full max-w-lg mx-auto mt-6  "
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>
            <input
              className="appearance-none   border-gray block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Title  of the blog"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Category
            </label>
            <Select
              className="text-gray"
              onValueChange={(data) => {
                setCategory(data);
              }}
            >
              <SelectTrigger className="w-full  border-gray h-[45px] !ring-0   ">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>

                  {categoryData?.data?.map((ele, index) => (
                    <SelectItem key={index} value={ele?._id}>
                      {ele?.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Tags
            </label>
            <CahipInput
              setValue={setValue}
              inputValue={formValue?.tags}
              getValues={getValues}
            />
            {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between md:items-center ">
          <div className="w-full md:w-1/2 mt-4 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Description
            </label>
            <input
              className="appearance-none   border-gray block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="description"
              {...register("description", { required: true })}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="flex gap-4  items-center ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Paid option
            </label>
            <input type="checkbox" className="h-5 w-5" {...register("paid")} />
          </div>
        </div>
        <div className="mt-4">
          <div className="col-span-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Thumbnail
            </label>

            <div className="mt-2 relative flex justify-center rounded-lg border border-dashed border-gray px-6 py-10">
              <div className="text-center flex flex-col justify-center items-center ">
                {img ? (
                  <>
                    <img
                      src={URL.createObjectURL(img && img)}
                      alt="wef"
                      className="w-72 h-60"
                    />
                  </>
                ) : (
                  <>
                    {formValue?.thumbnail ? (
                      <>
                        <img
                          src={formValue.thumbnail}
                          alt="wef"
                          className="w-72 h-60"
                        />
                      </>
                    ) : (
                      <>
                        <MdOutlinePhotoSizeSelectActual
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </>
                )}

                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <div className="text-lightblue">CHOCSE FILE</div>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={(e) => {
                        setImg(e.target.files[0]);
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap pb-6 mb-7 my-5 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-password"
          >
            Post content
          </label>
          <div className="w-full ">
            <ReactQuill
              className="w-full h-72  border-gray "
              theme="snow"
              value={value}
              onChange={setValues}
            />
          </div>
        </div>
        <div>
          <Button
            type="submit"
            disabled={isLoading ? true : false}
            variant="outline"
            className="w-full my-10 border-lightblue text-lightblue font-semibold hover:bg-lightblue hover:text-white "
          >
            {isLoading ? (
              <>
                <SmallLoading />
              </>
            ) : (
              <>SUBMIT</>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
