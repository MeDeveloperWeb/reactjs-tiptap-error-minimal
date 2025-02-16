"use client";

import Editor from "@/components/tiptap";
import { useState } from "react";

const App = () => {
  const [content, setContent] = useState("");

  const onChangeContent = (value) => {
    setContent(value);
  };

  return <Editor value={content} onValueChange={onChangeContent} />;
};

export default App;
