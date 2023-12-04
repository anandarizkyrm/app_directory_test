"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemonByID } from "@/store";
import PokemonCard from "./PokemonCard";

const PokemonDetails = ({ id }: { id: string }) => {
  const { data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonByID(id),
  });
  return (
    <div>
      <h1>Details of Pokemon</h1>
      <PokemonCard
        name={data?.name}
        imgUrl={data?.imageUrl}
        weight={data?.weight}
        height={data?.height}
      />
    </div>
  );
};

export default PokemonDetails;
