interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  return (
    <>
      <h2>Add Game To The Store</h2>
      <form>
        <input type="text" placeholder="Game title" name="title" />
        <input type="number" placeholder="Game Price" name="price" />
        <input type="text" placeholder="Game id" name="id" />
        <button>Add Price</button>
      </form>
    </>
  );
};

export default ProductForm;
