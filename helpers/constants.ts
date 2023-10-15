interface User {
  id: string;
  name: string;
  email: string;
  password: string
}

export const users: User[] = [
  { id: "1", name: "testUser", email: "testUser@testMail.com", password: "123" },
  { id: "2", name: "testUser2", email: "testUser2@testMail.com", password: "234" },
];
