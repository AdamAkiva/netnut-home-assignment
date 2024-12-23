import {
  FormFooter,
  FormTitle,
  InputField,
  Sidebar,
} from "@/components/index.ts";

/**********************************************************************************/

export default function Step1() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[800px] h-[500px]">
        <Sidebar />
        <div className="flex flex-col w-2/3 p-6">
          <FormTitle
            title="Personal info"
            desc="Please provide your name, email address, and phone number"
          />
          <form className="space-y-5">
            <InputField
              title="Name"
              id="name"
              type="text"
              placeholder="e.g Stephen King"
            />
            <InputField
              title="Email address"
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
            />
            <InputField
              title="Phone number"
              id="phone"
              type="tel"
              placeholder="e.g. +1 234 567 890"
            />
          </form>
          <FormFooter link="/step2" btnText="Next page" />
        </div>
      </div>
    </div>
  );
}
