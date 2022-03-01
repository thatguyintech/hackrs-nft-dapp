import { Outlet, Link } from "react-router-dom";
import { Provider } from "wagmi";

export default function App() {
  return (
    <Provider>
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
    </Provider>
  );
}