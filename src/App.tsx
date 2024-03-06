import Header from "./component/Header";
import { useState } from "react";
import MarkdownCheatSheet from "./component/MarkdownCheatSheet";
import MarkdownInput from "./component/MarkdownInput";
import MarkdownOutput from "./component/MarkdownOutput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justifycontent: space-between;
`;

const App = () => {
  // Create a state to manage the markdown text
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  const handleToggleGuide = () => {
    setShowCheatSheet(!showCheatSheet);
  };

  // const [markdown, setMarkdownText] = useState<string>("");
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showCheatSheet && <MarkdownCheatSheet />}
      <Container>
        <MarkdownInput
          handleChangeEvent={handleMarkdownChange}
          value={markdown}
        />
        <MarkdownOutput markdown={markdown} />
      </Container>

      {/* Wrapped within a styled component div named Container */}
      {/* MarkdownInput (pass the markdown text as a value to this component as well as the handle change function) */}
      {/* MarkdownOutput (pass the markdown text as a prop to this component*/}
    </>
  );
};

export default App;
