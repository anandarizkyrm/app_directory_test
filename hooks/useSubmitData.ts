import { useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { postDataJsonPlaceholder } from "../store";

export interface FieldProps {
  title: string;
  userId: string;
}

function useSubmitData() {
  const {
    control,
    watch,
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldProps>({
    defaultValues: {
      title: "",
      userId: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: postDataJsonPlaceholder,
    onSuccess() {
      toast.success("Success!");
      reset({
        title: "",
        userId: "",
      });
    },

    onError(error: Error) {
      toast.error(error.message);
    },

    onMutate() {
      toast.loading("Loading...", { id: "loading-toast" });
    },
    onSettled() {
      toast.dismiss("loading-toast");
    },
  });
  const onSubmit = (data: FieldProps) => {
    mutate(data);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    register,
    setValue,
  };
}

export default useSubmitData;
