import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";

describe("Form", () => {
  test(`Input change is handled by handleFormInput when field text changes`, () => {
    const inputFormMock = jest.fn();
    render(
      <Form
        formDonor=""
        formAmount="100"
        formMessage=""
        handleFormInput={inputFormMock}
      />,
    );

    const nameInput = screen.getByLabelText("Name");
    userEvent.type(nameInput, `John`);
    // expect(inputFormMock).toBeCalledTimes(4)
    expect(inputFormMock).toHaveBeenLastCalledWith(`nameInput`, `John`)

    const messageInput = screen.getByLabelText("Message");
    userEvent.type(messageInput, `Good Luck`);
    // expect(inputFormMock).toBeCalledTimes(13)
    expect(inputFormMock).toHaveBeenLastCalledWith(`messageInput`, `Good Luck`)

    const amountInput = screen.getByLabelText("Amount to Donate")
    // userEvent.click(amountInput)
    fireEvent.change(amountInput, {
      target: { value: "500"}
    })
    expect(inputFormMock).toHaveBeenLastCalledWith(`amountInput`, `500`)
  });
});
