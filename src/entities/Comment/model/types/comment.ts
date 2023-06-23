import { IUser } from '@/entities/User';

export interface IComment {
    id: string;
    text: string;
    createdDate: string;
    user: IUser;
}
