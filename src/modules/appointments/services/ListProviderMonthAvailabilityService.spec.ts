import FakeAppointmentRepository from '../repositories/fakes/FakeAppointsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the month availability of provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 3, 20, 8, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: false },
        { day: 22, available: true },
      ]),
    );
  });
});
