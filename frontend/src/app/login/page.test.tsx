import { render, screen, fireEvent } from "@testing-library/react";
import SignInPage from "./page";

// Mock Firebase Auth
jest.mock("firebase/auth", () => ({
    signInWithEmailAndPassword: jest.fn(),
}));

// Mock Navigation
jest.mock("next/navigation", () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
}));

import { signInWithEmailAndPassword } from "firebase/auth";

// -- UNIT TEST

// Tests if an error displays for invalid login

test("shows error for invalid login", async () => {
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValue({
        code: "auth/invalid-credential",
    }); // simulate failure
  
    render(<SignInPage />); // render the page
  
    fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "test@test.com" },
    }); // enters mock Email
  
    fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "wrong" },
    }); // enters mock password with wrong value
  
    fireEvent.click(screen.getByText("Sign In")); // triggers handleSubmit
  
    const error = await screen.findByText("Invalid email or password."); // looks for this error message in the UI
    expect(error).toBeInTheDocument();
});

// -- INTEGRATION TEST 

// Test Success:
// Tests how the handleSubmit() function interacts with Firebase with valid credentials (i.e. how it calls Firebase)

test("calls firebase login on submit", async () => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({}); // replaces Firebase method with mock function
  
    render(<SignInPage />); // renders the page
  
    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "test@test.com" },
    }); // Enter mock email
  
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    }); // Enter mock password
  
    fireEvent.click(screen.getByText("Sign In")); // trigger handleSubmit
  
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        "test@test.com",
        "password123"
    ); // looks if the function that calls Firebase has been called
});

// Test Failure:
// Tests how the handleSubmit() function interacts with Firebase with invalid credentials

test("calls firebase even when login fails", async () => {
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValue({
      code: "auth/invalid-credential",
    });
  
    render(<SignInPage />);
  
    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "test@test.com" },
    });
  
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "wrong" },
    });
  
    fireEvent.click(screen.getByText("Sign In"));
  
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
});