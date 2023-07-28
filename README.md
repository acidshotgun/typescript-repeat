# typescript-repeat

# Общие сведения о typescript

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/111.png)

<hr>

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/222.png)

<hr>

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/333.png)

<hr>

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/444.png)

<hr>
<br>
<br>

# Система типов в TS

Примитивы: 

```typescript
// После обьявления переменной указывается ее тип.
const isBirthdayData: boolean = true;
let ageData: number = 17;
const userNameData: string = "John";

// Object

// null и undefined: зн-е не известно(не существует) и зн-я не определено(переменная пуста).
let some; // - этот код выдаст не undefined, а any, поэтому всегда указываем тип. И по назначению.

// bigint и symbol

any // - дословно "любое значение". Лушче стараться не использовать этот тип.
// В JS/TS существуют операции, которые возвращают any в любом случае.
// Например, JSON.parse() Это происходит из за того, что результат функции невозможно предсказать.

// В JSON - строке может быть какой угодно тип данных и TS не знает этого заранее и не знает какие данные/методы там есть и не подскажет об ошибке.

// В TS можно получить any, если создать пустую переменную. Нужно избегать такого поведения. Указывайте сразу, что за данные там будут:

never // когда ф-я не заканчивается возвращаемым зн-м. Они могут специально вренуть ошибку или зависнуть.
// Как пример бесконечный цикл. Используется крайне редко. 

```

<hr>
<br>
<br>

# Использование системы типов в функциях

<h2>Типизация аргументов функций.</h2>

- [x] По умолчанию, если не указать тип каждого аргумента ф-ии, то **TS** сообщит об ошибке.

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/func1.png)

<br>

<h2>Типизация возвращаемого значения.</h2>

- [x] Второй ключевой момент любой функции - это возвращаемое значение.
Если TS будет знать, что именно функция может вернуть, то он сможет
вам подсказывать об ошибках в будущем, при её использовании.

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/func2.png)

<h2>Практика типизации.</h2>

```typescript
// Иммитация JSON курса валюты.
const currRate: string = "1.05";

// Запрос, где аргумент string, тк JSON - это строка.
// Ф-я возвращает number.
// data - это number тк из JSON получаем число.
const fetchCurr = (response: string): number => {
    const data: number = JSON.parse(response);
    return data;
};

// Конвертация с указанием принимаемых типов.
// Тип возврата void, тк ф-я ничего не возвращает, а лишь выводит зн-е.
// res будет хранить число - тоже указываем number/
function transferEurToUsd(
    available: boolean,
    amount: number,
    commission: number
): void {
    if (available) {
        let res: number = fetchCurr(currRate) * amount * commission;
        console.log(res);
        // Или запись в элемент на странице вместо консоли
    } else {
        console.log("Сейчас обмен недоступен");
    }
}

transferEurToUsd(true, 500, 1.05);
```

<hr>
<br>
<br>


# Типизация объектов и деструктуризация.

<h2>Объекты в TypeScript</h2>

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/obj1.png)

<br>

<h2>Деструктуризация объектов</h2>

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/obj2.png)

<hr>
<br>
<br>

# Массивы в typescript.

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/array1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/array2.png)

<h3>ПРАКТИКА ДОМАШКА ЗАДАЧА</h3>

```typescript
// Затипизировать 
// Два объекта с использованием воды/энергии.
const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};

const waterUserData = {
    readings: 3,
    units: "m3",
};

// Тарифы за энергию.
const elRate: number = 0.45;
const wRate: number = 2;

// Массив с счетами за энергрию/воду.
const monthPayments: number[] = [0, 0]; // [electricity, water]

// Ф-я вычисляет месячную плату и записывает зн-я в monthPayments.
const calculatePayments = (
    elData: {
        readings: number;
        units: string;
        mode: string;
    },
    wData: {
        readings: number;
        units: string;
    },
    elRate: number,
    wRate: number
): void => {
    if (elData.mode === "double" && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    } else {
        monthPayments[0] = elData.readings * elRate;
    }

    monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// Ф-я выставляет счет.
const sendInvoice = (
    monthPayments: number[],
    electricityUserData: {
        readings: number;
        units: string;
        mode: string;
    },
    waterUserData: {
        readings: number;
        units: string;
    }
): string => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

    return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
```

