import React from "react";


const Advert = () => {
  const { data, isSuccess } = useFetchPostQuery();

  if (isSuccess) {
    const datas = data.slice(0, 5);

    console.log(datas);


    return <div className="advert"> </div>;
  }
};

export default Advert;
