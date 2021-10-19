import { Button } from "@material-ui/core";
import * as React from "react";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

import "./styles.css";

export default function App() {
  const [store, setStore] = React.useState({ test1: "", test2: "", test3: "" });
  const pageCount = 3;
  const [page, setPage] = React.useState(1);

  const onSubmit = (
    data: Partial<{ test1: string; test2: string; test3: string }>
  ) => {
    setStore({ ...store, ...data });
    setPage((prevState) =>
      prevState !== pageCount ? prevState + 1 : prevState
    );
  };

  console.log(store);

  const getFormPage = (pageNum: number) => {
    const formProps = {
      onSubmit,
      store,
      actionComponent: (
        <Button variant="contained" color="primary" type="submit">
          {pageNum < pageCount ? "Next" : "Submit"}
        </Button>
      )
    };

    var arr = ["a", "b"];

    switch (arr.toString()) {
      case arr.toString():
        console.log("ok");
    }

    switch (pageNum) {
      case 1:
        return <Form1 {...formProps} />;
      case 2:
        return <Form2 {...formProps} />;
      case 3:
        return <Form3 {...formProps} />;
      default:
        break;
    }
  };

  return <div>{getFormPage(page)}</div>;
}
