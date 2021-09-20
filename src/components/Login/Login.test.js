import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";
test("should render Login", () => {});
describe("<Login/>", () => {
  render(<Login />);
});

// //   it('El form debe tener un input con name "password" y type "password"', () => {
// //     const { container } = render(<Login />);
// //     const element = container.querySelectorAll("input")[1];
// //     console.log(element);
// //     expect(element.type).toBe("Password");
// //     expect(element.name).toBe("Password");
// //   });
// // });
