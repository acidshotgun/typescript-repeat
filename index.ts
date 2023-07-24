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

//////////////////////////////////////////////////////////////////////

const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};

const waterUserData = {
    readings: 3,
    units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

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
