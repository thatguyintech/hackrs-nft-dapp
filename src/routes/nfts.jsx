import { Outlet, Link } from "react-router-dom";
import { getHackrs } from "../data";

export default function NFTs() {
    const hackrs = getHackrs();
    return (
        <div style={{ display: "flex" }}>
          <nav
            style={{
            //   borderRight: "solid 1px",
              padding: "1rem",
            }}
          >
            {hackrs.map((hackr) => (
              <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/nfts/${hackr.tokenId}`}
                key={hackr.tokenId}
              >
                {hackr.name}
              </Link>
            ))}
          </nav>
          <Outlet/>
        </div>
      );
  }