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
