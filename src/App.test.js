import React from "react";
import {
  render,
  cleanup,
  queryByTestId,
  fireEvent,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

describe("App", () => {
  test("hides list item when input is empty", async () => {
    const { container, getByPlaceholderText, debug } = render(<App />);
    const searchInput = getByPlaceholderText("Type color");

    expect(searchInput.value).toBeFalsy();
    expect(queryByTestId(container, "list")).toBeFalsy();
  });

  test("shows list item when input is not empty", async () => {
    const { container, getByPlaceholderText, debug } = render(<App />);
    const searchInput = getByPlaceholderText("Type color");

    fireEvent.change(searchInput, { target: { value: "Aqu" } });
    expect(queryByTestId(container, "list")).toBeTruthy();
  });

  test("makes inputed substring bold in list items", () => {
    const { container, getByPlaceholderText, debug } = render(<App />);
    const searchInput = getByPlaceholderText("Type color");

    const substring = "Aqu";

    fireEvent.change(searchInput, { target: { value: substring } });

    const boldSubstring = container.querySelector("b");

    expect(boldSubstring.innerHTML).toBe(substring);
    expect(queryByTestId(container, "list")).toBeTruthy();
  });

  test("clicking on list item should set input value", () => {
    const { getByPlaceholderText, getByTestId, debug } = render(<App />);
    const searchInput = getByPlaceholderText("Type color");
    const substring = "Aqu";

    fireEvent.change(searchInput, { target: { value: substring } });
    const list = getByTestId("list");
    const listItems = list.querySelectorAll(".wrapper");
    const item = listItems[0];

    fireEvent.click(item);

    expect(searchInput.value).toBe(item.textContent);
  });

  test("clicking outside the search input should close list", () => {
    const { container, getByPlaceholderText, getByTestId, debug } = render(
      <App />
    );
    const appContainer = container.firstElementChild;
    const searchInput = getByPlaceholderText("Type color");
    const substring = "Aqu";

    fireEvent.change(searchInput, { target: { value: substring } });

    expect(queryByTestId(container, "list")).toBeTruthy();

    fireEvent.click(appContainer);

    expect(queryByTestId(container, "list")).toBeFalsy();
  });

  test("tabbing in input should highlight next list item", () => {
    const { getByPlaceholderText, getByTestId, debug } = render(<App />);
    const searchInput = getByPlaceholderText("Type color");
    const substring = "a";

    fireEvent.change(searchInput, { target: { value: substring } });
    searchInput.focus()

    expect(document.activeElement === searchInput).toBeTruthy();
    userEvent.tab()
    expect(document.activeElement === searchInput).toBeFalsy();

    const list = getByTestId("list");
    const listItems = list.querySelectorAll(".wrapper");
    const itemOne = listItems[0];
    const itemTwo = listItems[1];

    expect(document.activeElement === itemOne).toBeTruthy();
    userEvent.tab()
    expect(document.activeElement === itemOne).toBeFalsy();
    expect(document.activeElement === itemTwo).toBeTruthy();
  });

  test("shift tabbing should focus previous item", () => {
    const { getByPlaceholderText, getByTestId, debug } = render(<App />);
    const searchInput = getByPlaceholderText("Type color");
    const substring = "a";

    fireEvent.change(searchInput, { target: { value: substring } });

    const list = getByTestId("list");
    const listItems = list.querySelectorAll(".wrapper");
    const itemOne = listItems[0];
    const itemTwo = listItems[1];

    itemTwo.focus()

    expect(document.activeElement === itemTwo).toBeTruthy();
    userEvent.tab({shift:true})
    expect(document.activeElement === itemTwo).toBeFalsy();
    expect(document.activeElement === itemOne).toBeTruthy();
  });

  test("pressing enter on focused item should set search value and close list", () => {
    const { container, getByPlaceholderText, getByTestId, debug } = render(<App />);
    const searchInput = getByPlaceholderText("Type color");
    const substring = "a";

    fireEvent.change(searchInput, { target: { value: substring } });
    searchInput.focus()

    expect(document.activeElement === searchInput).toBeTruthy();
    userEvent.tab()
    expect(document.activeElement === searchInput).toBeFalsy();

    const list = getByTestId("list");
    const listItems = list.querySelectorAll(".wrapper");
    const item = listItems[0];

    expect(document.activeElement === item).toBeTruthy();
    fireEvent.keyPress(item, { key: 'Enter', keyCode: 13 })

    expect(queryByTestId(container, "list")).toBeFalsy();
    expect(document.activeElement === searchInput).toBeTruthy();
    expect(searchInput.value).toBe(item.textContent);
  });
});
