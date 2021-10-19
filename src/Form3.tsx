import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default ({
  onSubmit,
  store,
  actionComponent
}: {
  store: { test1: string; test2: string; test3: string };
  onSubmit: SubmitHandler<{ test3: string }>;
  actionComponent: JSX.Element;
}) => {
  const { handleSubmit, register } = useForm({
    defaultValues: store
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test3" placeholder="form3" ref={register} />
      {actionComponent}
    </form>
  );
};
