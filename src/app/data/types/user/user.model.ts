export interface IUserInfo {
email: string;
phone: string;
password: string;
}

export type IUserLogin = Pick<IUserInfo, 'email' | 'password'>;