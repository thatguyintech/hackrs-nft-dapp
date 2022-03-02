import { Outlet } from "react-router-dom";
import { getNFTs } from "../utils/alchemyNFTAPI";
import { useEffect, useState } from "react";
import { useAccount } from 'wagmi'

export default function NFTs() {
    const [hackrs, setHackrs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })

    useEffect(() => {
        getNFTs(accountData && accountData.address)
            .then(resp => setHackrs(resp))
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return (
        <div style={{ display: "flex" }}>
          <nav
            style={{
                display: "flex",
              padding: "1rem",
            }}
          >
              <div style={{flexDirection: "column"}}>
            {loading && <p>loading...</p>}
            {!loading && hackrs && hackrs.map((hackr) => (
                <div style={{flexDirection: "column", display: "flex", padding: 5}} key={hackr.tokenId}>
                    <div>{hackr.name}</div>
                    <img src={hackr.image} style={{display: "flex", height:400, width:400}}/>
                </div>
            ))}
              </div>
          </nav>
          <Outlet/>
        </div>
      );
  }