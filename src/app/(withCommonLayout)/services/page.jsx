import React from "react";


const getAllServices = async () => {
  // const getParams = new URLSearchParams(searchParams).toString();
  // console.log(getParams);

  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services`
  );
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 3000)
  // );
  const data = await res.json();
  return data;
};
const servicesPage =async () => {
  const services = await getAllServices();
  console.log(services)
  return <div>ssssss</div>;
};

export default servicesPage;
