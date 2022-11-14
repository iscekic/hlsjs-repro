import dynamic from "next/dynamic";

const Video = dynamic(() => import("../src/video"), { ssr: false });

export default function Home() {
  return <Video />;
}
