import { ITestUserAuth, Subject, UserInfo } from "../service/types";
import avatar from "../images/avatar.png";
import avatarExtra from "../images/extra-avatar.png";

export const testUser: ITestUserAuth[] = [
  {
    email: "demo@gmail.com",
    password: "1234",
  },
];

export const testUserInfo: UserInfo = {
  userPhoto: avatar,
  userName: "Михаил",
  id: "2",
  messages: 2,
};

export const extraUserInfo: UserInfo = {
  userPhoto: avatarExtra,
  userName: "Анна",
  id: "1",
  messages: 0,
};

export const scheduleInfo: Subject[] = [
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-01",
    startTime: "2024-06-01T13:00:00",
    endTime: "2024-06-01T13:45:00",
    status: "attend",
    paid: false,
    teacher: "Teacher A",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-01",
    startTime: "2024-06-01T13:00:00",
    endTime: "2024-06-01T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher A",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-02",
    startTime: "2024-06-02T13:00:00",
    endTime: "2024-06-02T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-02",
    startTime: "2024-06-02T13:00:00",
    endTime: "2024-06-02T13:45:00",
    status: "attend",
    paid: false,
    teacher: "Teacher B",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-04",
    startTime: "2024-06-04T13:00:00",
    endTime: "2024-06-04T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher C",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-04",
    startTime: "2024-06-04T13:00:00",
    endTime: "2024-06-04T13:45:00",
    status: "pending",
    paid: true,
    teacher: "Teacher C",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-07",
    startTime: "2024-06-07T13:00:00",
    endTime: "2024-06-07T13:45:00",
    status: "pending",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-08",
    startTime: "2024-06-08T13:00:00",
    endTime: "2024-06-08T13:45:00",
    status: "rejected",
    paid: false,
    teacher: "Teacher C",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-08",
    startTime: "2024-06-08T13:00:00",
    endTime: "2024-06-08T13:45:00",
    status: "rejected",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-05",
    startTime: "2024-06-05T13:00:00",
    endTime: "2024-06-05T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher A",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-07",
    startTime: "2024-06-07T13:00:00",
    endTime: "2024-06-07T13:45:00",
    status: "pending",
    paid: false,
    teacher: "Teacher B",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-08",
    startTime: "2024-06-08T13:00:00",
    endTime: "2024-06-08T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher A",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-12",
    startTime: "2024-06-12T13:00:00",
    endTime: "2024-06-12T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher A",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-20",
    startTime: "2024-06-20T13:00:00",
    endTime: "2024-06-20T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-22",
    startTime: "2024-06-22T13:00:00",
    endTime: "2024-06-22T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-23",
    startTime: "2024-06-23T13:00:00",
    endTime: "2024-06-23T13:45:00",
    status: "attend",
    paid: false,
    teacher: "Teacher C",
  },
];

export const scheduleInfoExtra: Subject[] = [
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-01",
    startTime: "2024-06-01T13:00:00",
    endTime: "2024-06-01T13:45:00",
    status: "attend",
    paid: false,
    teacher: "Teacher A",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-01",
    startTime: "2024-06-01T13:00:00",
    endTime: "2024-06-01T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher A",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-02",
    startTime: "2024-06-02T13:00:00",
    endTime: "2024-06-02T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-02",
    startTime: "2024-06-02T13:00:00",
    endTime: "2024-06-02T13:45:00",
    status: "attend",
    paid: false,
    teacher: "Teacher B",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-04",
    startTime: "2024-06-04T13:00:00",
    endTime: "2024-06-04T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher C",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-04",
    startTime: "2024-06-04T13:00:00",
    endTime: "2024-06-04T13:45:00",
    status: "pending",
    paid: true,
    teacher: "Teacher C",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-07",
    startTime: "2024-06-07T13:00:00",
    endTime: "2024-06-07T13:45:00",
    status: "pending",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-08",
    startTime: "2024-06-08T13:00:00",
    endTime: "2024-06-08T13:45:00",
    status: "rejected",
    paid: false,
    teacher: "Teacher C",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-08",
    startTime: "2024-06-08T13:00:00",
    endTime: "2024-06-08T13:45:00",
    status: "rejected",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-05",
    startTime: "2024-06-05T13:00:00",
    endTime: "2024-06-05T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher A",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-19",
    startTime: "2024-06-19T13:00:00",
    endTime: "2024-06-19T13:45:00",
    status: "pending",
    paid: false,
    teacher: "Teacher B",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-02",
    startTime: "2024-06-02T13:00:00",
    endTime: "2024-06-02T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher C",
  },
  {
    subjectName: "Ментальная арифметика",
    date: "2024-06-12",
    startTime: "2024-06-12T13:00:00",
    endTime: "2024-06-12T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher A",
  },
  {
    subjectName: "Скорочтение",
    date: "2024-06-20",
    startTime: "2024-06-20T13:00:00",
    endTime: "2024-06-20T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-22",
    startTime: "2024-06-22T13:00:00",
    endTime: "2024-06-22T13:45:00",
    status: "attend",
    paid: true,
    teacher: "Teacher B",
  },
  {
    subjectName: "Программирование",
    date: "2024-06-23",
    startTime: "2024-06-23T13:00:00",
    endTime: "2024-06-23T13:45:00",
    status: "attend",
    paid: false,
    teacher: "Teacher C",
  },
];
