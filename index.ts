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

// function printMessage(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((element) => console.log(element));
//   } else if (typeof msg === "number") {
//     console.log(msg * 10);
//   } else {
//     console.log(msg);
//   }
// }

function printMessage(msg: string | number): void {
  if (typeof msg === "string") {
    console.log(msg.toUpperCase());
  } else {
    console.log(msg * 10);
  }
  console.log(msg);
}

printMessage("Hi");

////////////

const startServer = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

startServer("http", 3000);
