import { useActionData, useNavigate, useParams } from "react-router-dom";
import { Form } from "react-router-dom";

import LabelInput from "./LabelInput";
import { backendApi } from "../../services/backendUrl";

export default function AuthPage() {
  return (
    <>
      <div
        className={`absolute left-0 top-16 -z-20 h-dvh w-full bg-[url('/hero/hero4.jpg')] bg-cover bg-center`}
      >
        <div className="h-full w-full bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="flex h-dvh w-full items-center justify-center px-6">
        <AuthForm />
      </div>
    </>
  );
}

export function AuthForm() {
  const authType = useParams().type;

  const formSubmitMessage = useActionData() || { error: "", success: "" };

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[500px] bg-white p-4">
      <div className="mb-4 text-center">
        <h1 className="mb-1 font-montserrat text-2xl font-bold text-[#2C3E50]">
          INVLOGIC
        </h1>
        <p className="font-montserrat text-sm font-medium text-[#FF6F3C]">
          Join Us Today
        </p>
      </div>

      <Form method="POST" className="flex w-full flex-col justify-center gap-4">
        {formSubmitMessage.error !== "" && (
          <label className="rounded-sm bg-red-100 text-center text-red-600">
            {formSubmitMessage.error}
          </label>
        )}
        {formSubmitMessage.success !== "" && (
          <label className="rounded-sm bg-green-100 text-center text-green-600">
            {formSubmitMessage.success}
          </label>
        )}
        <input type="hidden" name="formType" value={authType} />

        {authType === "signup" && (
          <>
            <LabelInput
              labelText="First Name"
              inputType="text"
              inputName="firstName"
            />
            <LabelInput
              labelText="Last Name"
              inputType="text"
              inputName="lastName"
            />
            <LabelInput
              labelText="Username"
              inputType="text"
              inputName="username"
            />
            <LabelInput labelText="Email" inputType="email" inputName="email" />
          </>
        )}

        {authType === "login" && (
          <LabelInput
            labelText="Username or Email"
            inputType="text"
            inputName="usernameOrEmail"
          />
        )}

        <LabelInput
          labelText="Password"
          inputType="password"
          inputName="password"
        />

        {authType === "signup" && (
          <LabelInput
            labelText="Confirm Password"
            inputType="password"
            inputName="confirmPassword"
          />
        )}

        {authType === "login" && (
          <span
            className="cursor-pointer text-sm font-semibold text-[#FF6F3C] transition-all hover:text-[#2C3E50]"
            onClick={() => navigate("/auth/signup")}
          >
            Create a new account?
          </span>
        )}

        {authType === "signup" && (
          <span
            className="cursor-pointer text-sm font-semibold text-[#FF6F3C] transition-all hover:text-[#2C3E50]"
            onClick={() => navigate("/auth/login")}
          >
            Create a new account?
          </span>
        )}

        <button
          type="submit"
          className="mt-2 rounded-sm bg-[#00B8D9] p-1 font-semibold text-white transition-all hover:bg-[#39cce6]"
        >
          {authType === "signup" ? "Sign Up" : "Login"}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  try {
    // formData() reads the body of the request interface and converts it to a FormData object
    const formData = await request.formData();

    // convert this FormData object into a JS object from the key-value pairs of the FormData
    const formEntries = Object.fromEntries(formData);

    const message = { error: "", success: "" };

    // signup action
    if (formEntries.formType === "signup") {
      const response = await fetch(`${backendApi}/api/auth/signup`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formEntries),
      });

      const data = await response.json();

      if (data.statusCode === 201) {
        message.error = "";
        message.success = data.message;
      } else {
        message.success = "";
        message.error = data.message;
      }
    }

    // login action
    if (formEntries.formType === "login") {
      const response = await fetch(`${backendApi}/api/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formEntries),
      });

      const data = await response.json();

      if (data.statusCode === 200) {
        message.error = "";
        message.success = data.message;
      } else {
        message.success = "";
        message.error = data.message;
      }
    }

    return message;
  } catch (error) {
    console.log(error);
  }
}
