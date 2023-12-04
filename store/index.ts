import { FieldProps } from "@/hooks/useSubmitData";
import {
  getPokemonByIdRoute,
  getPokemonImage,
  getPokemonsRoute,
  postDataApi,
} from "@/routes/api";
import { QueryClient } from "@tanstack/query-core";
import { ReactComponentElement, cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

export const postDataJsonPlaceholder = async (data: FieldProps) => {
  try {
    const res = await fetch(postDataApi(), {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      // If the response is successful, return the response
      return res;
    } else {
      const errorBody = await res.json();
      const errorMessage = errorBody.message || "Unknown error";
      // If the response is not successful, throw an error with the status text
      throw new Error(errorMessage);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    throw error;
  }
};

export const getIdFromURL = (url: string) => {
  const convertedUrl = url.split("/");

  return convertedUrl[convertedUrl.length - 2];
};

export const getPokemonByID = async (id: string) => {
  const data = await fetch(getPokemonByIdRoute(id)).then((res) => res.json());

  return {
    ...data,
    id,
    imageUrl: getPokemonImage(id),
  };
};
export const getPokemons = async ({
  offset,
  limit,
}: {
  offset: number;
  limit?: number;
}) => {
  const dataList = await fetch(
    getPokemonsRoute({ offset: offset, limit: limit })
  ).then((res) => res.json());

  const results = dataList?.results?.map(
    ({ url, name }: { url: string; name: string }) => ({
      name,
      url,
      id: getIdFromURL(url),
    })
  );
  return { ...dataList, results };
};
