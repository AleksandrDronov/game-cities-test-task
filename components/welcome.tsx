function Welcome() {
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
            Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого
            бы пропускаем эту букву и игрок должен назвать город на букву
            стоящую перед ъ или ь знаком.
          </li>
          <li>
            Каждому игроку дается 2 минуты на размышления, если спустя это время
            игрок не вводит слово он считается проигравшим
          </li>
        </ul>
      </div>
      <button className="bg-violet-600 text-white py-2 px-4 rounded mb-6">
        Начать игру
      </button>
    </div>
  );
}

export default Welcome;
