interface IUser {
  login: string;
  password: number;
  email: string;
  avatar: string | undefined;
}

const userData: IUser = {
  login: "Thomas",
  password: 12345,
  email: "2323@fff.ru",
  avatar: "",
};

console.log(userData);
