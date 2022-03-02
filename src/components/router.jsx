
import { Link } from "react-router-dom";
export default function Router() {

    return (
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/mint">mint</Link> - {" "}
          <Link to="/nfts">view my HACKRs</Link>
        </nav>
    );
  }