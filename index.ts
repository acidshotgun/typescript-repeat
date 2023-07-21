// let userName: string = "Ivan";

// userName = `pisapopa`;

// console.log(userName);

const isBirthdayData: boolean = true;
let ageData: number = 17;
const userNameData: string = "John";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//     if (isBirthday) {
//         return `Congrats ${userName.toLocaleUpperCase()}, ${age + 1}`;
//     } else {
//         return "Error";
//     }
// }
const logBrtMsg = (
    isBirthday: boolean,
    userName: string,
    age: number
): string => {
    if (isBirthday) {
        return `Congrats ${userName.toLocaleUpperCase()}, ${age + 1}`;
    } else {
        return "Error";
    }
};

console.log(logBrtMsg(isBirthdayData, userNameData, ageData));
