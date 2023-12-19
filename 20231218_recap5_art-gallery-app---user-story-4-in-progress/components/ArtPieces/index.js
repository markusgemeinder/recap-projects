import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {/* <h2>Art Pieces List</h2> */}
      {pieces.map((piece) => (
        <div key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </div>
      ))}
    </>
  );
}

// ======================================= v1 CODE
// import ArtPiecePreview from "../ArtPiecePreview";

// export default function ArtPieces({ pieces }) {
//   return (
//     <>
//       <h2>Art Pieces List</h2>
//       {pieces.map((piece) => (
//         <div key={piece.slug}>
//           <ArtPiecePreview
//             image={piece.imageSource}
//             title={piece.name}
//             artist={piece.artist}
//           />
//         </div>
//       ))}
//     </>
//   );
// }
