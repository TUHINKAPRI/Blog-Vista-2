

function Category({category,categoryHandler}) {

  return (
    <div className="flex"  >
      <h2 className="italic  font-bold text-[#5A7184]  me-4 "  >All Category : </h2>
      <div className="flex flex-wrap gap-3" >
      {category?.data?.map((ele, index) => (
        <button key={index} onClick={()=>{categoryHandler(ele._id)}}  >
          <div className="bg-lightblue bg-opacity-10   rounded-[4px] ">
            <p className="py-[6px] px-[19px] italic font-bold  text-[14px] text-[#1565D8] ">
              {ele?.name}
            </p>
          </div>
        </button>
      ))}
    </div>
    </div>
  );
}

export default Category;
