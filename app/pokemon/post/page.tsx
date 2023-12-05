"use client";

import Link from "next/link";
import useSubmitData from "@/hooks/useSubmitData";
import { Controller } from "react-hook-form";
import Hydrate from "@/components/Hydrate";

const PostPage = ({ params }: { params: { id: string } }) => {
  const { control, handleSubmit, onSubmit, register } = useSubmitData();
  return (
    <main>
      <section>
        <Link href="/">⬅️ Back</Link>
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => {
            return (
              <input
                placeholder="Title"
                type="text"
                {...register("title")}
                {...field}
              />
            );
          }}
        />

        <Controller
          control={control}
          name="userId"
          render={({ field }) => {
            return (
              <input
                placeholder="User Id"
                type="number"
                {...register("userId")}
                {...field}
              />
            );
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PostPage;
