import { useState } from "react";
import { useAppDispatch } from "../store.hooks";
import { addProduct, Product } from "./products.slice";

const ProductForm: React.FC = ({}) => {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    id: "",
  });

  // universal way of two-way binding in a react form inputs
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setProduct((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if checks, bla bla bla
    // Putting the product into the store
    dispatch(addProduct(product));

    setProduct({
      title: "",
      price: 0,
      id: "",
    });
  };

  return (
    <>
      <h2>Add Game To The Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Game title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Game Price"
          value={product.price}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Game id"
          name="id"
          value={product.id}
        />
        <button type="submit">Add Price</button>
      </form>
    </>
  );
};

export default ProductForm;
