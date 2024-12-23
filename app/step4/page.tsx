import {
  AddonSummary,
  FormFooter,
  FormTitle,
  Sidebar,
} from "@/components/index.ts";

/**********************************************************************************/

type Props = {
  title: string;
  desc: string;
  btnText: string;
  plan: { type: string; price: number };
  billing: "month" | "year";
  addons?: { type: string; price: number }[];
};

/**********************************************************************************/

function addAddons(addons: NonNullable<Props["addons"]>, billing: "mo" | "yr") {
  return addons.map((addon, i) => {
    return (
      <AddonSummary
        key={i}
        type={addon.type}
        price={`+$${addon.price}/${billing}`}
      />
    );
  });
}

function calculatePrice(plan: Props["plan"], addons: Props["addons"]) {
  if (!addons || !addons.length) {
    return plan.price;
  }

  return (
    plan.price +
    addons.reduce((sum, { price }) => {
      return sum + price;
    }, 0)
  );
}

export default function Step4({ btnText, plan, billing, addons }: Props) {
  const billingTime = billing === "month" ? "mo" : "yr";

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-2/3 h-1/3">
        <Sidebar />
        <div className="flex flex-col w-2/3 p-6 gap-2">
          <FormTitle
            title="Finishing up"
            desc="Double-check everything looks OK before confirming"
          />
          <div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">
                    {plan.type} ({billing === "month" ? "Monthly" : "Yearly"})
                  </p>
                  <a href="#" className="text-blue-500 underline text-sm">
                    Change
                  </a>
                </div>
                <p className="font-bold text-gray-800">
                  ${plan.price}/{billingTime}
                </p>
              </div>
              <hr className="my-4" />
              <div className="space-y-2">{addAddons(addons!, billingTime)}</div>
            </div>
            <div className="flex justify-between items-center mt-6 text-gray-800 font-bold">
              <span>Total (per {billing})</span>
              <span className="text-blue-500">
                +${calculatePrice(plan, addons)}/{billingTime}
              </span>
            </div>
          </div>
          <FormFooter link="/step5" btnText={btnText} />
        </div>
      </div>
    </div>
  );
}
