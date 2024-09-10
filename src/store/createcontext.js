// CreateContext.js
import { createContext } from "react";

const CreateContext = createContext({
  dispatch: () => {},
  navItem: "Home"
});

export default CreateContext;