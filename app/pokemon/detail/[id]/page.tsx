import { getQueryClient, getPokemonByID } from "@/store";
import Hydrate from "@/components/Hydrate";
import PokemonDetails from "@/components/PokemonDetails";
import { dehydrate } from "@tanstack/query-core";
import Link from "next/link";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonByID(id),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return (
    <main>
      <Hydrate state={dehydratedState}>
        <section>
          <Link href="/">⬅️ Back</Link>
          <PokemonDetails id={id} />
        </section>
      </Hydrate>
    </main>
  );
};

export default PokemonPage;