<hr>
<br>
<br>

# Tuples (кортежи).

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/tupple.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/tupple2.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/tupple3.png)

<hr>
<br>
<br>

# Union (Объединение).

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/union1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/union2.png)

<hr>
<br>
<br>

# Сужение типов (Narrowing).

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/Narrowing1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/Narrowing2.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/Narrowing3.png)

<hr>
<br>
<br>

# Примитивные литеральные типы (Literal types).

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/lit1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/lit2.png)

<hr>
<br>
<br>

# Псевдонимы типов (Type aliases).

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/typeAliases1.png)

<br>
<hr>
<hr>
<hr>

# РАЗДЕЛ 3 НЕОБХОДИМЫЙ УРОВЕНЬ.

# Type и пересечение типов. (Продвинутый type)

<h3>Type:</h3>

- [x] Иногда наши литеральные типы могут содержать много значений, иногда мы хотим их переиспользовать в разных частях кода. В таких ситуациях хотелось бы вынести такой код в отдельную сущность по типу переменной. Этим и занимаются псевдонимы:

```typescript
// Создаем псевдоним типа для использования/переиспользования далее.
type TypeAnimationTiming = "ease" | "ease-out" | "ease-in";
type TypeAnimationID = string | number;

// Типизируем аргументы ф-ии с помощью псевдонимов типов.
function createAnimation(
  id: TypeAnimationID,
  animName: string,
  timing: TypeAnimationTiming = "ease",
  duration: number
): void {}
```

<br>
    
<h3>Продвинутый type</h3>

- [x] Можно создавать type, который содержит описание объекта, а не только отдельные литералы. Это позволит нам указывать объектам, что они должны быть одной формы (одного формата, object shape):

- [x] Такие значения удобнее читать, можно переиспользовать и поместить любые типы в псевдоним. Их можно создавать внутри функций, внутри методов классов или объектов, внутри отдельных модулей и тп. Когда вам это нужно.
В type можно помещать и объекты.

- [x] После компиляции они исчезают, так что эта возможность существует только в TS.

```typescript
// Создание type
// 2 обязательных и name - необязательный

// Теперь type с именем TypeConfig можно использовать для аннотирования других объектов.
// Если они не будут соответствовать этой форме - будет ошибка.
// В свойствах объекта внутри type может быть что угодно (литералы, типы, объекты и тп.)
type TypeConfig = {
  protocol: "http" | "https";
  port: 3000 | 3001;
  name?: string;
};

// Описываем объекты при помощи созданного типа TypeConfig
const serverConfig: TypeConfig = {
  protocol: "http",
  port: 3001,
};

const backupConfig: TypeConfig = {
  protocol: "https",
  port: 3000,
  name: "store",
};
```

<br>

<h3>Type Intersection(пересечение типов)</h3>

- [x] Нам часто приходится комбинировать типы для удобного и быстрого создания нужных нам. Иногда мы не хотим дублировать код (принцип DRY), иногда типы приходят нам из сторонней библиотеки или файла. В этих и других случаях нам понадобится оператор пересечения (&).

- [x] Благодаря оператору пересечения (intersection, &) мы скомбинировали два типа и получили тип ConfigWithRole. Он содержит все свойства из объединенных типов. Теперь все три type можно использовать в коде.

```typescript
type TypeConfig = {
  protocol: "http" | "https";
  port: 3000 | 3001;
  name?: string;
};

// Добавим еще один тип с ролью
type TypeRole = {
  role: string;
};

// Создадим тип на основе двух предыдущих.
// Этот тип объеденит в себе все описания двух прошлых.
type TypeConfigWithRole = TypeConfig & TypeRole;

// Описываем объект с помощью пересеченных типов.
const serverConfig: TypeConfigWithRole = {
  protocol: "http",
  port: 3001,
  role: "admin",
  name: "moskit11111",
};
```

