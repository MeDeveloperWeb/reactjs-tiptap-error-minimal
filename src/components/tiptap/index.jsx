import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor"), {
  loading: () => (
    <div className="min-h-[30vh] flex justify-center items-center animate-pulse bg-gray-200 rounded-md"></div>
  ),
  ssr: false,
});

export default function TipTapEditor({ ...props }) {
  return <Editor {...props} />;
}
