import React from "react";
import ConversationItems from "./ui/ConversationItems";
const SideNavbar = () => {
  return (
    <div className="bg-blue-600 h-screen w-65 pl-4 flex flex-col">
      <div>
        <h1 className="text-3xl pl-5 pt-3 font-bold text-white">Chatapp</h1>
        <div className="mt-3 space-y-3">
          <ConversationItems />
          <ConversationItems />
          <ConversationItems />
          <ConversationItems />
          <ConversationItems />
        </div>
      </div>
      <div className="m-auto bg-slate-900 text-white py-2 px-18 rounded-2xl transition-all duration-[400ms] hover:bg-white hover:text-black hover:font-semibold">
        {" "}
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default SideNavbar;
