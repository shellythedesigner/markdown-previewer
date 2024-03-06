import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Markdown Previewer</h1>
      <ul>
        <li>
          <Link to="/MarkdownCheatSheet">MarkdownCheatSheet</Link>
        </li>
        <li>
          <Link to="/MarkdownInput">MarkdownInput</Link>
        </li>
        <li>
          <Link to="/MarkdownOutput">MarkdownOutput</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Navbar;
