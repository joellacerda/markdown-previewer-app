import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState(`# Heading
## Sub-heading
Link: [GitHub](https://github.com/)
Inline code: \`console.log('Hello, world!');\`
Code block:
\`\`\`
const greeting = 'Hello, world!';
console.log(greeting);
\`\`\`
List:
- Item 1
- Item 2

Blockquote:
> To be, or not to be, that is the question.

Image:
![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png)

Bolded text: **bolded text**
Carriage return:
First line.
Second line.
`);

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Editor</h2>
          <textarea
            id="editor"
            className="form-control"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-md-6">
          <h2 id="preview-h2">Preview</h2>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={getMarkdownText()}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
