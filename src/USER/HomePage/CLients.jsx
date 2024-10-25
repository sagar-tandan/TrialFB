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

const Clients = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto py-[6px] bg-[#191919]">
      <div className="w-full bg-[#141414] border-t-[2px] border-b-[2px] border-[#242424] p-3 sm:p-4">
        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {clientsCollection.map((client, index) => (
            <div
              key={index}
              className="relative group border-[2px] border-[#202020] flex flex-col items-center justify-center px-3 py-6 gap-4 rounded-md bg-[#1a1a1a] transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800"
            >
              {/* Image container with hover effect */}
              <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <img
                  className="w-16 h-16 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={client.image}
                  alt={client.name}
                  loading="lazy"
                />
              </div>

              {/* Client name */}
              <h2 className="font-medium text-center text-sm sm:text-base transition-colors duration-300 group-hover:text-purple-400">
                {client.name}
              </h2>

              {/* Arrow icon with hover animation */}
              <button
                onClick={() => handleClick(client.link)}
                className="absolute top-0 right-0 m-3 p-1 rounded-full transition-all duration-300 text-[#3e3e3e] hover:text-purple-400 hover:bg-purple-400/10 group-hover:text-purple-400"
                aria-label={`Visit ${client.name}'s website`}
              >
                <MoveUpRight
                  size={24}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
