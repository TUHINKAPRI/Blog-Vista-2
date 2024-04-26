import MainLayout from "@/Layout/MainLayout";
import { Button } from "@/components/ui/button";

import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Membership() {
  const { user } = useSelector((state) => state.profile);
  const buyHandler=(data)=>{
    
  }
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold tracki text-center mt-12 sm:text-5xl ">
            Membership paln
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
            Get started on our free plan and upgrade when you are ready.
          </p>
        </div>
        <div className="mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="relative p-8 border-gray text-deepDarkBlue   border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold ">Free</h3>
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl flex items-center font-blod tracking-tight">
                  <MdOutlineCurrencyRupee /> <span>0</span>
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 ">You just want to discover</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">10 Credits</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Quizz (1 credits) </span>
                </li>
              </ul>
            </div>

            {user ? (
              <>
                <Link
                  className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full  px-6 border border-gray  rounded-md text-center font-medium"
                  to="/blogs"
                >
                  <Button className="text-gray ">EXPLORE-MORE</Button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full  px-6 border border-gray  rounded-md text-center font-medium"
                  to="/sign-up"
                >
                  <Button className="text-gray ">SIGN-UP</Button>
                </Link>
              </>
            )}
          </div>
          <div className="relative p-8 text-deepDarkBlue border-gray  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold ">Pro</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl flex items-center font-blod tracking-tight">
                  <MdOutlineCurrencyRupee /> <span>999</span>
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 ">
                You want to learn and have a personal assistant
              </p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">30 credits</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">
                    Powered by GPT-4 (more accurate)
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <Button  onClick={buyHandler} className="border-gray text-gray  hover:bg-emerald-600 mt-8 block w-full   px-6 border  rounded-md  font-medium">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Membership;
