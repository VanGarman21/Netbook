import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUpForm from "@/pages/signup";

test("submits the form with valid inputs", async () => {
  render(<SignUpForm />);

  const usernameInput = screen.getByLabelText("Username");
  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");
  const repeatPasswordInput = screen.getByLabelText("Repeat Password");
  const submitButton = screen.getByRole("button", { name: "SignUp" });

  fireEvent.change(usernameInput, { target: { value: "armand" } });
  fireEvent.change(emailInput, { target: { value: "armand@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.change(repeatPasswordInput, { target: { value: "password123" } });
  fireEvent.click(submitButton);
});
