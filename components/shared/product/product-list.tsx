import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  // TYPESCRIPT: data type is temporarily set to any, will create a type product later
  // 'title?' means it is optional
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      {data.length > 0 ? (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedData.map((product: any) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
