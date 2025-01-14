import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "./Loading";

const TopElectronics = () => {
  const { products, isLoading } = useContext(AuthContext);

  if (!isLoading) {
    const topElectronicsProducts = products.filter((product)=>{
        return product.department === "electronics"
    })

    const TopElectronics = topElectronicsProducts.slice(0, 6);

    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/bg.jpg)",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-center my-12">
            Top Electronics <span className="text-ylw">Products</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {TopElectronics.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))}
          </div>
          <div className="flex justify-center my-12">
            <Link to={"/products"}>
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
                className="btn bg-ylw text-white hover:bg-ylw"
              >
                View More
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading></Loading>;
  }
};

export default TopElectronics;
