import { useActionData, useParams } from "react-router-dom";
import { Form } from "react-router-dom";

import LabelInput from "./LabelInput";
import { backendApi } from "../../services/backendUrl";

export default function Authentication() {
  const authType = useParams().type;

  const formSubmitMessage = useActionData() || { error: "", success: "" };

  return (
    <div className="">
      <h1 className=" font-montserrat font-bold text-2xl">INVLOGIC</h1>
      <Form method="POST">
        {formSubmitMessage.error !== "" && (
          <label>{formSubmitMessage.error}</label>
        )}
        {formSubmitMessage.success !== "" && (
          <label>{formSubmitMessage.success}</label>
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
              labelText="User Name"
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

        <button type="submit">Sign Up</button>
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

      if (data.statusCode === 201) {
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
