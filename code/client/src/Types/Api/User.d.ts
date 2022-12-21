export type User = {
  id: string;
  email: string;
  name: string;
  firstName: string;
  familyName: string;
  picture: string;
};

export type UserAuth = {
  user: User;
  token: string;
};
