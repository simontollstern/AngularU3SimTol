// Model for admins, contains information required to log in
export class AdminLogin {
  constructor(
    public email: string,
    public password: string
  ) { }
}
