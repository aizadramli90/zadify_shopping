import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// interface Product {
//   slug: string;
//   name: string;
//   images: string[];
// }

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full h-auto">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            className="object-cover"
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-3 gap-2">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="flex justify-between">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <p>{product.price}</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
