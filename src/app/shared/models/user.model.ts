export interface User {
  name: string | null;
  email: string;
  password: string;
  id: string;
  role: string;
}

export interface UserRegistration {
  email: string;
  name: string;
  password: string;
}
