var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('../../components/Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should initialize with 0 seconds and paused', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    expect(timer.state.count).toBe(0);
    expect(timer.state.countdownStatus).toBe('paused');
  });

  it('should count up while running', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    setTimeout(() => {
      expect(timer.state.count).toBe(2);
      done();
    }, 2001);
  });

  it('should reset to 0 seconds upon clear, and be paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    setTimeout(() => {
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);
      expect(timer.state.countdownStatus).toBe('paused');
      done();
    }, 1001);
  });

});