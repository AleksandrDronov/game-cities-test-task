import Link from "next/link";

interface ResultPageProps {
  citiesCount: number;
  city: string;
  status: "win" | "fail";
}

function ResultPage({ citiesCount, city, status }: ResultPageProps) {
  return (
    <div className="flex flex-col text-center items-center text-xl justify-between w-[576px] bg-white rounded-2xl p-10 gap-y-9">
      <div>
        {status === "fail" ? (
          <h1>К сожалению твое время вышло!</h1>
        ) : (
          <h1>Поздравляем тебя с победой!</h1>
        )}
        {status === "fail" ? (
          <p>Твой противник победил!</p>
        ) : (
          <p>Твой противник не вспомнил нужный город!</p>
        )}
      </div>
      <p
        className={
          status === "fail"
            ? "text-red-600 text-3xl"
            : "text-green-600 text-3xl"
        }
      >
        00:00
      </p>
      <div>
        <p>{`Всего было перечислено городов: ${citiesCount}`}</p>
        <p>Очень не плохой результат!</p>
      </div>
      <div>
        <p>Последний город названный победителем</p>
        <p className="text-2xl pt-4">{city}</p>
      </div>
      <Link
        href="/"
        className="bg-violet-600 text-white text-base py-2 px-4 rounded hover:opacity-75 transition-all"
      >
        Начать новую игру
      </Link>
    </div>
  );
}

export default ResultPage;
