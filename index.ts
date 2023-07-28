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