<br>

<h3>Type у функций</h3>

- [x] В отдельный type можно выносить и описание функции:

```typescript
// Тип описания ф-ии с описание входных параметров.
type TypeStartServer = (
  protocol: "http" | "https",
  port: 3000 | 3001
) => string;

// Импользуем тип.
const startServer: TypeStartServer = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};
```

<hr>
<br>
<br>

# Interface.

<h3>База:</h3>

- [x] Интерфейс - это еще один тип в TS, который позволяет синтаксически записать шаблон того , который будет создан

- [x] Интерфейс создается при помощи ключевого слова interface, имени (начиная с I) с большой буквы и раскрытия фигурных скобок:

- [x] В свойствах объекта может быть что угодно: литералы, другие типы и тд. При замене type на interface в коде ничего не сломается. Они действительно очень похожи. 

```typescript
// Интерфейс, описывающий объект
interface IConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
  name?: string;
}

const serverConfig: IConfig = {
  protocol: "http",
  port: 3001,
  name: "moskit11111",
};

const backupConfig: IConfig = {
  protocol: "https",
  port: 3000,
};
```

<br>

<h3>Объединение интерфейсов:</h3>

- [x] Для комбинации нескольких интерфейсов и получения нового используется ключевое слово extends:
- [x] Полученый интерфейс будет иметь все свойства указаных + можно добавлять новые внутри фигурных скобок 

```typescript
// Интерфейс, описывающий объект.
interface IConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
  name?: string;
}

// Интерфейс роли.
interface IRole {
  role: string;
}

// Интерфейс, наследующий св-ва у IConfig и IRole одновременно.
// Плюс можем добавить доп.
interface IConfigRole extends IConfig, IRole {
  rights: "all" | "read";
}

const serverConfig: IConfig = {
  protocol: "http",
  port: 3001,
  name: "moskit11111",
};

const backupConfig: IConfigRole = {
  protocol: "https",
  port: 3000,
  role: "admin",
  name: "acidshotgun",
  rights: "all",
};
```

<br>

<h3>Описание методов объекста:</h3>

- [x] И типы и интерфейсы могут описывать методы объектов.

```typescript
// Интерфейс, описывающий объект + описали метод.
interface IConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
  name: string;
  role: "admin" | "user";
  rights: "all" | "read";
  // Метод с параметрами.
  log: (msg: string) => void;
}

// Добавили в объект метод log.
const serverConfig: IConfig = {
  protocol: "http",
  port: 3001,
  name: "moskit11111",
  role: "admin",
  rights: "all",
  log: (msg: string): void => console.log(msg),
};

// Типизировали входящий аргумент для метода log.
// Если мы не знаем какой аргумент будет приходить в ф-ю, то можно написать:
//    log: Function
// Но это не круто
// Всегда нужно типизировать.
const startServer = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  // Передали сообщения в метод log.
  log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

// Вызываем в ф-ии еще и наш метод.
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
```

<br>

<h3>Когда мы не знаем, что будет в объекте.</h3>

- [x] Если мы не знаем, что будет в объекте, но знаем что это будет один тип данных можно воспользоваться след синтаксисом.

```typescript
// Ключи - строка, зн-е - строка.
// И тд.
interface IStyle {
  [key: string]: string;
}

const style: IStyle = {
  position: "absolute",
  padding: "25px",
  border: "1px solid black",
  borderRadius: 50, // - ошибка(number)
};
```

<br>

<h3>ИТОГ:</h3>

- [x] Интерфейсы и типы нужны для того, чтобы описывать объекты(пока что) - что в них будет содержаться и в каком кол-ве.
- [x] Интерфейсы и типы немного отличаются по синтаксису.
- [x] За счет описания структуры можно создавать интересные паттерны поведения кода в разных ситуациях.
- [x] Главное - во время написания есть подсказки и предупреждения об ошибках для исправления во время разработки.

<hr>
<br>
<br>

# Различия между type и interface.

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/diffff1.png)
![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/diffff2.png)
