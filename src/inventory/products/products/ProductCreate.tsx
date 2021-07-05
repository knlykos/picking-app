import { useState } from "react";
import { Product } from "../../../models/product.model";
import InputNkodex from "./../../../form-components/InputNkodex";
import axios from "axios";

function ProductCreate() {
  const [product, setProduct] = useState<Product>({
    barcode: "",
    canBePurchace: true,
    canBeSold: true,
    image: "",
    price: 0,
    active: true,
    cost: 0,
  });
  function onChangeProductName(changeProductName: string) {
    const val = changeProductName;
    setProduct((prevState: Product) => {
      const productRes = { ...prevState, name: val };
      return productRes;
    });
  }

  function onChangeProductCode(code: string) {
    const val = code;
    setProduct((prevState: Product) => {
      const productRes = { ...prevState, code: val };
      return productRes;
    });
  }

  function onChangeProductDescription(description: string) {
    const val = description;
    setProduct((prevState: Product) => {
      const productRes = { ...prevState, description: val };
      return productRes;
    });
  }

  function onChangeProductBarcode(barcode: string) {
    const val = barcode;
    setProduct((prevState: Product) => {
      const productRes = { ...prevState, barcode: val };
      return productRes;
    });
  }

  function onChangeProductPrice(price: string) {
    const val = price;
    setProduct((prevState: Product) => {
      const productRes = { ...prevState, price: val };
      return productRes;
    });
  }

  function onChangeProductCost(cost: string) {
    const val = cost;
    setProduct((prevState: Product) => {
      const productRes = { ...prevState, cost: val };
      return productRes;
    });
  }

  function onChangeProductImage(image: string) {
    const val = image;
    setProduct((prevState: Product) => {
      const productRes = { ...prevState, image: val };
      return productRes;
    });
  }

  async function createProduct() {
    const response = await axios.post(
      "http://192.168.0.72:3001/products/create",
      product
    );
    console.log(response.data);
  }
  return (
    <>
      <InputNkodex
        placeholder="Name"
        input={product.name}
        onChange={onChangeProductName}
        label="Name"
      ></InputNkodex>
      <div className="my-3">
        <InputNkodex
          placeholder="Code"
          input={product.code}
          onChange={onChangeProductCode}
          label="Code"
        ></InputNkodex>
      </div>
      <div className="my-3">
        <InputNkodex
          placeholder="Description"
          input={product.description}
          onChange={onChangeProductDescription}
          label="Description"
        ></InputNkodex>
      </div>
      <div className="my-3">
        <InputNkodex
          placeholder="Barcode"
          input={product.barcode}
          onChange={onChangeProductBarcode}
          label="Barcode"
        ></InputNkodex>
      </div>
      <div className="my-3">
        <InputNkodex
          placeholder="Price"
          input={product.price}
          onChange={onChangeProductPrice}
          label="Price"
        ></InputNkodex>
      </div>
      <div className="my-3">
        <InputNkodex
          placeholder="Cost"
          input={product.cost}
          onChange={onChangeProductCost}
          label="Cost"
        ></InputNkodex>
      </div>
      <div className="my-3">
        <InputNkodex
          placeholder="Image"
          input={product.image}
          onChange={onChangeProductImage}
          label="Image"
        ></InputNkodex>
      </div>

      {JSON.stringify(product)}
      <button onClick={createProduct}>Save</button>
    </>
  );
}

export default ProductCreate;
