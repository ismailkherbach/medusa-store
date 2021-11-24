import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import MedusaLogo from "../../public/medusa-logo.svg";
import styles from "../../styles/nav-bar.module.css";
import { quantity, sum } from "../../utils/helper-functions";

export const NavBar = () => {
  const { updateCartViewDisplay } = useContext(DisplayContext);
  const { cart } = useContext(StoreContext);
  const [isCheckout, setIsCheckout] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/checkout" || router.pathname === "/payment") {
      setIsCheckout(true);
    } else {
      setIsCheckout(false);
    }
  }, [router.pathname]);

  return (
    <div className="navbar flex fdr aic jcfs">
      <Image
        src={"/statics/products/menu.svg"}
        height="20px"
        width="25px"
        alt="menu"
      />

      <Link className="" href="/">
        <a className="wb-100 flex fdc aic jcc">
          <Image src={MedusaLogo} height="40px" width="100%" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
