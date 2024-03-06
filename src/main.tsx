import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import React, { useState } from "react";

import Navbar from "./component/Navbar";
import MarkdownCheatSheet from "./pages/MarkdownCheatSheet";
import MarkdownInput from "./pages/MarkdownInput";
import MarkdownOutput from "./pages/MarkdownOutput";

// const [markdown, setMarkdown] = useState(`# Hello World`);
// const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   setMarkdown(e.target.value);
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/MarkdownCheatSheet",
        element: <MarkdownCheatSheet />,
      },
      {
        path: "/MarkdownInput",
        element: (
          <MarkdownInput
          // handleChangeEvent={handleMarkdownChange}
          // value={markdown}
          />
        ),
      },
      {
        path: "/MarkdownOutput",
        element: (
          <MarkdownOutput
          // markdown={markdown}
          />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
