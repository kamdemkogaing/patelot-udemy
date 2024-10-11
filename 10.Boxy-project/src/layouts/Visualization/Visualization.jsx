import React from "react";
import { useSelector } from "react-redux";
import getBoxShadowValue from "../../utils/getBoxShadowValue";
import ModalBtn from "./Modal/ModalBtn";

export default function Visualization() {
  const shadowValues = useSelector((state) => state.shadows);
  const boxProperties = useSelector((state) => state.boxProperties);

  return (
    <div className="flex flex-col p-5 ml-10 lg:ml-28">
      <ModalBtn />
      <div
        style={{
          boxShadow: `${getBoxShadowValue(shadowValues).slice(0, -1)}`,
          borderRadius: `${boxProperties[0].value}px`,
          height: `${boxProperties[1].value}px`,
          width: `${boxProperties[2].value}px`,
          backgroundColor: `${boxProperties[3].value}px`,
        }}
        className="w-[250px] h-[250px] bg-white rounded-xl"
      ></div>
    </div>
  );
}
