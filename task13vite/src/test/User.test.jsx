import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { describe } from "vitest";
import { store } from "../app/store";
import User from "../components/User";

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

describe("User component should render the data", () => {
  afterEach(() => {
    cleanup();
  });

  test("The card renders the title", () => {
    render(
      <Provider store={store}>
        <Router>
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            company={user.company}
            phone={user.phone}
            address={user.address}
            website={user.website}
            user={user}
            choose={true}
          />
        </Router>
      </Provider>
    );
    const title = screen.findByText(/User/i);
    expect(title).toBeDefined();
  });

  test("The card renders the name", () => {
    render(
      <Provider store={store}>
        <Router>
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            company={user.company}
            phone={user.phone}
            address={user.address}
            website={user.website}
            user={user}
            choose={true}
          />
        </Router>
      </Provider>
    );
    const name = screen.findByText(/Name/i);
    expect(name).toBeDefined();
  });

  test("The card renders the user name", () => {
    render(
      <Provider store={store}>
        <Router>
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            company={user.company}
            phone={user.phone}
            address={user.address}
            website={user.website}
            user={user}
            choose={true}
          />
        </Router>
      </Provider>
    );
    const userName = screen.findByText(/User name/i);
    expect(userName).toBeDefined();
  });

  test("The card renders the phone", () => {
    render(
      <Provider store={store}>
        <Router>
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            company={user.company}
            phone={user.phone}
            address={user.address}
            website={user.website}
            user={user}
            choose={true}
          />
        </Router>
      </Provider>
    );
    const card = screen.findByText(/Phone/i);
    expect(card).toBeDefined();
  });

  //does not display data
  test("The card does not render the name", async () => {
    render(
      <Provider store={store}>
        <Router>
          <User key={user.id} id={user.id} user={user} choose={true} />
        </Router>
      </Provider>
    );
    const card = screen.findByTestId("cardContainer");
    expect(card).not.toContain(<div className="fieldTitle">Name:</div>);
  });

  test("The card does not render the user name", () => {
    render(
      <Provider store={store}>
        <Router>
          <User key={user.id} id={user.id} user={user} choose={true} />
        </Router>
      </Provider>
    );
    const card = screen.findByTestId("cardContainer");
    expect(card).not.toContain(<div className="fieldTitle">User name:</div>);
  });

  test("The card does not render the phone", () => {
    render(
      <Provider store={store}>
        <Router>
          <User key={user.id} id={user.id} user={user} choose={true} />
        </Router>
      </Provider>
    );
    const card = screen.findByTestId("cardContainer");
    expect(card).not.toContain(<div className="fieldTitle">Phone:</div>);
  });

  test("The card does not render the phone", () => {
    render(
      <Provider store={store}>
        <Router>
          <User key={user.id} id={user.id} user={user} choose={false} />
        </Router>
      </Provider>
    );
    const card = screen.findByTestId("cardContainer");
    const approve = vi.fn();
    const reject = vi.fn();
    expect(card).not.toContain(
      <div className="buttonsContainer">
        <button className="buttonApprove" onClick={approve}>
          Approve {user.id}
        </button>
        <button className="buttonReject" onClick={reject}>
          Reject {user.id}
        </button>
      </div>
    );
  });
});
