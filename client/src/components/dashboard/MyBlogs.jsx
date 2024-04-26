import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SearchBox from "../Search/Search";
import { Tables } from "../common/Tables";
import { getUserBlogs } from "@/services/operations/userOperation";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { delete_Post } from "@/services/operations/blogOperation";
import toast from "react-hot-toast";

function MyBlogs() {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();
  const TableRows = [
    { name: "title" },
    { name: "Tags" },
    { name: "image" },
    { name: "Status" },
    { name: "Actions" },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["GET_USER_BLOGS"],
    queryFn: getUserBlogs,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: delete_Post,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClinet.invalidateQueries(["GET_USER_BLOGS"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  if (isLoading || isPending) {
    return <Loading />;
  }
  const editControllers = (data) => {
    navigate(`/dashboard/edit-blog/${data._id}`);
    console.log(data);
  };

  const deleteControllers = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <div>
      <div className="w-full  h-[200px] flex flex-col gap-4 justify-center items-center ">
        {" "}
        <SearchBox />
      </div>
      <div>
        {data?.data.length > 0 ? (
          <>
            <Tables
              TableRows={TableRows}
              TableColsData={data?.data}
              editControllers={editControllers}
              deleteControllers={deleteControllers}
            />
          </>
        ) : (
          <>
            <div className="flex w-full h-[400px] justify-center items-center text-deepDarkBlue text-md font-semibold ">
              You have not create any blog right now
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
