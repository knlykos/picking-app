import { useState } from "react";
import DatePicker from "react-date-picker";
import InputNkodex from "../../form-components/InputNkodex";
import { Partner } from "../../models/partner.model";
import { SaleOrder } from "../../models/sale-order.model";

function SaleOrderCreate() {
  const [partner, setPartner] = useState<Partner>({
    name: "",
    street: "",
    email: "",
    mobile: "",
    phone: "",
    shippingId: 0,
    website: "",
    zip: "",
  });
  const [saleOrder, setSaleOrder] = useState<SaleOrder>({
    orderDate: new Date(),
    orderReference: "",
    partner: partner,
    userId: 1,
    orderLines: [{ quantity: 0 }],
  });
  function onChangeSOReference(orderReference: string) {
    setSaleOrder((prevState: SaleOrder) => {
      return { ...prevState, orderReference: orderReference };
    });
  }
  function onChangePartnerName(name: string) {
    setPartner((prevState: Partner) => {
      return { ...prevState, name: name };
    });
  }
  function onChangePartnerStreet(street: string) {
    setPartner((prevState: Partner) => {
      return { ...prevState, street: street };
    });
  }
  function onChangePartnerEmail(email: string) {
    setPartner((prevState: Partner) => {
      return { ...prevState, email: email };
    });
  }
  function onChangeSaleOrderDate(orderDate: Date) {
    setSaleOrder((prevState: SaleOrder) => {
      return { ...prevState, orderDate: orderDate };
    });
  }
  return (
    <>
      <div>
        <InputNkodex
          input={saleOrder.orderReference}
          onChange={onChangeSOReference}
          placeholder="Reference"
          label="Reference"
        ></InputNkodex>
      </div>
      <div>
        <InputNkodex
          input={partner.name}
          onChange={onChangePartnerName}
          placeholder="Name"
          label="Name"
        ></InputNkodex>
      </div>
      <div>
        <InputNkodex
          input={partner.street}
          onChange={onChangePartnerStreet}
          placeholder="Cost"
          label="Cost"
        ></InputNkodex>
      </div>
      <div>
        <InputNkodex
          input={partner.email}
          onChange={onChangePartnerEmail}
          placeholder="Email"
          label="Email"
        ></InputNkodex>
      </div>
      <div>Date: {saleOrder.orderDate.toString()}</div>

      {/* <DatePicker
        onChange={onChangeSaleOrderDate}
        value={saleOrder.orderDate as Date}
      /> */}
      <div>{JSON.stringify(saleOrder)}</div>
      <div>{JSON.stringify(partner)}</div>
    </>
  );
}

export default SaleOrderCreate;
