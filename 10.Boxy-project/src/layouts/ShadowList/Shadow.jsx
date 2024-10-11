import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import chevron from "../../assets/Chevron.svg";
import { removeShadow } from "../../features/shadows";
import ShadowCheckbox from "./ShadowCheckbox";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowRange from "./ShadowRange";

export default function Shadow({ panelNumber, shadow }) {
  // state
  const [toggleShadow, setToggkeShadow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (panelNumber === 1) {
      setToggkeShadow(true);
    }
  }, []);

  const shadowInputs = shadow.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    }
  });

  return (
    <li className="bg-gray-50 border-b border-gray-3">
      <button
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
        onClick={() => setToggkeShadow(!toggleShadow)}
      >
        <span>Shadow {panelNumber}</span>
        <img
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
          className="font-bold w-5"
          src={chevron}
          alt="chevron"
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4">
            <ShadowCheckbox name={"active"} shadowID={shadow.id} />
            <ShadowCheckbox name={"inset"} shadowID={shadow.id} />
            <button
              onClick={() => dispatch(removeShadow(shadow.id))}
              className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3"
            >
              Remove
            </button>
          </div>
          <div className="px-6 py-4">{shadowInputs}</div>
        </>
      )}
    </li>
  );
}
