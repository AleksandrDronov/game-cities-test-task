export default function reduceValue(value: string) {
  //приводим значение к нужному формату
  let trimValue = value.trim();
  let reducedValue: string;

  if (!trimValue.includes("-")) {
    return (reducedValue = trimValue
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
      .join(" "));
  } else if (trimValue.includes("-")) {
    return (reducedValue = trimValue
      .split("-")
      .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
      .join("-"));
  }

  return (reducedValue = trimValue);
}
