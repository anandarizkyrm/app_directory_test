import styles from "./page.module.css";
import Link from "next/link";
import { getPokemons, getQueryClient } from "../store";
import { dehydrate } from "@tanstack/query-core";
import Hydrate from "@/components/Hydrate";
import Pokemons from "@/components/Pokemons";
export default async function Home() {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons({ offset: 0, limit: 10 }),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return (
    <main className={styles.main}>
      <div>
        <Link href="/pokemon/post">To Mutation Page {"-->"}</Link>
        <Hydrate state={dehydratedState}>
          <Pokemons />
        </Hydrate>
      </div>
    </main>
  );
}
