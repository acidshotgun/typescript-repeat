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

+ Если ф-я ничего не возвращает (это может быть просто вычисление или вывод в консоль) => тип указывается `void`

```typescript
  const sumNumbers = (a: number, b: number): void => {
    // Ничего не возвращается
    // Просто вывод в консоль 
    console.log(a + b + ""); // 
  };
  
  sumNumbers(10, 5);
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

<hr>
<br>
<br>

<h2>Синонимы типов (type aliases)</h2>

- [ ] `Type` - позволяет:

  + Объеденять множество значений.
  + Использовать один тип в разных местах
  + Описывать структуру объектов
  + Описывать отдельные типы
     
  ```typescript
    /* 
      Можно поместить множество типов и использовать как отдельные
      И использовать в разных местах
    */
    type ID = string | number;
    type UserRole = "admin" | "moderator" | "creator" | null;
    
    // Типизируем большие структуры типа объектов
    type TFunc = {
      name: string;
      age: number;
      id: ID;
      role: UserRole;
    };
    
    // Типизируем при помощи Type
    const showInfo = (user: TFunc): string => {
      const { name, age } = user;
    
      return `Name: ${name} age: ${age}`;
    };
    
    // Ошибка - отсутствует role
    console.log(showInfo({ name: "Sasha", age: 15, id: "id_123" }));
  ```

  <hr>
<br>
<br>

<h2>Интерфейсы (interfaces)</h2>

- [ ] `Interface` - позволяет делать то же самое, что и `Type`.

```typescript
  interface IUser {
    name: string;
    age: number;
    id: ID;
    role: UserRole;
  }
  
  const showUser = (user: IUser): void => {
    console.log(user);
  };
  
  showUser({ name: "Sasha", age: 15, id: "id_123", role: "creator" });
```

<hr>
<br>
<br>

<h2>Разница между синонимами типов и интерфейсами</h2>

- [ ] Синонимы типов и интерфейсы очень похожи. Почти все возможности `interface` доступны в `type.`
- [ ] Ключевым отличием между является то, что `type` не может быть повторно открыт для добавления новых свойств, в то время как `interface` всегда может быть расширен.

  <br>
  
  <h3>+ Пример расширения интерфейса:</h3>

  ```typescript
    interface IUser {
      nickName: string;
    }
    
    // Расширяем интерфейс от IUser
    interface IAdmin extends IUser {
      role: "admin" | "moderator" | null;
    }
    
    const adminUser: IAdmin = {
      nickName: "zhopa",
      role: "admin",
    };
  ```

    <br>
  
  <h3>+ Пример расширения типа с помощью пересечения (intersection):</h3>

  - [x] Комбинировать / расширять типы можно с помощью приема `пересечения (intersection)` обозначается как (`&`)
  - [x] Благодаря этому можно комбинировать несколько типов
     
  ```typescript
    type Name = {
      name: string;
    };
    type Age = {
      age: number;
    };
    
    type User = Name &
      Age & {
        isAdmin: boolean;
      };
    
    const showUserData = (user: User) => {
      console.log(user);
    };
    
    showUserData({ name: "sasha", age: 15, isAdmin: false });
  ```

<br>
  
<h3>+ Пример добавления новых полей в существующий интерфейс:</h3>

```typescript
  interface IUser {
    name: string;
  }
  
  interface IUser {
    age: number;
  }
  
  const user: IUser = {
    name: "Sasha",
    age: 15,
  };
```

<br>
  
<h3>+ Тип не может быть изменен после создания:</h3>

```typescript
  type User = {
    name: string;
  }
  
  type User = {
    age: number;
  }
  // Ошибка: повторяющийся идентификатор 'User'
```

<br>

<h3>+ Когда type, когда interface...</h3>

- [x] **Интерфейсы (Interfaces)**:

+ Используются для описания структуры или формы объектов, классов и компонентов React.
+ Применяются для типизации объектов, которые представляют собой экземпляры классов, функций, ожидающих объекты с определенной структурой.
+ Часто используются для определения контракта, который объекты или классы должны соблюдать.

<br>

- [x] **Типы (Types)**:

+ Используются для создания алиасов для существующих типов данных и определения пользовательских типов данных.
+ Применяются для типизации данных, не связанных с объектами, например, для типизации переменных, алиасов, функций и т. д.
+ Полезны для создания новых типов данных, которые не связаны с конкретной структурой объекта или класса.

<br>

- [x] **Соглашения**:

+ Используйте интерфейсы для **типизации объектов, классов и компонентов**.
+ Используйте типы для **типизации переменных, алиасов и функций**.

<hr>
<br>
<br>

<h2>Утверждение типа (type assertion)</h2>

![image](https://github.com/acidshotgun/typescript-repeat/assets/117285472/6083624f-4942-481a-b082-d7b0adce0bd1)

<hr>
<br>
<br>

<h2>Литеральные типы (literal types)</h2>

- [x] В дополнение к общим типам `string и number`, мы можем ссылаться на `конкретные строки и числа`, находящиеся на определенных позициях.

<br>

- [ ] `Литеральные типа` - позволяют задач для типа конкретное значение.
- [ ] Их можно так же комбинировать с примитивными типами. `number | "Hello world"`

![image](https://github.com/acidshotgun/typescript-repeat/assets/117285472/d8719a9d-b249-438d-89e0-3bb5826e9252)

