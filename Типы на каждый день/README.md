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

<h3>+ Аннотации типа параметров</h3>

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

<h3>+ Аннотация типа возвращаемого значения</h3>

+ Также можно аннотировать тип возвращаемого функцией значения:

```typescript
  const sumNumbers = (a: number, b: number): string => {
    return a + b + ""; // Конкатенация (+ "") вернет строку
  };
  
  console.log(sumNumbers(10, 5));
```

<br>

<h3>+ Анонимные функции</h3>

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

<h3>+ Опциональные свойства</h3>

  - [ ] Чтобы сделать св-во `опциональный` - `необязательным` - используется **`?`**

  ```typescript
    /* 
      есть name
      нет surname
    */
    const user = {
      name: "sasha",
    };
    
    function printValues(obj: { name: string; surname?: string }) {
      const { name, surname } = obj;
    
      /*
        Предупреждение об ошибке ошибка!
        surname может быть undefined и метод на undefined сломает приложение
      */
      console.log(surname.toUpperCase());
    
      // В таких случаях делается проверка
      if (surname !== undefined) {
        console.log(surname.toUpperCase());
      }
    
      /* 
        Или современный метод
        оператор опциональной последовательности (`?`)
      */
      console.log(surname?.toUpperCase());
    }
    
    printValues(user);
  ```

<hr>
<br>
<br>

<h2>Объединения (unions)</h2>

  <h3>+ Базовый пример</h3>

- [ ] `Объединение` - это тип, сформированный из 2 и более типов, представляющий значение, которое может иметь один из этих типов. Типы, входящие в объединение, называются членами (members) объединения.

```typescript
  // Аргумент может быть либо number либо string
  const printId = (id: number | string): void => {
    console.log(`Ваш id: ${id}`);
  };
  
  printId(15); // Верно
  printId("id_abc1528"); // Верно
  printId({ myId: "145_adv" }); // Ошибка - тип "Object" не подходит
  // Argument of type '{ myID: number }' is not assignable to parameter of type 'string | number'.
```

  <br>

  <h3>+ Работа с объединениями + narrowing (сужение)</h3>

  + В случае с объединениями, TS позволяет делать только такие вещи, которые являются `валидными для каждого члена объединения`.
  + Например, если у нас имеется объединение `string | number`, мы не сможем использовать методы, которые доступны только для `string`:

  <br>

  - [x] `Сужение (narrowing)` - позволяют при помощи условия определить действия для конкретного типа из нескольких возможных.

  ```typescript
    // Аргумент может быть либо number либо string
    const printId = (id: number | string): void => {
      // Метод работает только со "string"
      console.log(id.toUpperCase()); // Ошибка
      //  Property 'toUpperCase' does not exist on type 'number'.
    };
  ```

  <br>

  + Решение данной проблемы заключается в `сужении (narrowing)` объединения. Например, TS знает, что только для `string` оператор `typeof` возвращает `'string'`:

  ```typescript
    // Аргумент может быть либо number либо string
    const printId = (id: number | string): void => {
      /*
        Ф-я выполнит действие в зависимости от типа
      */
      if (typeof id === "string") {
        console.log(id.toUpperCase());
      } else {
        console.log(id);
      }
    };
    
    printId("id_aboba12345"); // ID_ABOBA12345
    printId(12345); // 12345
  ```

<br>

  + Другой способ заключается в использовании функции, например `Array.isArray`:

  ```typescript
    // Аргумент может быть либо number[] либо string
    const sayHello = (arg: string[] | string): void => {
      // Если аргумент массив строк
      if (Array.isArray(arg)) {
        console.log(`Привет ${arg.join(" и ").toUpperCase()}`);
        // Если аргумент - просто string
      } else {
        console.log(`Привет ${arg}`);
      }
    };
    
    sayHello(["Саша", "Джамбулат"]); // Привет САША И ДЖАМБУЛАТ
    sayHello("Саша"); // Привет Саша
    sayHello([1, 2, 3]); // Ошибка - это массиво типов number
  ```

  <br>

  + В некоторых случаях все члены объединения будут иметь `общие методы`. Например, и массивы, и строки имеют метод `slice`.
  + Если каждый член объединения имеет общее свойство, `необходимость в сужении отсутствует`:

  ```typescript
    function getFirstThree(x: number[] | string) {
      return x.slice(0, 3)
    }
  ```
