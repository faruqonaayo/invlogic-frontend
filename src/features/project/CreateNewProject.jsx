import { Form } from "react-router-dom";
import Button from "../../ui/Button";

export default function CreateNewProject() {
  return (
    <div className="flex h-dvh items-start justify-center p-4">
      <Form
        method="POST"
        className="flex w-full max-w-[500px] flex-col gap-4 border-2 border-[#2C3E50] bg-[#efefef] px-4 py-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold tracking-wide">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            className="h-auto w-full rounded-sm border-[1px] border-gray-500 bg-white px-2 py-1 text-sm font-medium focus:outline-dashed focus:outline-1 focus:outline-[#FF6F3C]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold tracking-wide">
            Description
          </label>
          <textarea
            type="text"
            name="projectName"
            className="h-36 w-full rounded-sm border-[1px] border-gray-500 bg-white px-2 py-1 text-sm font-medium focus:outline-dashed focus:outline-1 focus:outline-[#FF6F3C]"
          ></textarea>
        </div>

        <Button className="mt-2 rounded-sm bg-[#00B8D9] p-1 font-semibold tracking-wide text-white transition-all hover:bg-[#39cce6]">
          Create Project
        </Button>
      </Form>
    </div>
  );
}
