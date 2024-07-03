import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import img from "../../assets/avatar/av-2.svg";
import Avatar from "react-avatar";

const GreetingMessage = () => {
  // const user = auth.currentUser;
  const [greeting, setGreeting] = useState("");
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const context = useContext(myContext);
  const { currentUser, fetchUser, mode } = context;

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const currentHour = now.getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };

    getCurrentTime();
  }, []);

  return (
    <div className="flex gap-3 ml-5 text-start items-center justify-start">
      {currentUser && currentUser.photoURL !== "" ? (
        <Avatar
          name={currentUser && currentUser.displayName}
          color={currentUser && currentUser.ImgBG}
          size="50"
          round
        />
      ) : (
        <img
          className="w-[50px] h-[50px] bg-primary-A1 border1 rounded-full"
          src={currentUser.photoURL}
        />
      )}
      <div className="" style={{ color: mode === "dark" ? "white" : "" }}>
        <div className="text-[16px] font-bold">{greeting}</div>
        <div className="flex text-[14px]">
          {currentUser && currentUser.displayName ? (
            <div className="flex items-center justify-center">
              {currentUser.displayName}
              {currentUser.verified !== false && (
                <img className="w-5 h-5" src="/M/checklist_b.png" />
              )}
            </div>
          ) : (
            <div>Welcome!</div>
          )}
        </div>
        {/* {article && (
          <>
            {article.createdBy}
          </>
        )} */}
      </div>
    </div>
  );
};

export default GreetingMessage;
