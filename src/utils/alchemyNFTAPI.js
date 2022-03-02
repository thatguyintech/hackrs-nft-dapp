import axios from 'axios';

export async function getNFTs(ownerAddr) {
  
    // Replace with your Alchemy API key:
    const apiKey = "jgXYGxWMAYsxaym5fgNqR1Mvx4ozZco7";
    const baseURL = `https://eth-mainnet.g.alchemy.com/${apiKey}/v1/getNFTs`;

    // Setup request options:
    var config= {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };

    let resp;
    await axios(config)
        .then(response => {
            const imgUrls = response.data.ownedNfts.map(nft => {
                return {
                    name: nft.metadata.name,
                    image: nft.media[0].raw,
                    tokenId: nft.id.tokenId
                }
            });
            resp = imgUrls
        })
        .catch(error => console.log('error', error))
    return resp;
}