var Clock = require('./Clock');
var Controls = require('./Controls');

var Timer = React.createClass({

  getInitialState: function () {
    return {countdownStatus: 'paused', count: 0}
  },

  handleStatusChange: function (newStatus) {
    switch (newStatus) {
      case 'started':
        this.timer = setInterval(() => {
          this.setState({
            count: this.state.count + 1
          });
        }, 1000);
        this.setState({countdownStatus: newStatus});        
        break;
      case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        this.setState({countdownStatus: newStatus});
        break;
      case 'stopped':
        this.handleStatusChange('paused');
        this.setState({count: 0});        
        break;
    }
  },

  render: function () {
    var {count, countdownStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}></Clock>
        <Controls
          countdownStatus={countdownStatus}
          onStatusChange={this.handleStatusChange}></Controls>
      </div>
    );
  }
});

module.exports = Timer;