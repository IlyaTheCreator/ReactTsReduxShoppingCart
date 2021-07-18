import { useSelector } from "react-redux";
import { getProductsSelector } from "../products.slice";
import { Product } from "./products.slice";

interface ProductsListProps {}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const products = useSelector(getProductsSelector);

  return (
    <div>
      <label>Games List</label>
      {products.map((product: Product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;