import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import registeredLogistics from "@/lib/constants/registeredLogistics";
import paymentMethods from "@/lib/constants/paymentMethods";

const Footer = () => {
  const currebtYear = new Date().getFullYear();

  return (
    <footer className="border-t flex flex-col md:flex-row md:items-start md:justify-center items-center px-5 py-8 gap-7">
      <div className="email-subscription">
        <h2 className="font-bold">
          Subscribe to our newsletter for exclusive promotion!
        </h2>
        <div className="sign-up flex flex-row">
          <input className="grow-1" placeholder="Your email..." />
          <button className="button-card grow-2">Sign Up</button>
        </div>
      </div>

      <div className="payment-methods flex flex-col gap-2 items-baseline">
        <h2 className="font-bold">Payments</h2>
        {paymentMethods.map((payment) => {
          return (
            <div key={payment.id}>
              <Image
                src={payment.src}
                alt="payment method"
                width={52}
                height={22}
              />
            </div>
          );
        })}
      </div>

      <div className=" flex flex-col gap-2 items-baseline">
        <h2 className="font-bold">Logistics Partner</h2>
        {registeredLogistics.map((logistic) => (
          <div key={logistic.id}>
            <Image
              src={logistic.src}
              alt={logistic.name}
              width={52}
              height={22}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 items-start">
        <h2 className="font-bold">Aizad Ramli's</h2>
        <Link target="_blank" href={"https://github.com/aizadramli90"}>
          <i className="fa-brands fa-github"></i> GitHub
        </Link>
        <Link target="_blank" href="/">
          <i className="fa-solid fa-user-tie"></i> Other Portfolios
        </Link>
      </div>

      <div className="">
        {currebtYear} &copy; {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
