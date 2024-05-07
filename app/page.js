export default function Home() {
  return (
    <>
      {/* 컨텐츠 */}
      <div className="w-full max-w-screen-xl h-[400px] mx-auto bg-muted"></div>
      {/* 컨텐츠-2 */}
      <div className="w-full max-w-screen-xl mx-auto my-10 grid grid-cols-[2fr_1fr] gap-x-10">
        {/* grid-1 */}
        <div className="w-full h-[300px] bg-muted"></div>
        {/* grid-2 */}
        <div className="w-full h-[300px] bg-muted"></div>
      </div>
    </>
  );
}
