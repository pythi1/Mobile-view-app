import React from "react";

function Footer() {
  return (
    <div>
      <div className="mx-auto lg:w-2/5 w-[358px] flex flex-col items-center text-gray-500 justify-center p-6 pb-2 border-t-2 border-gray-300">

        <div className="flex items-center" >
          <span className="font-bold text-xl">Spark</span>{" "}
          <img src="/paws.png" className="w-4 h-4" alt="paws" />
          <span>nomy</span>
        </div>
        <div>
            <p>
                sparking the creator economy
            </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
