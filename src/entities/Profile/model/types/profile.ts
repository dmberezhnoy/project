import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface IProfile {
    firstName?: string,
    lastName?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface IProfileSchema {
    data?: IProfile;
    formData?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
