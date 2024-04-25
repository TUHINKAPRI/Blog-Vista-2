import SearchBox from "../Search/Search";

function Footer() {
  const product = [
    "Landingpage",
    "Features",
    "Documentation",
    "Referral",
    "Program",
    "Pricing",
  ];

  const company = ["About", "Terms", "Privacy", "Policy", "Careers"];

  const services = [
    "Documentation",
    "Design",
    "Themes",
    "Illustrations",
    "UI Kit",
  ];

  const more = ["Documentation", "License", "Changelog"];

  return (
    <div className=" flex flex-col gap-0 ">
      <section className="flex gap-0 flex-col">
        <div>
          <img src="/Wave.svg" alt="" />
        </div>
        <div className=" bg-deepDarkBlue pb-[96px]  ">
          <div className="  md:grid md:grid-cols-2  gap-4 max-w-80  sm:max-w-2xl  md:max-w-6xl mx-auto grid-cols-1  ">
            <div className="md:max-w-6xl  mx-auto text-center md:text-start col-span-1  ">
              <p className="font-bold text-white text-[36px] mt-[67px] mb-[48px] ">
                Get our stories delivered From us to your inbox weekly.
              </p>
              <div className="flex justify-center  md:justify-start  ">
                <SearchBox />
              </div>
              <p className="mt-[26px] text-darkblue font-normal ">
                Get a response tomorrow if you submit by 9pm today. If we
                received after 9pm will get a reponse the following day.
              </p>
            </div>
            <div className=" hidden sm:block  mt-3 w-[578px] h-[427px]  ">
              <img src="/card.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-deepDarkBlue  pb-16 sm:pb-32  md:pb-60  ">
        <div className="md:max-w-6xl mx-auto max-w-80    justify-between gap-20 md:gap-4 md:flex-row flex-col  flex   sm:max-w-2xl ">
          <div className="flex flex-col justify-center md:items-start items-center   gap-y-6">
            <p className="text-white font-bold text-[28px] ">Blog Vista</p>
            <p className="text-[#5A7184]">
              Build a modern and creative website with moonfo
            </p>
            <div className="flex gap-4">
              <div className="rounded-[15px] bg-[#FC5A5A] w-[30px]  h-[30px]" />
              <div className="rounded-[15px] bg-[#FC5A5A] w-[30px]  h-[30px]" />
              <div className="rounded-[15px] bg-[#FC5A5A] w-[30px]  h-[30px]" />
              <div className="rounded-[15px] bg-[#FC5A5A] w-[30px]  h-[30px]" />
              <div className="rounded-[15px] bg-[#FC5A5A] w-[30px]  h-[30px]" />
            </div>
          </div>
          <div className="text-[#5A7184]    flex justify-between flex-wrap   gap-11 "   >
              <div  className="flex flex-col gap-5" >
                {product?.map((ele,index)=>(
                  <div key={index}   >
                    {ele}
                  </div>
                ))}
              </div>
              <div  className="flex flex-col gap-5"  >
              {company?.map((ele,index)=>(
                  <div key={index}   >
                    {ele}
                  </div>
                ))}
              </div>
              <div   className="flex flex-col gap-5"  >
              {services?.map((ele,index)=>(
                  <div key={index}   >
                    {ele}
                  </div>
                ))}
              </div>
              <div   className="flex flex-col gap-5"    >
              {more?.map((ele,index)=>(
                  <div key={index}   >
                    {ele}
                  </div>
                ))}
              </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;




