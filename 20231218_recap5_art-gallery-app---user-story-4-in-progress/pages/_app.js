import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetcher = async (...args) => {
  const res = await fetch(...args);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [pieces, setPieces] = useState(null); // Initialize as null

  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    // Update the pieces state once data is available
    if (data) {
      setPieces(data);
    }
  }, [data]);

  if (error) return <h2>{error.message}</h2>;
  if (!pieces) return <h2>Loading...</h2>;

  return (
    <SWRConfig value={{ fetcher /*, refreshInterval: 5000 */ }}>
      <Layout />
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </SWRConfig>
  );
}

// ======================================= v2 CODE
// import { SWRConfig } from "swr";
// import GlobalStyle from "../styles";
// import useSWR from "swr";
// import { useEffect, useState } from "react";

// // const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const fetcher = async (...args) => {
//   const res = await fetch(...args);

//   if (!res.ok) {
//     const error = new Error("An error occurred while fetching the data.");
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };

// export default function App({ Component, pageProps }) {
//   const [pieces, setPieces] = useState(null); // Initialize as null

//   const { data, error } = useSWR(
//     "https://example-apis.vercel.app/api/art",
//     fetcher
//   );

//   useEffect(() => {
//     // Update the pieces state once data is available
//     if (data) {
//       setPieces(data);
//     }
//   }, [data]);

//   if (error) return <h2>{error.message}</h2>;
//   if (!pieces) return <h2>Loading...</h2>;

//   return (
//     <SWRConfig value={{ fetcher /*, refreshInterval: 5000 */ }}>
//       <GlobalStyle />
//       <Component {...pageProps} pieces={pieces} />
//     </SWRConfig>
//   );
// }
