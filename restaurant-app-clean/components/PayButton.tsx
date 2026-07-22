"use client"

import { PaystackButton } from "react-paystack";

const publicKey = "pk_test_9fba63e9965a2720de813f54ee5762fa08135aed"; 

const PayButton = ({ total }: {total: number}) => {
  const componentProps = {
    email: "customer@email.com",
    amount: total * 100,
    currency: "NGN",
    publicKey,

    onSuccess: () => {
      alert("Payment successful ✅");
    },

    onClose: () => {
      alert("Payment closed ❌");
    },
  };

  return (
    <PaystackButton
      {...componentProps}
      className="mt-4 bg-green-600 px-4 py-2 rounded text-white"
      text="Pay Now"
    />
  );
};

export default PayButton;