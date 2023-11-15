"use client";

import ResultPage from "@/components/result";
import getCity, { data } from "@/libs/get-city";
import reduceValue from "@/libs/reduce-value";
import { FormEvent, useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

const renderer = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) => {
  return (
    <span className="text-xl">
      {minutes}:{seconds}
    </span>
  );
};

export default function FirstCityPage() {
  const [value, changeValue] = useState("");
  const [cities, changeCity] = useState<string[]>([]);
  const [countdown, setCountdown] = useState(Date.now() + 2 * 60 * 1000);
  const [isYouTurn, setisYouTurn] = useState(true);
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  const [countdownOver, setCountdownOver] = useState(false);
  const ref = useRef<null | HTMLLIElement>(null);

  const [error, setError] = useState("");

  const lastCity = cities[cities.length - 1];
  let LastChar = lastCity?.[lastCity?.length - 1];

  if (["ь", "ъ", "ы"].includes(LastChar)) {
    LastChar = lastCity?.[lastCity?.length - 2];
  }

  useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reducedValue = reduceValue(value);

    //Проверяем наличие в списке
    const hasCity = data.some((city) => city === reducedValue);
    if (!hasCity) {
      setError("Введите другое название");
      changeValue("");
      return;
    }

    if (!isFirstSubmit) {
      let firstChar = reducedValue[0].toLowerCase();
      const lastCity = cities[cities.length - 1];
      let lastCityChar = lastCity[lastCity.length - 1];
      if (["ь", "ъ", "ы"].includes(lastCityChar)) {
        lastCityChar = lastCity[lastCity.length - 2];
      }
      if (lastCityChar === firstChar) {
        changeCity((prev) => [...prev, reducedValue]);
        changeValue("");
      } else {
        setError(`Город должен начинаться на букву "${lastCityChar}"`);
        changeValue("");
        return;
      }
    } else {
      changeCity((prev) => [...prev, reducedValue]);
    }
    setisYouTurn((prev) => !prev);
    setCountdown(Date.now() + 2 * 60 * 1000);
    setError("");
    changeValue("");
    const newCity = await getCity(reducedValue);
    if (!newCity) return;
    changeCity((prev) => [...prev, newCity]);
    setisYouTurn((prev) => !prev);
    setCountdown(Date.now() + 2 * 60 * 1000);
    setIsFirstSubmit(false);
  };

  const game = (
    <div className="flex flex-col justify-between w-[576px] max-h-[549px] h-[80vh] min-h-[300px] bg-white rounded-2xl">
      <div>
        <div className="flex justify-between pt-[19px] pb-[12px] px-4">
          {isYouTurn ? (
            <h1 className="text-base">Сейчас ваша очередь</h1>
          ) : (
            <h1 className="text-base">Сейчас очередь соперника</h1>
          )}
          <Countdown
            date={countdown}
            renderer={renderer}
            onComplete={() => setCountdownOver(true)}
          />
        </div>
        {isYouTurn && (
          <div className="h-1 line bg-violet-300 relative z-10 animate-wiggle"></div>
        )}
        {!isYouTurn && (
          <div className="h-1 line bg-violet-300 relative z-10 animate-wiggle"></div>
        )}
        <div className="h-1 bg-gray-200 relative top-[-4px] z-0"></div>
      </div>
      {!cities.length ? (
        <p className="flex items-center justify-center px-6 text-sm leading-[21px] text-gray-400">
          Первый участник вспоминает города...
        </p>
      ) : (
        <>
          <ul className="p-4 flex flex-col items-start gap-y-2 overflow-y-hidden h-full">
            {cities?.map((city, index, arr) =>
              index === arr.length - 1 ? (
                <li
                  key={city}
                  ref={ref}
                  className="odd:text-white even:bg-violet-50 odd:bg-violet-500 
                 even:text-gray-700 px-3 py-2 rounded-xl even:mr-auto odd:ml-auto even:rounded-bl-none odd:rounded-br-none"
                >
                  {city}
                </li>
              ) : (
                <li
                  key={city}
                  className="odd:text-white even:bg-violet-50 odd:bg-violet-500 
                 even:text-gray-700 px-3 py-2 rounded-xl even:mr-auto odd:ml-auto even:rounded-bl-none odd:rounded-br-none"
                >
                  {city}
                </li>
              )
            )}
          </ul>
          <p className="text-sm text-gray-400 text-center">{`Всего перечислено городов: ${cities.length}`}</p>
        </>
      )}
      <form
        onSubmit={handleSubmit}
        className=" bg-gray-100 py-2 px-3 rounded m-4"
      >
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder={
              isYouTurn
                ? isFirstSubmit
                  ? "Напишите любой город, например: Где вы живете?"
                  : `Знаете город на букву "${LastChar.toUpperCase()}" ?`
                : "Ожидаем ответ соперника..."
            }
            className="placeholder:text-gray-700 bg-gray-100 w-full outline-none disabled:placeholder-shown:none pr-4"
            onChange={(e) => changeValue(e.target.value)}
            value={value}
            disabled={!isYouTurn}
          />
          <button
            type="submit"
            className="bg-violet-600 text-white p-[6px] rounded disabled:bg-gray-400 hover:opacity-75 transition-all"
            disabled={!isYouTurn || !value}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_7618_580)">
                <path
                  d="M8.33337 11.6667L17.5 2.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5001 2.5L12.0834 17.5C12.0468 17.5798 11.9881 17.6474 11.9143 17.6948C11.8404 17.7422 11.7545 17.7674 11.6667 17.7674C11.579 17.7674 11.493 17.7422 11.4192 17.6948C11.3453 17.6474 11.2866 17.5798 11.2501 17.5L8.33339 11.6667L2.50006 8.75C2.42027 8.71344 2.35266 8.65474 2.30526 8.58088C2.25786 8.50701 2.23267 8.4211 2.23267 8.33333C2.23267 8.24557 2.25786 8.15965 2.30526 8.08579C2.35266 8.01193 2.42027 7.95323 2.50006 7.91667L17.5001 2.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
      </form>
    </div>
  );

  const result = isYouTurn ? (
    <ResultPage citiesCount={cities.length} city={lastCity} status="fail" />
  ) : (
    <ResultPage citiesCount={cities.length} city={lastCity} status="win" />
  );

  return !countdownOver ? game : result;
}
