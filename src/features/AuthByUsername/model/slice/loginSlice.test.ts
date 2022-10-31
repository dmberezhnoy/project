import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('set username', () => {
    const state: DeepPartial<ILoginSchema> = { username: '' };
    expect(loginReducer(state as ILoginSchema, loginActions.setUsername('username test')))
      .toEqual({ username: 'username test' });
  });

  test('set password', () => {
    const state: DeepPartial<ILoginSchema> = { password: '' };
    expect(loginReducer(state as ILoginSchema, loginActions.setPassword('password test')))
      .toEqual({ password: 'password test' });
  });
});
