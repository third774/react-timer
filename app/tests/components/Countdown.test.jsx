var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('../../components/Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
    it('should not count below 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001);      
    });
  });
});