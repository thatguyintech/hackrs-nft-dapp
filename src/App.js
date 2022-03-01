import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>HACKRS</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/mint">mint</Link> - {" "}
        <Link to="/nfts">view my HACKRs</Link>
      </nav>
      <Outlet />
    </div>
  );
}