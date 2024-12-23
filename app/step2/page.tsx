import {
  Card,
  FormFooter,
  FormTitle,
  Sidebar,
  Toggle,
} from "@/components/index.ts";

/**********************************************************************************/

export default function Step2() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-2/3 h-1/3">
        <Sidebar />
        <div className="flex flex-col w-2/3 p-6 gap-2">
          <FormTitle
            title="Select your plan"
            desc="You have the option of monthly or yearly billing"
          />
          <div className="flex flex-col">
            <div className="flex gap-8">
              <Card
                src="/images/icon-arcade.svg"
                alt="Arcade plan"
                type="Arcade"
                price={9}
              />
              <Card
                src="/images/icon-advanced.svg"
                alt="Advanced plan"
                type="Advanced"
                price={12}
              />
              <Card
                src="/images/icon-pro.svg"
                alt="Pro plan"
                type="Pro"
                price={15}
              />
            </div>
            <div className="mt-6 self-center">
              <Toggle leftText="Monthly" rightText="Yearly" />
            </div>
          </div>
          <FormFooter link="/step3" btnText="Next page" />
        </div>
      </div>
    </div>
  );
}
