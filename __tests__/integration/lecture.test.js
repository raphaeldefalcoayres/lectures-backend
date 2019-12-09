import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('Lecture', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to add a list lectures in tracks', async () => {
    const lectures = {
      data: [
        'Writing Fast Tests Against Enterprise Rails 60min',
        'Overdoing it in Python 45min',
        'Lua for the Masses 30min',
        'Ruby Errors from Mismatched Gem Versions 45min',
        'Ruby on Rails: Why We Should Move On 60min',
        'Common Ruby Errors 45min',
        'Pair Programming vs Noise 45min',
        'Programming in the Boondocks of Seattle 30min',
        'Ruby vs. Clojure for Back-End Development 30min',
        'User Interface CSS in Rails Apps 30min',
        'Communicating Over Distance 60min',
        'Rails Magic 60min',
        'Woah 30min',
        'Sit Down and Write 30min',
        'Accounting-Driven Development 45min',
        'Clojure Ate Scala (on my project) 45min',
        'A World Without HackerNews 30min',
        'Ruby on Rails Legacy App Maintenance 60min',
        'Rails for Python Developers lightning',
      ],
    };
    const response = await request(app)
      .post('/lectures')
      .send(lectures);
    expect(response.status).toBe(200);
  });

  it('should not add lectures if the array is not a string', async () => {
    const lectures = {
      data: [1, 2],
    };
    const response = await request(app)
      .post('/lectures')
      .send(lectures);
    expect(response.status).toBe(400);
  });
});
