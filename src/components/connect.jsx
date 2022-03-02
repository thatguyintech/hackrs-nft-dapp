
import { useAccount, useConnect, useNetwork } from 'wagmi'

export default function Connect() {
    const [{ data, error }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })
    
    const [{ data: networkData, error: networkError, loading: networkLoading }, switchNetwork ] = useNetwork();

    if (accountData) {
        return (
            <div style={{ padding: 5}}>
                {accountData.ens?.avatar && (<img src={accountData.ens?.avatar} alt="ENS Avatar" />)}
                <div style={{ padding: 5}}>
                    {accountData.ens?.name
                    ? `${accountData.ens?.name} (${accountData.address})`
                    : accountData.address}
                </div>
                <div style={{ padding: 5}}>Connected to {accountData.connector.name} on {networkData.chain?.name}</div>
                <div style={{ padding: 5}}>(Make sure you're connected to Mainnet in order to Mint and View your HACKRs!)</div>
                <button onClick={disconnect} style={{ padding: 5}}>Disconnect</button>
            </div>
        )
    }

    return (
      <main style={{ padding: "1rem 0" }}>
        {data.connectors.map((connector) => (
            <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect(connector)}
            >
                Connect {connector.name}
                {!connector.ready && ' (unsupported)'}
            </button>
        ))}

        {error && <div>{error?.message ?? 'Failed to connect'}</div>}
      </main>
    );
  }