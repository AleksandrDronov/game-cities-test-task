import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center w-[576px] bg-white rounded-2xl">
      <h1 className="w-full text-base text-center pt-[17px] pb-[18px] border-gray-100 border-solid border-b-4">
        Игра в города на время
      </h1>
      <div className="p-6 pt-[27px] text-sm leading-[21px] text-gray-700">
        <p>Цель: Назвать как можно больше реальных городов.</p>
        <ul className="pt-6 pl-[22px] list-disc">
          <li>Запрещается повторение городов.</li>
          <li>
            Названий городов на твердый “ъ” и мягкий “ь” знак нет. Из-за этого
            мы пропускаем эту букву и игрок должен назвать город на букву
            стоящую перед “ъ” или “ь” знаком.
          </li>
          <li>
            Каждому игроку дается 2 минуты на размышления, если спустя это время
            игрок не вводит слово он считается проигравшим
          </li>
        </ul>
      </div>
      <Link
        href="/firstcity"
        className="bg-violet-600 text-white py-2 px-4 rounded mb-6 hover:opacity-75 transition-all"
      >
        Начать игру
      </Link>
    </div>
  );
}
