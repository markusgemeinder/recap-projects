[Proposal ChatGPT](https://chat.openai.com/c/c343c3d2-1f83-49c8-8f50-f948527ad03e)
[Whole chat ChatGPT](https://chat.openai.com/share/062a6b8f-f3c5-4db8-8902-503511897c71)

### Note

Asked ChatGPT how to solve new ArtPieceDetails page, one suggestion with additional Component ArtPiece - one without. See chat. Not happy with the idea, seems to confusing.

### Code

```js
// ArtPiece.js
import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

const ArtPiece = ({ piece, onClick }) => (
  <div onClick={onClick}>
    <ArtPiecePreview
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year} // Add additional props as needed
      genre={piece.genre} // Add additional props as needed
    />
  </div>
);

export default ArtPiece;
```

```js
// ArtPiecePreview.js
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
```

```js
// Spotlight.js
import React from "react";
import ArtPiece from "./ArtPiece";

export default function Spotlight({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  if (!randomPiece) {
    return null;
  }

  return (
    <>
      {/* <h2>Spotlight</h2> */}
      <ArtPiece piece={randomPiece} />
    </>
  );
}
```

```js
// ArtPieces.js
import React from "react";
import ArtPiece from "./ArtPiece";

const ArtPieces = ({ pieces }) => (
  <>
    {/* <h2>Art Pieces List</h2> */}
    {pieces.map((piece) => (
      <div key={piece.slug}>
        <ArtPiece
          piece={piece}
          onClick={() => {
            // Handle click for ArtPiece (e.g., show details)
            console.log("ArtPiece Clicked:", piece);
          }}
        />
      </div>
    ))}
  </>
);

export default ArtPieces;
```

```js
// ArtPieceDetails.js
import React from "react";
import Image from "next/image";

const ArtPieceDetails = ({ piece, onClose }) => (
  <div>
    <Image
      src={piece.imageSource}
      alt={`${piece.name} by ${piece.artist}`}
      layout="intrinsic"
      width={240}
      height={240}
      objectFit="cover"
    />
    <h2>{piece.name}</h2>
    <p>By {piece.artist}</p>
    <p>Year: {piece.year}</p>
    <p>Genre: {piece.genre}</p>
    <button onClick={onClose}>Back</button>
  </div>
);

export default ArtPieceDetails;
```
