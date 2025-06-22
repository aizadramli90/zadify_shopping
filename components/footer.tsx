import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  const currebtYear = new Date().getFullYear();

  return (
    <footer className="border-t flex flex-col md:flex-row items-center py-8 gap-7">
      <div className="email-subscription p-5">
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
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/735e9b602704f9fcecc0fc589358d5df"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/8612df33671e5fcf4e3896dddc09126f"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/be96ecd1fe21e89d006f285bae7db4ee"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/2b9fdf2b116defb1373ec0ca833b622e"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/4033bf33861a853bcba707d544694940"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/f9064fd45144e68e314586ee350b52dd"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 items-baseline">
        <h2 className="font-bold">Logistics Partner</h2>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/my-50009109-5ae3048586925c8f6961edd87717a588"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/my-50009109-a7e0a7e8e4e8d134a5ab04cfa87393f9"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/my-50009109-68145ac1a2f9ecebe890bb175f84525c"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/my-50009109-6b71bdaaae0c6c27188b319873536d38"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/my-50009109-89cb13c3ce6e90fd3d68c079adcde008"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://down-my.img.susercontent.com/file/my-11134258-7rask-m2bsun2czgnzd3"
            alt=""
          />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-1 items-start">
        <h2 className="font-bold">Aizad Ramli's</h2>
        <Link target="_blank" href={"https://github.com/aizadramli90"}>
          <i class="fa-brands fa-github"></i> GitHub
        </Link>
        <Link target="_blank" href="/">
          <i class="fa-solid fa-user-tie"></i> Other Portfolios
        </Link>
      </div>

      <div className="p-5">
        {currebtYear} &copy; {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
