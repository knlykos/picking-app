import { useEffect, useState } from "react";
import { Product } from "../../../models/product.model";
import InputNkodex from "./../../../form-components/InputNkodex";
import { Link } from "react-router-dom";

// const axios = require('axios').default;
import axios from "axios";
function ProductsList() {
  const [products, setProduct] = useState<Product[]>([
    {
      barcode: "",
      canBePurchace: true,
      canBeSold: true,
      image: "",
      price: 0,
      active: true,
      cost: 0,
    },
  ]);

  useEffect(() => {
    axios
      .get<Product[]>("http://192.168.0.72:3001/products/find-all")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  function productLines() {
    let lines = products.map((product) => {
      return (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`http://192.168.0.72:3001/uploads/${product.image}`}
                  alt=""
                ></img>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {product.name}
                </div>
                <div className="text-sm text-gray-500">
                  {product.description}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{product.code}</div>
            {/* <div className="text-sm text-gray-500">Optimization</div> */}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {product.barcode}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.price}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link
              to={`/products/edit/${product.id}`}
              className="text-indigo-600 hover:text-indigo-900"
            >
              Edit
            </Link>
          </td>
        </tr>
      );
    });
    return lines;
  }
  return (
    <>
      <Link to="/products/new">
        <button>New</button>
      </Link>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Barcode
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {productLines()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
