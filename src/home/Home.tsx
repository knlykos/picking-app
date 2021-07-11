import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Link to="products">Products</Link>
      </div>
      <div>
        <Link to="sale-orders/new">Sale Orders</Link>
      </div>
    </>
  );
}
export default Home;
