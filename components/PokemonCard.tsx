import Image from "next/image";
import React from "react";

const PokemonCard = ({
  name,
  imgUrl,
  weight = null,
  height = null,
}: {
  name: string;
  imgUrl: string;
  weight?: string | null;
  height?: string | null;
}) => {
  return (
    <div>
      <div>
        {imgUrl && <Image width={120} height={120} src={imgUrl} alt={name} />}
        <h5>{name}</h5>
        {weight && <p>Weight: {weight}</p>}
        {height && <p>Height: {height}</p>}
      </div>
    </div>
  );
};

export default PokemonCard;
