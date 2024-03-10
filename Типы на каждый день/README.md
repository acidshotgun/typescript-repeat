# Типы на каждый день

<br>

<h2>Примитивы + анотации</h2>

```typescript
  let num: number = 50; // Число
  let str: string = "hello"; // Строка
  let bool: boolean = true; // Логич тип
  let symbol: symbol = Symbol("id"); // Символ
  let biging: bigint = BigInt(10); // Бигинт
  
  /*
    РАЗОБРАТЬ
    Они по умолчанию имеют any если явно не указать тип

    Как правило привязки таких типов нет и указывается union => number | null например
  */
  let und: undefined = undefined;
  let nothing: null = null;
```

<hr>
<br>
<br>

<h2>Массивы</h2>

```typescript
  // База
  const numsArray: number[] = [1, 2, 3, 4, 5];
  
  const strArray: string[] = ["hello", "world", "dadada"];
  
  const boolArray: boolean[] = [true, false, true];
  
  const arrNumsArray: number[][] = [[1,2,3], [1,2,3]] // массив массивов
  
  // Можно встретить такое
  const numsArrayTwo: Array<number> = [1, 2, 3, 4, 5];
  
  const strArrayTwo: Array<string> = ["hello", "world", "dadada"];
  
  const arrStrArray: Array<string[]> = [["hello", "world"], ["dadada", "dodo"]]; // массив массивов
```

<hr>
<br>
<br>

<h2>Функции</h2>

- [ ] В JS функции, в основном, используются для работы с данными. TS позволяет определять типы как для входных (input), так и для выходных (output) значений функции.

<h3>Аннотации типа параметров</h3>

+ При определении функции можно указать, какие типы параметров она принимает:

```typescript
  const printName = (name: string) => {
    console.log(name);
  };
  
  printName(15); // Ошибка! Аргумент number
  printName("vasiliy", "vasya"); // Ошибка! Ожидается один аргумент
  printName("vasiliy"); // vasiliy
```

<br>

<h3>Аннотация типа возвращаемого значения</h3>

+ Также можно аннотировать тип возвращаемого функцией значения:

```typescript
  const sumNumbers = (a: number, b: number): string => {
    return a + b + ""; // Конкатенация (+ "") вернет строку
  };
  
  console.log(sumNumbers(10, 5));
```

<br>

<h3>Анонимные функции</h3>

+ Анонимные функции немного отличаются от обычных.
+ Когда функция появляется в месте, где TS может определить способ ее вызова, типы параметров такой функции определяются автоматически.

```typescript
  const strArray: string[] = ["hello", "world", "dadadad"];

  /* 
    Тип определяется на основе контекста вызова (не явно)
    Будут подсказки и ошибки
      можно указать и явно
  
    То же саоме и с анотацией возвращаемого зн-я
  */
  strArray.forEach((item) => {
    console.log(item.toUpperCase());
  });
```

<hr>
<br>
<br>

<h2>Типы объекта</h2>

+ `Объектный тип` - это любое значение со свойствами. Для его определения мы просто перечисляем все свойства объекта и их типы.

```typescript
  function printValues(obj: { name: string; age: number }) {
    const { name, age } = obj;
    console.log(`My name is ${name}, i'm ${age} old`);
  }
  
  printValues({ name: "sasha", age: 15 });
```

+ А вот ошибка

```typescript
  /* 
    А тут будет ошибка
    Поскольку св-ва age нет в объекте
    Но оно требуется в функции
  */
  const user = {
    name: "sasha",
    isAdmin: true,
  };
  
  function printValues(obj: { name: string; age: number }) {
    const { name, age } = obj;
    console.log(`My name is ${name}, i'm ${age} old`);
  }
  
  printValues(user); // Предупреждение об ошибке
```
