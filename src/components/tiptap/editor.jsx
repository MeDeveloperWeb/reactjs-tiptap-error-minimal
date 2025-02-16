"use client";

import RichTextEditor from "reactjs-tiptap-editor";
import "reactjs-tiptap-editor/style.css";
import { getExtensions } from "./config";

export default function Editor({ value, onValueChange }) {
  return (
    <RichTextEditor
      output="html"
      content={value}
      onChangeContent={onValueChange}
      extensions={getExtensions()}
      dark={false}
      useEditorOptions={{
        immediatelyRender: false,
      }}
    />
  );
}
