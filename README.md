# typescript-repeat

<h2>Общие сведения о typescript </h2>

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

<h2>14. Типизация объектов и деструктуризация.</h2> 

<h3>- Объекты в TypeScript</h3>

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/obj1.png)

<br>

<h3>- Деструктуризация объектов</h3>

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/obj2.png)

<hr>
<br>
<br>

<h2>15. Массивы в typescript.</h2> 

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/array1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/array2.png)

<h3>-ПРАКТИКА ДОМАШКА ЗАДАЧА</h3>

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

<h2>17. Tuples (кортежи).</h2> 

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/tupple.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/tupple2.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/tupple3.png)

<hr>
<br>
<br>

<h2>18. Union (Объединение)</h2> .

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/union1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/union2.png)

<hr>
<br>
<br>

<h2>19. Сужение типов (Narrowing).</h2> 

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/Narrowing1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/Narrowing2.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/Narrowing3.png)

<hr>
<br>
<br>

<h2>20. Примитивные литеральные типы (Literal types).</h2> 

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/lit1.png)

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/lit2.png)

<hr>
<br>
<br>

<h2>21. Псевдонимы типов (Type aliases).</h2> 

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/typeAliases1.png)

<br>
<hr>
<hr>
<hr>

# РАЗДЕЛ 3 НЕОБХОДИМЫЙ УРОВЕНЬ.

<h2>23. Type и пересечение типов. (Продвинутый type)</h2>

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

<h2>24. Interface.</h2> 

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

<h2>Различия между type и interface.</h2> 

![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/diffff1.png)
![](https://github.com/acidshotgun/typescript-repeat/blob/main/img/diffff2.png)

<h3>Когда type, когда interface...</h3>

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
