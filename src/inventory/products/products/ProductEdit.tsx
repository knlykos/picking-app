import { useEffect, useState } from "react";
import { Product } from "../../../models/product.model";
import InputNkodex from "./../../../form-components/InputNkodex";
import InputMoneyNkodex from "./../../../form-components/InputMoneyNkodex";
import InputFileNkodex from "./../../../form-components/InputFileNkodex";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import FormData from "form-data";

function ProductEdit() {
  const { id } = useParams<{ id: string }>();
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<any>(null);
  const [product, setProduct] = useState<Product>({
    barcode: "",
    canBePurchace: true,
    canBeSold: true,
    image: "",
    price: 0,
    active: true,
    cost: 0,
  });
  const history = useHistory();
  useEffect(() => {
    axios
      .get<Product>(`http://192.168.0.72:3001/products/find-one?id=${id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
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

  function setFileFn(fileName: string, file: FileList | null) {
    console.log(fileName);
    setFile(file);
    setFileName(fileName);
    console.log(file);
    // try {
    //   axios.post("http://192.168.0.72:3001/upload/image/main", file, {
    //     headers: "'Content-Type': 'multipart/form-data'",
    //   });
    //   alert("file uploaded");
    // } catch (error) {
    //   alert("error al tratar de subir el file");
    // }
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

  async function editProduct() {
    try {
      const response = await axios.put(
        "http://192.168.0.72:3001/products/update",
        product
      );
      window.alert("product updated");
      history.push("/products");
    } catch (error) {
      window.alert("product not updated");
    }
  }
  return (
    <>
    <div>
        <img className="h-36 w-36 rounded-full" src={`http://192.168.0.72:3001/uploads/${product.image}`} alt="" />
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
      <div className="my-3">
        <InputFileNkodex
          placeholder="Image"
          input={fileName}
          onChange={setFileFn}
          label="Image"
        ></InputFileNkodex>
      </div>

      {JSON.stringify(product)}
      <button onClick={editProduct}>Save</button>
      <br />
      <button type="button" onClick={uploadFile}>
        Upload
      </button>
    </>
  );
}

export default ProductEdit;
