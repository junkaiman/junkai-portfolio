"use client";
import { useEffect, useRef } from "react";

export default function ChatWithMe() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        if (document.activeElement !== inputRef.current) {
          e.preventDefault();
          inputRef.current!.focus();
        }
      } else if (e.key === "Enter" && document.activeElement === inputRef.current) {
        // TODO: Query GPT 
        console.log(inputRef.current!.value);
        inputRef.current!.value = "";
        inputRef.current!.blur();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="askme"
          id="askme"
          ref={inputRef}
          className="block w-11/12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-100 focus:ring-blue-500 focus:border-white"
          placeholder="Press / to ask any question about me"
          required
        />
        {/* <button
          type="submit"
          className="text-white absolute end-14 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Send
        </button> */}
      </div>
    </>
  );
}
