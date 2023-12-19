import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ pieces }) {
  function getRandomPiece() {
    if (!pieces || pieces.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }

  const randomPiece = getRandomPiece();

  if (!randomPiece) {
    return null; // Return null or handle the case when there are no pieces
  }

  return (
    <>
      {/* <h2>Spotlight</h2> */}
      <div key={randomPiece.slug}>
        <ArtPiecePreview
          image={randomPiece.imageSource}
          title={randomPiece.name}
          artist={randomPiece.artist}
        />
      </div>
    </>
  );
}

// ======================================= v1 CODE
// import ArtPiecePreview from "../ArtPiecePreview";

// export default function Spotlight({ pieces }) {
//   function getRandomPiece() {
//     if (!pieces || pieces.length === 0) {
//       return null;
//     }
//     const randomIndex = Math.floor(Math.random() * pieces.length);
//     return pieces[randomIndex];
//   }

//   const randomPiece = getRandomPiece();

//   if (!randomPiece) {
//     return null; // Return null or handle the case when there are no pieces
//   }

//   return (
//     <>
//       {/* <h2>Spotlight</h2> */}
//       <div key={randomPiece.slug}>
//         <ArtPiecePreview
//           image={randomPiece.imageSource}
//           title={randomPiece.name}
//           artist={randomPiece.artist}
//         />
//       </div>
//     </>
//   );
// }
