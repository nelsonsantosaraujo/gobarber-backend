import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeAppointmentRepository = new FakeUsersRepository();
    const createAppointment = new CreateUserService(fakeAppointmentRepository);

    const user = await createAppointment.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should be not able to create a new user with same email from another', async () => {
    const fakeAppointmentRepository = new FakeUsersRepository();
    const createAppointment = new CreateUserService(fakeAppointmentRepository);

    await createAppointment.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(
      createAppointment.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
