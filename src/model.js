import React from "react";

const model = () => {
  return (
    <>
      <div
        className="relative z-20 w-full bg-zinc-500"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-zinc-500 bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center  ">
            <div className="w-full max-w-[290px] transform overflow-hidden rounded-lg bg-white shadow-xl transition-all ">
              <div className="relative px-[32px] py-[24px]">
                <div className="flex flex-col max-w-[350px] items-center justify-center w-full">
                  <h1 className="pt-2 font-thin text-black text-[18px] ">
                    Congratulation You Win The Game
                  </h1>
                  <a href="new-puzzle-app.vercel.app/">
                    <button className="border-black w-24 mt-2 rounded-md bg-transparent cursor border-[1px]">
                      back
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default model;
