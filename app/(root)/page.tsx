import productDataSamples from "@/db/productDataSamples";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: "Home",
};

//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  //await delay(2000);
  return (
    <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col mx-auto md:flex-row gap-5">
      <ProductList
        data={productDataSamples.products}
        limit={4}
        title="Top Products!"
      />
    </div>
  );
};

export default Homepage;
