import styles from "../styles/home.module.css";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "../utils/client";
import { FaGithub } from "react-icons/fa";
import { formatPrices } from "../utils/prices";
import { useContext } from "react";
import StoreContext from "../context/store-context";

export default function Home({ products }) {
  const { cart } = useContext(StoreContext);
  return (
    <div className="medusa-main-container flex fdc aic jcc">
      <div className="products-main flex fdr aic jcfs">
        {products &&
          products.map((p, i) => {
            return (
              <Link
                href={{ pathname: `/product/[id]`, query: { id: p.id } }}
                passHref
              >
                <div
                  key={p.id}
                  className="product-card pointer flex fdc aic jcc"
                >
                  <div className="product-picture flex fdc aic jcc">
                    <Image
                      objectFit="contain"
                      height="100%"
                      width="100%"
                      priority={true}
                      loading="eager"
                      layout="fill"
                      src={p.thumbnail}
                      alt={`${p.title}`}
                    />
                  </div>
                  <div className="product-infos flex fdr aic jcc">
                    <h2>{p.title}</h2>
                    <p>{formatPrices(cart, p.variants[0])}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient();
  const { products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
};
