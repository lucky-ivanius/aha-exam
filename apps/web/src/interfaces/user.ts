export interface User {
  id: string;
  name: string;
  givenName: string;
  familyName: string;
  picture: string;
  email: string;
  isEmailVerified: boolean;
  accessToken: string;
  provider: string;
}
