export interface IUserInfo {
email: string;
mobile: string;
password: string;
}

export type IUserLogin = Pick<IUserInfo, 'email' | 'password'>;