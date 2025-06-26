import { createContext } from "react";

const noteContext = createContext();

export default noteContext;

// noteContext provides a way to pass data through the component tree without having to pass props down manually at every level.
// It is useful for global data that many components need access to, such as user authentication status, theme settings, or in this case, notes.