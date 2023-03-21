import React from "react";
import ReactDOM from "react-dom";
import NetbookUsers from "@/pages/netbook_users";

describe("NetbookUsers", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NetbookUsers />, div);
  });
});
