export default function Hackr(props) {
    return (<div>
        <h2>Hackr #{props.tokenId}</h2>
        <img src={props.image}/>
    </div>);
}