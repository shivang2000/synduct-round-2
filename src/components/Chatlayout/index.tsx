"use client";

import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import { openai } from "@/openAI";
import { useState } from "react";

type chat =
  | {
      type: "USER";
      text: string;
    }
  | {
      type: "AI";
      output: any;
    };

const ChatLayout = () => {
  const auth = useAuth();
      
  const displayName = auth.currentUser?.displayName ?? ''
  const initials = displayName.split(' ').map(str => str[0]).join("")
  
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState<chat[]>([
  ]);
  console.log(chat)
  const handleChatGptCall = () => {
    if (!loading) {
      setLoading(true);
      setChat((prev) => [
        ...prev,
        {
          type: "USER",
          text: userInput,
        },
      ]);
      openai.responses
        .create({
          model: "gpt-4o-mini-2024-07-18",
          input: "Write a one-sentence bedtime story about a unicorn.",
        })
        .then((res) => {
          setLoading(false);
          console.log("res", res);
          setChat((prev) => [
            ...prev,
            {
              type: "AI",
              output: res,
            },
          ]);
          setUserInput("");
        });
    }
  };

  return (
    <div
      className={cn(
        "h-screen w-full flex justify-center items-center",
        chat.length > 0 && "items-start"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          chat.length > 0 && "h-screen justify-between self-center max-w-3xl py-4"
        )}
      >
        {/* Top details  */}
        <div className="flex flex-col">
          {chat.length === 0 && (
            <div className="w-full tracking-tight max-md:flex sm:-ml-0.5  sm:text-4xl sm:leading-snug md:text-[2.5rem] transition-opacity duration-300 ease-in flex justify-center">
              <div className="flex gap-2 items-center">
                <div>
                  <div className="w-8 inline-block relative;">
                    <svg
                      overflow="visible"
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M96.0000 40.0000 L99.5002 42.0000 L99.5002 43.5000 L98.5000 47.0000 L56.0000 57.0000 L52.0040 47.0708 L96.0000 40.0000 M96.0000 40.0000 "
                        fill="#D97757"
                      />
                      <path
                        d="M80.1032 10.5903 L84.9968 11.6171 L86.2958 13.2179 L87.5346 17.0540 L87.0213 19.5007 L58.5000 58.5000 L49.0000 49.0000 L75.3008 14.4873 L80.1032 10.5903 M80.1032 10.5903 "
                        fill="#D97757"
                      />
                      <path
                        d="M55.5002 4.5000 L58.5005 2.5000 L61.0002 3.5000 L63.5002 7.0000 L56.6511 48.1620 L52.0005 45.0000 L50.0005 39.5000 L53.5003 8.5000 L55.5002 4.5000 M55.5002 4.5000 "
                        fill="#D97757"
                      />
                      <path
                        d="M23.4253 5.1588 L26.5075 1.2217 L28.5175 0.7632 L32.5063 1.3458 L34.4748 2.8868 L48.8202 34.6902 L54.0089 49.8008 L47.9378 53.1760 L24.8009 11.1886 L23.4253 5.1588 M23.4253 5.1588 "
                        fill="#D97757"
                      />
                      <path
                        d="M8.4990 27.0019 L7.4999 23.0001 L10.5003 19.5001 L14.0003 20.0001 L15.0003 20.0001 L36.0000 35.5000 L42.5000 40.5000 L51.5000 47.5000 L46.5000 56.0000 L42.0002 52.5000 L39.0001 49.5000 L10.0000 29.0001 L8.4990 27.0019 M8.4990 27.0019 "
                        fill="#D97757"
                      />
                      <path
                        d="M2.5003 53.0000 L0.2370 50.5000 L0.2373 48.2759 L2.5003 47.5000 L28.0000 49.0000 L53.0000 51.0000 L52.1885 55.9782 L4.5000 53.5000 L2.5003 53.0000 M2.5003 53.0000 "
                        fill="#D97757"
                      />
                      <path
                        d="M17.5002 79.0264 L12.5005 79.0264 L10.5124 76.7369 L10.5124 74.0000 L19.0005 68.0000 L53.5082 46.0337 L57.0005 52.0000 L17.5002 79.0264 M17.5002 79.0264 "
                        fill="#D97757"
                      />
                      <path
                        d="M27.0004 92.9999 L25.0003 93.4999 L22.0003 91.9999 L22.5004 89.4999 L52.0003 50.5000 L56.0004 55.9999 L34.0003 85.0000 L27.0004 92.9999 M27.0004 92.9999 "
                        fill="#D97757"
                      />
                      <path
                        d="M51.9998 98.0000 L50.5002 100.0000 L47.5002 101.0000 L45.0001 99.0000 L43.5000 96.0000 L51.0003 55.4999 L55.5001 55.9999 L51.9998 98.0000 M51.9998 98.0000 "
                        fill="#D97757"
                      />
                      <path
                        d="M77.5007 86.9997 L77.5007 90.9997 L77.0006 92.4997 L75.0004 93.4997 L71.5006 93.0339 L47.4669 57.2642 L56.9998 50.0002 L64.9994 64.5004 L65.7507 69.7497 L77.5007 86.9997 M77.5007 86.9997 "
                        fill="#D97757"
                      />
                      <path
                        d="M89.0008 80.9991 L89.5008 83.4991 L88.0008 85.4991 L86.5007 84.9991 L78.0007 78.9991 L65.0007 67.4991 L55.0007 60.4991 L58.0000 51.0000 L62.9999 54.0001 L66.0007 59.4991 L89.0008 80.9991 M89.0008 80.9991 "
                        fill="#D97757"
                      />
                      <path
                        d="M82.5003 55.5000 L95.0003 56.5000 L98.0003 58.5000 L100.0000 61.5000 L100.0000 63.6587 L94.5003 66.0000 L66.5005 59.0000 L55.0003 58.5000 L58.0000 48.0000 L66.0005 54.0000 L82.5003 55.5000 M82.5003 55.5000 "
                        fill="#D97757"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-200 text-3xl">
                  Hey there, {auth.currentUser?.displayName ?? "Shivang Chheda"}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            {chat.map((singleChat,index) =>
              singleChat.type === "USER" ? (
                <div key={index}>
                  <div className="mb-1 mt-1 ">
                    <div
                      className="group relative  inline-flex  gap-2  bg-[#F0EEE6]  rounded-xl  pl-2.5  py-2.5  break-words  text-text-100  transition-all  max-w-[75ch]  flex-col pr-6"
                      
                    >
                      <div className="flex flex-row gap-2">
                        <div className="shrink-0">
                          <div className="flex shrink-0 items-center justify-center rounded-full font-bold select-none h-7 w-7 text-[12px] bg-text-200 text-bg-100">
                            {initials}
                          </div>
                        </div>
                        <div
                          
                          className="font-user-message grid grid-cols-1 gap-2 py-0.5 text-[0.9375rem] leading-6"
                        >
                          <p className="whitespace-pre-wrap break-words">
                            {singleChat.text}
                          </p>
                        </div>
                      </div>
                      <div
                        className="absolute bottom-0 right-2 pointer-events-none"
                        
                      >
                        <div className="rounded-lg transition min-w-max pointer-events-auto translate-y-4 bg-bg-300/90 backdrop-blur-sm translate-x-1 group-hover:translate-x-0.5 border-0.5 border-border-300 p-0.5 shadow-sm opacity-0 group-hover:opacity-100">
                          <div className="text-text-300 flex items-stretch justify-between">
                            <button
                              className="flex flex-row items-center gap-1.5 rounded-md p-2 text-sm transition text-text-300 active:scale-95 select-auto hover:bg-bg-500 py-1"
                            >
                              Edit
                            </button>
                            <div className="flex items-center gap-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className="mb-1 mt-1 pl-2.5 ">{singleChat.output.output[0].content[0].text}</div>
              )
            )}
          </div>
        </div>

        {/* chat input */}
        <div className="flex flex-col self-center max-w-2xl md:w-3xl bg-white rounded-2xl border-1 border-solid border-gray-100  focus-within:border-gray-200 hover:border-gray-200 shadow-sm hover:shadow focus-within:shadow">
          <div className="flex flex-col gap-3.5 m-3.5">
            <div className="relative">
              <div className="max-h-96 w-full overflow-y-auto break-words min-h-[3rem]">
                <div className="ProseMirror break-words max-w-[60ch]">
                  <input
                    className="w-full outline-none  bg-white"
                    placeholder="How can I help you today?"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2.5 w-full items-center">
              <div className="relative flex-1 flex items-center gap-2 shrink min-w-0">
                <div className="p-0.5 border-1 border-gray-300 border-solid rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 cursor-pointer stroke-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>

                <div className="p-0.5 border-1 border-gray-300 border-solid rounded">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 cursor-pointer stroke-gray-600 stroke-1"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.55841 13.247C3.56004 13.1767 3.56367 13.1016 3.56814 13.0265C3.58038 12.8211 3.60348 12.5545 3.63891 12.2416C3.70982 11.6154 3.83126 10.7937 4.01819 9.8908C4.38909 8.09943 5.02961 5.92916 6.08397 4.34762C6.74831 3.35112 7.61943 2.5219 8.52309 1.93915C9.41892 1.36145 10.3881 0.999975 11.25 0.999975C12.0996 0.999975 12.6668 1.3031 13.0362 1.68235C13.1431 1.79205 13.2319 1.90828 13.3047 2.01848C13.7489 1.73316 14.3276 1.41482 14.9254 1.20105C15.3496 1.04935 15.8123 0.93969 16.2588 0.94931C16.713 0.959095 17.1766 1.09446 17.5411 1.45892C17.9234 1.84122 18.025 2.32827 17.9801 2.79047C17.9365 3.23983 17.7546 3.69434 17.5321 4.09985C17.1983 4.70836 16.7265 5.28918 16.3099 5.69186C16.463 5.93625 16.5946 6.23735 16.6498 6.5759C16.7482 7.1804 16.5938 7.86331 15.9786 8.47854C15.3739 9.08321 14.4222 9.42064 13.5622 9.61294C13.0891 9.71874 12.6154 9.78655 12.1928 9.82663C12.3414 10.2749 12.328 10.837 12.0097 11.4736C11.6993 12.0943 11.1358 12.4468 10.5203 12.663C9.91023 12.8774 9.1849 12.9806 8.46064 13.0611C8.24919 13.0846 8.03779 13.1062 7.82669 13.1277C7.29434 13.1821 6.7637 13.2363 6.23905 13.3205C5.54406 13.432 4.90462 13.5903 4.36135 13.848C3.76118 14.7972 3.25719 15.7183 2.85552 16.5469C3.44712 16.2182 4.15842 16 5 16C5.27614 16 5.5 16.2239 5.5 16.5C5.5 16.7761 5.27614 17 5 17C3.48663 17 2.49746 17.909 1.92177 18.7688C1.90079 18.8017 1.87625 18.8317 1.84885 18.8583C1.795 18.9109 1.731 18.9494 1.66228 18.973C1.59358 18.9966 1.51939 19.0054 1.44463 18.997C1.38858 18.9908 1.33298 18.9751 1.2803 18.9492C1.22755 18.9235 1.18096 18.8893 1.14166 18.8489C1.08941 18.7953 1.05098 18.7317 1.02742 18.6634C1.00348 18.5943 0.994505 18.5197 1.00299 18.4444C1.00723 18.4063 1.01589 18.3684 1.02916 18.3314C1.44851 17.0773 2.30911 15.211 3.55841 13.247ZM13.425 3.14998C13.8166 2.85627 14.5377 2.4017 15.2621 2.14265C15.6244 2.0131 15.9585 1.94307 16.2373 1.94908C16.5083 1.95492 16.6984 2.03049 16.834 2.16603C16.9517 2.28373 17.0089 2.44512 16.9848 2.69386C16.9594 2.95544 16.8444 3.27437 16.6554 3.61886C16.2757 4.311 15.6807 4.9582 15.325 5.22498C15.209 5.31195 15.1365 5.44496 15.1263 5.58954C15.116 5.73412 15.169 5.87605 15.2714 5.97854C15.4232 6.13029 15.6103 6.41423 15.6627 6.73657C15.7102 7.0279 15.6562 7.38666 15.2714 7.77143C14.8761 8.16676 14.1611 8.45433 13.344 8.63703C12.5462 8.81543 11.7395 8.87498 11.25 8.87498C11.0181 8.87498 10.8167 9.03442 10.7634 9.2601C10.7101 9.48577 10.819 9.71847 11.0264 9.82219C11.0245 9.82089 11.0247 9.82136 11.0264 9.82219C11.0334 9.82712 11.0645 9.84914 11.105 9.89551C11.1521 9.94938 11.2013 10.0244 11.2361 10.1195C11.3003 10.2953 11.3335 10.59 11.1153 11.0264C10.9662 11.3245 10.675 11.5488 10.1888 11.7196C9.69705 11.8924 9.07356 11.9868 8.35018 12.0672C8.15766 12.0886 7.95768 12.109 7.75306 12.1299C7.21061 12.1853 6.63559 12.2441 6.08063 12.3331C5.81261 12.3761 5.5432 12.427 5.27669 12.4896C5.36362 12.3684 5.45203 12.2473 5.54192 12.1264C7.38391 9.64816 9.80795 7.28835 12.6923 6.08654C12.9472 5.98033 13.0677 5.68759 12.9615 5.43269C12.8553 5.17779 12.5626 5.05725 12.3077 5.16346C9.1935 6.46104 6.6393 8.9745 4.74198 11.5263C4.80709 11.0917 4.89126 10.6063 4.99743 10.0935C5.3609 8.33802 5.97038 6.32078 6.91602 4.90232C7.50169 4.02383 8.27266 3.29055 9.06505 2.77955C9.86527 2.2635 10.6461 1.99998 11.25 1.99998C11.8337 1.99998 12.1414 2.19686 12.3199 2.38012C12.48 2.54445 12.5536 2.70546 12.622 2.85524C12.6405 2.89556 12.6585 2.93506 12.6778 2.9736C12.7441 3.1062 12.8658 3.20254 13.0101 3.2366C13.1544 3.27066 13.3064 3.23893 13.425 3.14998Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.6967 16.0403C18.9506 16.149 19.0683 16.4429 18.9597 16.6967C18.4068 17.9885 17.3901 19 16.1 19C15.1105 19 14.2819 18.405 13.7 17.5449C13.1181 18.405 12.2895 19 11.3 19C10.3105 19 9.4819 18.405 8.9 17.5449C8.31811 18.405 7.48948 19 6.5 19C6.22386 19 6 18.7761 6 18.5C6 18.2239 6.22386 18 6.5 18C7.21338 18 7.96129 17.4225 8.44034 16.3033C8.51907 16.1193 8.6999 16 8.9 16C9.10011 16 9.28094 16.1193 9.35967 16.3033C9.83872 17.4225 10.5866 18 11.3 18C12.0134 18 12.7613 17.4225 13.2403 16.3033C13.3191 16.1193 13.4999 16 13.7 16C13.9001 16 14.0809 16.1193 14.1597 16.3033C14.6387 17.4225 15.3866 18 16.1 18C16.8134 18 17.5613 17.4225 18.0403 16.3033C18.149 16.0494 18.4429 15.9317 18.6967 16.0403Z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden shrink-0 p-1 -m-1"></div>
              <div className="">
                <button
                  disabled={userInput.trim().length === 0}
                  className="bg-[#c96442] cursor-pointer disabled:cursor-not-allowed  inline-flex items-center justify-center relative shrink-0 can-focus select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none bg-accent-main-000 text-oncolor-100 font-styrene font-medium transition-colors hover:bg-accent-main-200 active:scale-95 !rounded-lg !h-8 !w-8"
                  type="button"
                  aria-label="Send message"
                  onClick={handleChatGptCall}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill=""
                    className="cursor-pointer"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
