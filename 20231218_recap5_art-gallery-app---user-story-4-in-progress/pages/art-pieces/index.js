import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <h1>Art Pieces Page</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}

// ======================================= v1 CODE
// import ArtPieces from "@/components/ArtPieces";

// export default function ArtPiecesPage({ pieces }) {
//   return (
//     <>
//       <h1>Art Pieces Page</h1>
//       <ArtPieces pieces={pieces} />
//     </>
//   );
// }
