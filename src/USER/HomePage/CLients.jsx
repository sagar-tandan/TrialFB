import React from "react";
import { MoveUpRight } from "lucide-react";

const clientsCollection = [
  {
    name: "Client 1",
    image:
      "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Client 1",
    image:
      "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Client 1",
    image:
      "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Client 1",
    image:
      "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CLients = () => {
  const handleClick = (link) => {
    console.log(link);
  };
  return (
    <div className="w-full flex bg-[#191919] py-[6px] z-10">
      <div className="w-full bg-[#141414] border-t-[2px] border-b-[2px] border-[#242424] p-3 flex gap-3">
        {clientsCollection.map((clients, index) => (
          <div
            key={index}
            className="relative w-full border-[2px] border-[#202020] flex flex-col items-center justify-center px-3 py-6 gap-4 rounded-md bg-[#1a1a1a]"
          >
            <img
              className="w-[60px] h-[60px] rounded-full object-cover"
              src={clients.image}
              alt="logo"
            />
            <h1 className="font-medium">{clients.name}</h1>
            <MoveUpRight
              onClick={() => handleClick(clients.link)}
              size="30px"
              className="absolute top-0 right-0 m-3 text-[#3e3e3e] cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CLients;
