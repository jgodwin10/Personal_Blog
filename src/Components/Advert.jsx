import React from "react";
import { useFetchPostQuery } from "../App/PostSlice";

const Advert = () => {
  const { data, isSuccess } = useFetchPostQuery();

  if (isSuccess) {
    console.log(data);

    return <div className="advert"> </div>;
  }
};

export default Advert;
