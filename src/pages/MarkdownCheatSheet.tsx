import styled from "styled-components";

const CheatSheetContainer = styled.div`
  margin: 10px;
  border: 1px solid #555555;
  background-color: #ededed;
  padding: 10px 30px;
`;

const MarkdownCheatSheet = () => {
  return (
    <>
      <CheatSheetContainer>
        <h2>MarkdownCheatSheet</h2>
        <ul>
          <li>## H2</li>
          <li>### H3</li>
          <li>**bold**</li>
          <li>*italic*</li>
          <li>[Link](http://a.com)</li>
          <li>![Image](http://url/a.png)</li>
          <li>`inline code`</li>
          <li>```block code```</li>
          <li>- list item</li>
        </ul>
      </CheatSheetContainer>
    </>
  );
};

export default MarkdownCheatSheet;

//   ## H2
// ### H3
// **bold**
// *italic*
// [Link](http://a.com)
// ![Image](http://url/a.png)
// `inline code`
// ```block code```
// - list item
