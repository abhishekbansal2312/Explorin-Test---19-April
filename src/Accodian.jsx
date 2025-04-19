import React, { useState } from "react";

export default function Accodian() {
  const [data, setData] = useState([
    { ques: "first question", ans: "second Question", isOpened: false, id: 1 },
    { ques: "first question", ans: "second Question", isOpened: false, id: 2 },
    { ques: "first question", ans: "second Question", isOpened: false, id: 3 },
    { ques: "first question", ans: "second Question", isOpened: false, id: 4 },
  ]);
  const handleClick = (id) => {
    setData((prev) => {
      return prev.map((ques) => {
        return ques.id == id
          ? { ...ques, isOpened: !ques.isOpened }
          : { ...ques, isOpened: false };
      });
    });
  };
  return (
    <div>
      {data.map((question) => (
        <div key={question.id}>
          <span>{question.ques}</span>
          <button onClick={() => handleClick(question.id)}>{" v"}</button>
          {question.isOpened && <>{question.ans}</>}
        </div>
      ))}
    </div>
  );
}
