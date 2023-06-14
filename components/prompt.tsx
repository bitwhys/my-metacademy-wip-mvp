import React from "react"

const Prompt = () => (
  <div className="relative flex items-center border-t bg-background px-5 pb-4 pt-5">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-8 text-primary"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path
          d="M194.82,151.43l-51.66,19a7.88,7.88,0,0,0-4.69,4.69l-19,51.66a7.92,7.92,0,0,1-14.86,0l-19-51.66a7.88,7.88,0,0,0-4.69-4.69l-51.66-19a7.92,7.92,0,0,1,0-14.86l51.66-19a7.88,7.88,0,0,0,4.69-4.69l19-51.66a7.92,7.92,0,0,1,14.86,0l19,51.66a7.88,7.88,0,0,0,4.69,4.69l51.66,19A7.92,7.92,0,0,1,194.82,151.43Z"
          opacity="0.2"
        ></path>
        <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>
      </svg>
    </div>
    <div className="relative flex-1 rounded-md pl-10 shadow-sm">
      <input
        type="text"
        name="account-number"
        id="account-number"
        className="bg-muted block w-full min-h-[32px] rounded-md border-0 h-full py-1.5 pr-10 ring-1 ring-inset ring-ring placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary-8 sm:text-sm sm:leading-6"
        placeholder="000-00-0000"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        {/*<QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />*/}
        <svg
          className="h-5 w-5 text-zinc-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L110,149.81a8,8,0,0,0-3.8-3.8L20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z"
            opacity="0.2"
          ></path>
          <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path>
        </svg>
      </div>
    </div>
  </div>
)

export default Prompt
