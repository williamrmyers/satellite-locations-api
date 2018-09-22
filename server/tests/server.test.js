const request = require('supertest');
const expect = require('expect');
const app = require('./../server');
const models = require('./../models/satellite');


describe('Get Satellites', () =>{

  it('should return 10 items.', (done) => {
    request(app)
    .get('/all/geo/?limit=10&start=0')
    .expect('Content-Type', /json/)
    .expect(200)
      .expect( (res) => {
        expect(res.body.satellites.length).toBe(10);
      })
    .end(done);
  });

});
