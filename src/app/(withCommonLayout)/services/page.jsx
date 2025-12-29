import React from "react";
import ServiceCard from "./_component/ServiceCard";
import Container from "@/components/shared/Container";
import ServicesSearching from "./_component/ServicesSearching";

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
const servicesPage = async () => {
  const services = await getAllServices();
  console.log(services);
  return (
    <div>
      <Container>
        <h2 className="font-bold text-3xl text-purple-500 mb-4">
          Services Page
        </h2>

        {/* Searching */}
        <ServicesSearching />

        {services?.meta?.total === 0 ? (
          <div className="font-bold text-4xl text-purple-500 text-center my-4">
            No data found
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {services?.data?.map((service) => {
              return <ServiceCard service={service} key={service?._id} />;
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default servicesPage;
