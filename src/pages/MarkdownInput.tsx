// import the styled component library
// Define a textarea styled component
// define the interface for the props (one is listed below)
// onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
// destructure the props
// pass the props (on change and value to the StyledTextArea styled component)

import styled from "styled-components";
import { useMarkdownStore } from "../store/useMarkdownStore";

// interface MarkdownInputProps {
//   handleChangeEvent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
//   value: string;
// }

const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: row start;
  width: 40%;
  height: 500px;
`;

const MarkdownInput = () => {
  const { markdown, setMarkdown } = useMarkdownStore();

  return (
    <InputContainer>
      <StyledTextArea
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      ></StyledTextArea>
    </InputContainer>
  );
};

export default MarkdownInput;

// interface HeaderProps {
//   onToggleGuide: () => void;
// }

// const Header = ({ onToggleGuide }: HeaderProps) => {
//   return (
//     <HeaderContainer>
//       <h1>Markdown Previewer</h1>
//       <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
//     </HeaderContainer>
//   );
// };
