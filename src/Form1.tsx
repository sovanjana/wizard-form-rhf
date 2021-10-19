import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default ({
  onSubmit,
  store,
  actionComponent
}: {
  store: { test1: string; test2: string; test3: string };
  onSubmit: SubmitHandler<{ test1: string }>;
  actionComponent: JSX.Element;
}) => {
  const { handleSubmit, register } = useForm({
    defaultValues: store
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test1" placeholder="form1" ref={register} />
      {actionComponent}
    </form>
  );
};
