import { Outlet, Link } from "react-router-dom";
import { getHackrs } from "../data";
import Hackr from "./hackr";

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
                <Hackr tokenId={hackr.tokenId} image={hackr.image}/>
            ))}
          </nav>
          <Outlet/>
        </div>
      );
  }