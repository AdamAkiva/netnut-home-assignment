import Bulletin from "./bulletin.tsx";
import Step from "./step.tsx";

/**********************************************************************************/

export default function () {
  return (
    <div className="flex-col w-1/3 bg-sidebar text-white p-6">
      <div className="flex items-center space-x-4 my-3">
        <Bulletin text="1" />
        <Step upperText="step 1" lowerText="your info" />
      </div>
      <div className="flex items-center space-x-4 my-6">
        <Bulletin text="2" />
        <Step upperText="step 2" lowerText="select plan" />
      </div>
      <div className="flex items-center space-x-4 my-6">
        <Bulletin text="3" />
        <Step upperText="step 3" lowerText="add-ons" />
      </div>
      <div className="flex items-center space-x-4 my-6">
        <Bulletin text="4" />
        <Step upperText="step 4" lowerText="summary" />
      </div>
    </div>
  );
}
