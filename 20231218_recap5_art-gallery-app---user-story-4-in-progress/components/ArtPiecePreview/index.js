import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image
        src={image}
        alt={`${title} by ${artist}`}
        layout="intrinsic" // instead of layout="responsive"
        width={240}
        height={240}
        objectFit="cover"
      />
      <p>
        "{title}" by {artist}
      </p>
    </div>
  );
}

// ======================================= v1 CODE
// import Image from "next/image";

// export default function ArtPiecePreview({ image, title, artist }) {
//   return (
//     <div>
//       <Image
//         src={image}
//         alt={`${title} by ${artist}`}
//         layout="intrinsic" // instead of layout="responsive"
//         width={240}
//         height={240}
//         objectFit="cover"
//       />
//       <p>
//         "{title}" by {artist}
//       </p>
//     </div>
//   );
// }
