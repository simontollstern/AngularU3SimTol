// Model for admins, contains all information
export class AdminFull {
  constructor(
    public firstName:string,
    public lastName:string,
    public email: string,
    public password: string
  ) { }
}
