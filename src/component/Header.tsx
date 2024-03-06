import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: black;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  font-size: 1rem;
  border: none;
  padding: 10px 30px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #ffcba3;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header = ({ onToggleGuide }: HeaderProps) => {
  return (
    <HeaderContainer>
      <h1>Markdown Previewer</h1>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  );
};

export default Header;
