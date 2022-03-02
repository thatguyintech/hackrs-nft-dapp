import { useContractRead, useContractWrite } from "wagmi";
import { getABI } from "../utils/abi";

export default function Mint() {
    const contractAddress = "0x3Eb0Debc2F1FDb613416B3718670f64415C5fF16";
    const contractInterface = getABI();
    const etherscanLink = `https://www.etherscan.io/address/${contractAddress}`;

    const [{ data, error, loading }, read] = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface,
        },
        "availableTokens",
    );

    const [{ data: mintData, error: mintError, loading: mintLoading }, mint ] = useContractWrite(
        {
            addressOrName: contractAddress,
            contractInterface,
        },
        "mint",
    );

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Mint</h2>
        <p>Pointed at contract: <a href={etherscanLink} target={"_blank"}>{contractAddress}</a></p>
        <button onClick={mint}>Mint 1 HACKR nft</button>
        <p>{data && data.toString()} / 8888 remaining</p>
      </main>
    );
  }