import { useState } from "react";
import Button from "./component/Button";

function Background() {
  const [color, setColor] = useState("yellow");
  const colors = ["red", "blue", "purple", "olive"];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((c) => (
            <Button  key={c} clr={c} Clk={() => setColor(c)} />
          ))}
        </div>
      </div>
    // </div>
  );
}

export default Background;
