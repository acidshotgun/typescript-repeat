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
