"use client";

import { useQuery } from "@tanstack/react-query";
import { getIdFromURL, getPokemons } from "../store";
import Link from "next/link";
import { useState } from "react";
import { PokemonsDataType } from "../store/type";

const Pokemons = () => {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["pokemons", offset, limit],
    queryFn: () => getPokemons({ offset: offset, limit: limit }),
  });

  const handleFetchMore = () => {
    setLimit(limit + 10);
  };

  return (
    <div>
      <button onClick={handleFetchMore}>Fetch More</button>
      <ul>
        {!isFetching
          ? data?.results?.map(
              ({ name, imgUrl, id }: PokemonsDataType, index: number) => (
                <li key={index}>
                  <Link href={`/pokemon/detail/${id}`}>
                    {name}
                    {"->"}
                  </Link>
                </li>
              )
            )
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Pokemons;
