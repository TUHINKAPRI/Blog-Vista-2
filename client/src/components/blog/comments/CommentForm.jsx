import SmallLoading from "@/components/Loading/SmallLoading";
import { useEffect, useState } from "react";

function CommentForm({ isEdit, setIsOpen, value,formSubmitHnadler,pending }) {
  const [formData, setFormData] = useState(null);
  const changeHandler = (e) => {
    setFormData(e.target.value)
  };
  useEffect(() => {
    setFormData(value);
  }, []);
  return (
    <div className=" w-full bg-white h-[160px] relative ">
      <textarea
        className=" p-4 w-full !ring-0 rounded-lg focus:outline-none h-[160px] "
        placeholder="Enter your comment here ..."
        value={formData}
        onChange={(e) => changeHandler(e)}
      ></textarea>
      <div className="absolute bottom-3  right-3">
        <button
        disabled={pending?(true):(false)}
          onClick={() => {formSubmitHnadler(formData);
          if(!value){
            setFormData(null)
          }
          }}
          className=" me-3 font-semibold bg-lightblue px-5 py-2 rounded-md text-white "
        >
        {
          pending && <SmallLoading/>
        }
          Submit
        </button>
        {isEdit &&  (
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className=" font-semibold bg-lightblue px-5 py-2 rounded-md text-white "
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentForm;
