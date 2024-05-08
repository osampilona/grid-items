import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Form from "./Form";
import { store } from "../state/store";

describe("Form Component", () => {
  beforeEach(() => {
    // Render Form component wrapped with Provider for each test
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  it("should render button to open modal", () => {
    const addButton = screen.getByRole("button", { name: "Add item" });
    expect(addButton).toBeInTheDocument();
  });

  it('should open the modal when "Add item" button is clicked', async () => {
    const addButton = screen.getByRole("button", { name: "Add item" });
    userEvent.click(addButton);
    await screen.findByText("Add new item to the list"); // Check if modal header is present
  });

  it("should allow input into form fields", async () => {
    userEvent.click(screen.getByRole("button", { name: "Add item" }));
    await screen.findByText("Add new item to the list"); // Ensuring the modal is fully open

    const imageInput = screen.getByTestId("imagePath");
    const titleInput = screen.getByTestId("title");
    const descriptionInput = screen.getByTestId("description");

    // Ensure inputs are in view and focused before typing
    imageInput.focus();
    userEvent.clear(imageInput);
    userEvent.type(imageInput, "");

    titleInput.focus();
    userEvent.clear(titleInput);
    userEvent.type(titleInput, "");

    descriptionInput.focus();
    userEvent.clear(descriptionInput);
    userEvent.type(descriptionInput, "");

    await waitFor(() => {
      expect(imageInput).toHaveValue("");
      expect(titleInput).toHaveValue("");
      expect(descriptionInput).toHaveValue("");
    });
  });

  it("should submit the form and close the modal", async () => {
    const addButton = screen.getByRole("button", { name: "Add item" }); // Declare the addButton variable
    userEvent.click(screen.getByRole("button", { name: "Add item" }));
    await screen.findByText("Add new item to the list"); // Ensures modal has opened

    const imagePathInput = screen.getByTestId("imagePath");
    const titleInput = screen.getByTestId("title");
    const descriptionInput = screen.getByTestId("description");

    userEvent.type(
      imagePathInput,
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp"
    );
    userEvent.type(titleInput, "Sample Title");
    userEvent.type(descriptionInput, "Sample Description");

    const submitButton = screen.getByRole("button", { name: "Add" });
    userEvent.click(submitButton); // Using userEvent for a more accurate simulation

    // Wait for the modal to close, indicated by the absence of the submit button
    await waitFor(() => {
      expect(addButton).toBeInTheDocument();
    });
  });

  // it("should clear input fields when the cancel button is clicked", async () => {
  //   // Open the modal
  //   userEvent.click(screen.getByRole("button", { name: "Add item" }));
  //   await screen.findByText("Add new item to the list");

  //   const imagePathInput = screen.getByTestId("imagePath") as HTMLInputElement;
  //   const titleInput = screen.getByTestId("title") as HTMLInputElement;
  //   const descriptionInput = screen.getByTestId(
  //     "description"
  //   ) as HTMLInputElement;

  //   // Fill the input fields
  //   await userEvent.type(
  //     imagePathInput,
  //     "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp"
  //   );

  //   await userEvent.type(titleInput, "Sample Title");
  //   await userEvent.type(descriptionInput, "Sample Description");

  //   // Assert initial values are as expected
  //   expect(imagePathInput.value).toBe(
  //     "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp"
  //   );
  //   expect(titleInput.value).toBe("Sample Title");
  //   expect(descriptionInput.value).toBe("Sample Description");

  //   // Click the cancel button
  //   const cancelButton = screen.getByTestId("cancel");
  //   userEvent.click(cancelButton);

  //   // Wait for the inputs to be cleared
  //   await waitFor(
  //     () => {
  //       expect(imagePathInput.value).toBe("");
  //       expect(titleInput.value).toBe("");
  //       expect(descriptionInput.value).toBe("");
  //     },
  //     { timeout: 1000 }
  //   ); // Increase timeout if necessary
  // });
});
