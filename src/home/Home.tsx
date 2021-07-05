import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Link to="products">Products</Link>
      </div>
    </>
  );
}
export default Home;
