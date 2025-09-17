import React from "react";

function Header() {
  return (
    <div className="bg-gradient-to-b bg-[#914d6c] lg:w-1/5 lg:mx-auto w-[377px] p-1 pb-7 sticky top-0 z-0 -mb-5">
      <div className="flex justify-between p-5">
        <div className="text-2xl font-semibold">
          <h2>Dashboard</h2>
        </div>

        <div className="rounded-full w-12">
          <img src="/profile.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
