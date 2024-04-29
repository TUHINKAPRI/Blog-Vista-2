

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const displayRazorpay = async ({
  amount,
  currency,
  orderId,
  keyId,
  verifyPayment
}) => {
  const res = await  loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

console.log(parseInt(amount))
  const options = {
    key: keyId, // Enter the Key ID generated from the Dashboard
    amount: 878,
    currency: currency,
    name: "Tuhin kapri",
    description: "Test Transaction",
    image: "",
    order_id: orderId,
    handler:  function (response) {
      console.log(response)
      verifyPayment(response)
    },
   
   
    
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
