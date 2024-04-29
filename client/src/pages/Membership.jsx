import MainLayout from "@/Layout/MainLayout";
import { Bread } from "@/components/Breadcrumb/Bread";
import Loading from "@/components/Loading/Loading";
import SmallLoading from "@/components/Loading/SmallLoading";

import { Button } from "@/components/ui/button";
import { displayRazorpay } from "@/lib/diaplayRazorpay";
import {
  create_order,
  verify_payment,
} from "@/services/operations/paymentOperation";
import { useMutation } from "@tanstack/react-query";

import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Membership() {
  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "membership",
    },
  ];
  const { user } = useSelector((state) => state.profile);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: create_order,
  });
  const { mutate: verifyPayment, isPending: verifyPaymentLoading } =
    useMutation({
      mutationFn: verify_payment,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (err) => {
        console.log(err);
      },
    });

  if (verifyPaymentLoading) {
    return <Loading />;
  }
  const buyHandler = () => {
    const data = {
      amount: 999,
    };
    mutateAsync(data)
      .then((res) => {
        const option = {
          amount: res?.amount,
          currency: res?.currency,
          orderId: res?.order_id,
          keyId: process.env.RAZORPAY_KEY_ID,
          keySecret: process.env.RAZORPAY_KEY_SECRECT,
          verifyPayment: verifyPayment,
        };
        displayRazorpay(option);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainLayout>
      <div>
        <h1 className="text-[24px] text-darkblue   font-semibold">
          Membership
        </h1>
        <Bread breadcrumb={breadcrumb} />
      </div>
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold  text-center mt-12 sm:text-5xl ">
            Membership plan
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
                <span className="text-5xl flex items-center font-bold tracking-tight">
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
                  <span className="ml-3 ">100+ free blogs</span>
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
                  <span className="ml-3 ">Explore all free blogs</span>
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
                  <span className="ml-3 ">No need to subscribe </span>
                </li>
              </ul>
            </div>

            {user ? (
              <>
                <Link
                  className=" py-2 hover:bg-slate-200 transition ease-in-out duration-100 mt-8 block w-full  px-6 border border-gray  rounded-md text-center font-medium"
                  to="/blogs"
                >
                  EXPLORE-MORE
                </Link>
              </>
            ) : (
              <>
                <Link
                  className=" py-2 hover:bg-slate-200 transition ease-in-out duration-100 mt-8 block w-full  px-6 border border-gray  rounded-md text-center font-medium"
                  to="/sign-up"
                >
                  SIGN_UP
                </Link>
              </>
            )}
          </div>
          <div className="relative p-8 text-deepDarkBlue border-gray  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold ">Pro</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-darkblue text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl flex items-center font-blod tracking-tight">
                  <MdOutlineCurrencyRupee /> <span>999</span>
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 ">you explore all our content or blogs ...</p>
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
                  <span className="ml-3 ">100+ blogs</span>
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
                  <span className="ml-3 ">Access All Blogs</span>
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
                    Easy cancellation within one month
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
                  <span className="ml-3 ">1000+ subscriber </span>
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
                  <span className="ml-3 ">Enjoy unlimited</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={buyHandler}
              className=" bg-white text-black hover:bg-slate-200 transition ease-in-out duration-200 mt-8 block w-full  px-6 border border-gray  rounded-md text-center font-medium"
            >
              {isPending ? (
                <>
                  <SmallLoading />
                </>
              ) : (
                <>BUY NOW</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Membership;
