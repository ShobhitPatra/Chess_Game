import React from "react";

const Hero = () => {
  return (
    <div className="bg-black h-screen md:pt-56">
      {/* heading */}
      <div className="flex-col justify-center items-center space-y-6">
        <div className="text-center">
          <span className="md:text-lg text-slate-300 ">Welcome to </span>
        </div>
        <div className="text-center">
          <span className="span md:text-7xl font-extrabold text-slate-50">
            King's <span className="text-green-500">Arena</span>
          </span>
        </div>
        <div className="text-center">
          <span>
            Enter the realm of strategy and outsmart your opponents.Rise to
            <br></br>claim your crown in the ultimate chess battleground.
          </span>
        </div>
      </div>
      {/* image and buttons */}
      <div>
        <div className="flex justify-center ">
          <img className="md:w-1/5 rounded-md mx-6" src="chessboard.jpeg"></img>

          <div className="flex-col  ">
            <div className="pt-8 mb-4">
              <img
                className="md:w-44 md:p-4 animate-bounce "
                src="chess-solid.svg"
              ></img>
            </div>

            <button className="btn btn-success my-2  w-full  md:text-2xl text-slate-200">
              Play Random
            </button>

            <button className="btn btn-success my-2 w-full  md:text-2xl text-slate-200">
              Play Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
