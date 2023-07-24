// let userName: string = "Ivan";

// userName = `pisapopa`;

// console.log(userName);

const isBirthdayData: boolean = true;
let ageData: number = 17;
const userNameData: string = "John";

const userData = {
    isBirthdayData: true,
    ageData: 17,
    userNameData: "John",
    messages: {
        error: "error",
    },
};

function logBrtMsg({
    isBirthdayData,
    ageData,
    userNameData,
    messages: { error },
}: {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
    messages: {
        error: string;
    };
}): string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toLocaleUpperCase()}, ${ageData + 1}`;
    } else {
        return error;
    }
}

console.log(logBrtMsg(userData));
