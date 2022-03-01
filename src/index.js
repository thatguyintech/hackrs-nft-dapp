import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Mint from "./routes/mint";
import NFTs from "./routes/nfts";
import Hackr from "./routes/hackr";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Mint" element={<Mint />} />
        <Route path="NFTs" element={<NFTs />} >
          <Route path=":tokenId" element={<Hackr />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);