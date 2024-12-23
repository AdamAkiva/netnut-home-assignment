import {
  AddonsCheckbox,
  FormFooter,
  FormTitle,
  Sidebar,
} from "@/components/index.ts";

/**********************************************************************************/

export default function Step3() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-2/3 h-1/3">
        <Sidebar />
        <div className="flex flex-col w-2/3 p-6 gap-2">
          <FormTitle
            title="Pick add-ons"
            desc="Add-ons help enhance your gaming experience"
          />
          <div className="flex flex-col">
            <AddonsCheckbox
              title="Online service"
              desc="Access to multiplayer games"
              price={1}
            ></AddonsCheckbox>
            <AddonsCheckbox
              title="Larger storage"
              desc="Extra 1TB of cloud save"
              price={2}
            ></AddonsCheckbox>
            <AddonsCheckbox
              title="Customizable profile"
              desc="Custom theme on your profile"
              price={2}
            ></AddonsCheckbox>
          </div>
          <FormFooter link="/step4" btnText="Next Step" />
        </div>
      </div>
    </div>
  );
}
