var str = "name";
console.log(str);

const nums = 35231;

function digitize(n) {
  const str = n + "";

  return str.split("").reverse();
}

console.log(digitize(35231));

///////
const surveyResults = [
  { user: "user1", rock: 4, pop: 6, jazz: 7 },
  { user: "user2", rock: 7, pop: 8, jazz: 3 },
  { user: "user3", rock: 5, pop: 9, jazz: 2 },
  { user: "user4", rock: 6, pop: 4, jazz: 6 },
];

// Вам необходимо создать функцию aggregateSurveyResults, которая агрегирует данные из этого массива, подсчитывая общее количество предпочтений для каждого жанра музыки.
// Функция должна вернуть объект, где ключами будут названия жанров музыки, а значениями - суммарное количество предпочтений по каждому жанру.

// Пример использования функции:
// const aggregatedResults = aggregateSurveyResults(surveyResults);

// Ожидаемый результат:
// console.log(aggregatedResults); // { rock: 22, pop: 27, jazz: 18 }

const aggregateSurveyResults = (genresArray) => {
  const result = { rock: 0, pop: 0, jazz: 0 };

  console.log(Object.entries(genresArray));
};

aggregateSurveyResults(surveyResults);

////

const array = [1, 2, 2, 3, 4, 4];

const uniqueValues = array.filter(
  (value, index, self) => self.indexOf(value) === index
);

console.log(uniqueValues(array));
