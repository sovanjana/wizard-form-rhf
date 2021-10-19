import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default ({
  onSubmit,
  store,
  actionComponent
}: {
  store: { test1: string; test2: string; test3: string };
  onSubmit: SubmitHandler<{ test2: string }>;
  actionComponent: JSX.Element;
}) => {
  const { handleSubmit, register } = useForm({
    defaultValues: store
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test2" placeholder="form2" ref={register} />
      {actionComponent}
    </form>
  );
};
