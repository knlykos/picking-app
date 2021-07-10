import { createRef, useRef, useState } from "react";
import { Product } from "../../../models/product.model";
import InputNkodex from "./../../../form-components/InputNkodex";
import InputMoneyNkodex from "./../../../form-components/InputMoneyNkodex";
import InputFileNkodex from "./../../../form-components/InputFileNkodex";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function ProductCreate() {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<any>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [product, setProduct] = useState<Product>({
    barcode: "",
    canBePurchace: true,
    canBeSold: true,
    image: "no-image.jpg",
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
    // imagePreview();
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
  function setFileFn(fileName: string, file: FileList | null) {
    console.log(fileName);
    setFile(file);
    setFileName(fileName);
    console.log(file);
    // imagePreview();
  }
  async function uploadFile() {
    let sendFile = new FormData();
    console.log(file);
    sendFile.append("image", file[0]);
    try {
      const response = await axios.post(
        `http://192.168.0.72:3001/products/image?id=${product.id}`,
        sendFile
      );
      console.log(response);
      alert("file uploaded");
    } catch (error) {
      console.log(error);
      alert("error al tratar de subir el file");
    }
  }
  function loadImage(reader: FileReader) {}
  // async function imagePreview() {
  //   let reader = new FileReader();
  //   var url: void;
  //   // setTimeout(() => {
  //   // TODO: fix this code, it must be recursive, using a try & catch
  //   // and a timer to track when file[0] is ready.
  //   console.log(file);
  //   setTimeout(() => {
  //     url = reader.readAsDataURL(file[0]);
  //     reader.onloadend = (e) => {
  //       console.log(e);
  //       const current = imgRef.current;
  //       if (current !== null) {
  //         current.src = reader.result as string;
  //       }
  //       console.log(url);
  //     };
  //   }, 500);
  // }
  // }, 500);

  return (
    <>
      <div>
        <img
          ref={imgRef}
          className="h-36 w-36 rounded-full border-red-600 border-4	"
          src={`http://192.168.0.72:3001/uploads/${product.image}`}
          alt=""
        />
      </div>
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
        <InputMoneyNkodex
          placeholder="Price"
          input={product.price}
          onChange={onChangeProductPrice}
          label="Price"
        ></InputMoneyNkodex>
      </div>
      <div className="my-3">
        <InputMoneyNkodex
          placeholder="Cost"
          input={product.cost}
          onChange={onChangeProductCost}
          label="Cost"
        ></InputMoneyNkodex>
      </div>
      {/* <div className="my-3">
        <InputNkodex
          placeholder="Image"
          input={product.image}
          onChange={onChangeProductImage}
          label="Image"
        ></InputNkodex>
      </div> */}
      <div className="my-3">
        <InputFileNkodex
          imgRef={imgRef}
          placeholder="Image"
          input={fileName}
          onChange={setFileFn}
          label="Image"
        ></InputFileNkodex>
      </div>
      {JSON.stringify(product)}
      <button onClick={createProduct}>Save</button>
      <button type="button" onClick={uploadFile}>
        Upload
      </button>
      <br />
      {/* <button className="background-red" onClick={imagePreview}>
        Preview
      </button> */}
    </>
  );
}

export default ProductCreate;
