function BlogCard() {
  return (
    <div>
      <div className="absolute top-[699px] left-[593px] rounded-xl bg-white shadow-[0px_15px_25px_rgba(0,_0,_0,_0.06)] w-[360px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[24.7px] z-[5] text-left text-9xl text-darkslategray font-roboto">
        <div className="self-stretch h-[498px] relative rounded-xl bg-white shadow-[0px_15px_25px_rgba(0,_0,_0,_0.06)] hidden" />
        <img
          className="self-stretch h-[255.3px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[6]"
          loading="lazy"
          alt=""
          src="/alesnesetrilim7lzjxelhgunsplash-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 text-left text-9xl text-darkslategray font-roboto">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <h2 className="m-0 self-stretch relative text-inherit tracking-[0.2px] leading-[36px] font-bold font-inherit z-[6] mq450:text-3xl mq450:leading-[29px]">
                wegrwg
              </h2>
              <div className="self-stretch relative text-lg leading-[32px] font-open-sans z-[6]">
                ergerg
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base font-open-sans mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="w-10 h-10 relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-full h-full z-[6]" />
                    <img
                      className="absolute top-[0px] left-[0px] rounded-980xl w-full h-full object-cover z-[7]"
                      loading="lazy"
                      alt="img"
                      src=""
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <i className="relative inline-block font-bold min-w-[122px] z-[6]">
                    erger
                  </i>
                  <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-slategray-100">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative z-[6]"
                        loading="lazy"
                        alt="img"
                        src=""
                      />
                    </div>
                    <i className="relative inline-block min-w-[87px] z-[6]">
                      Verified writer
                    </i>
                  </div>
                </div>
              </div>
              <div className="w-[54px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-right text-slategray-100">
                <i className="self-stretch relative inline-block font-bold min-w-[54px] z-[6]">
                  02 May
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
