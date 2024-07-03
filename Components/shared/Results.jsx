import React, { useState } from "react";
import Link from "next/link.js";
import { Telegram, WhatsApp } from "@mui/icons-material";

const ResultsComponent = ({ result, shuffledQuestions }) => {
  return (
    <div className="flex flex-col md:flex-row mx-auto w-full p-5 bg-white/10 border border-white dark:border-white shadow-mdtransform transition-transform duration-100 rounded-lg justify-between items-center">
      <div className="flex flex-col w-full">
        <h3 className="text-[30px] font-bold">Results</h3>
        <p className="text-[30px] text-[blue] font-bold">
          Overall {(result.score / 25) * 100}%
        </p>
        <p className="text-[20px] font-bold">
          Total Questions:{" "}
          <span className="text-binance_green">{shuffledQuestions.length}</span>
        </p>
        <p className="text-[20px] font-bold">
          Total Score: <span className="text-[blue]">{result.score}</span>
        </p>
        <p className="text-[20px] font-bold">
          Correct Answers:{" "}
          <span className="text-[green]">{result.correctAnswers}</span>
        </p>
        <p className="text-[20px] font-bold mb-4">
          Wrong Answers:{" "}
          <span className="text-[red]">{result.wrongAnswers}</span>
        </p>
        <Link href={"/"}>
          <button className="bg-white/2 button w-full hover:bg-binance_green text-white font-bold shadow-mdtransform">
            Restart
          </button>
        </Link>
      </div>
      <br />
      <div className="md:w-[90%] text-[15px] text-center">
        <a href="https://t.me/brainbash_io">
          Keep pushing forward, BrainBashers! 🌟 Each new attempt brings fresh
          opportunities to learn and grow. Share your progress and any questions
          you have with the group.{" "}
          <button className="bg-white/2 button w-[190px] hover:bg-binance_green text-white font-bold shadow-mdtransform">
            Join us via... <Telegram className="animate-bounce" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ResultsComponent;
