import { BrowserRouter } from "react-router-dom";

function Page({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default Page;
