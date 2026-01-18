export default function WelcomeBubble() {

  return (
    <div className="flex flex-col items-center mb-4">
      <div className="left-1/2 -translate-x-1/2 bg-[#17b452] text-white px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap shadow-lg animate-bounce">
        Welcome to my portfolio!!!
        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#17b452] rotate-45"></div>
      </div>
      <div className="text-4xl mt-2">
        👋
      </div>
    </div>
  );
}
