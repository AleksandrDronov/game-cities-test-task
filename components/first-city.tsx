function FirstCity() {
  return (
    <div className="flex flex-col justify-between w-[576px] max-h-[464px] h-[80vh] bg-white rounded-2xl">
      <div className="flex justify-between pt-[17px] pb-[18px] px-4 border-gray-100 border-solid border-b-4">
        <h1 className="text-base ">Сейчас ваша очередь</h1>
        <p>timer</p>
      </div>
      <p className="flex items-center justify-center px-6 text-sm leading-[21px] text-gray-400">
        Первый участник вспоминает города...
      </p>
      <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded m-4">
        <input
          type="text"
          placeholder="Напишите любой город, например: Где вы живете?"
          className="placeholder:text-gray-700 bg-gray-100 w-full outline-none"
        />
        <button className="bg-violet-600 text-white p-[6px] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_7618_580)">
              <path
                d="M8.33337 11.6667L17.5 2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5001 2.5L12.0834 17.5C12.0468 17.5798 11.9881 17.6474 11.9143 17.6948C11.8404 17.7422 11.7545 17.7674 11.6667 17.7674C11.579 17.7674 11.493 17.7422 11.4192 17.6948C11.3453 17.6474 11.2866 17.5798 11.2501 17.5L8.33339 11.6667L2.50006 8.75C2.42027 8.71344 2.35266 8.65474 2.30526 8.58088C2.25786 8.50701 2.23267 8.4211 2.23267 8.33333C2.23267 8.24557 2.25786 8.15965 2.30526 8.08579C2.35266 8.01193 2.42027 7.95323 2.50006 7.91667L17.5001 2.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_7618_580">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FirstCity;
