import { useParams } from "react-router-dom";

export default function Hackr() {
    const params = useParams();
    return <h2>Hackr #{params.tokenId}</h2>;
}