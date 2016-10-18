/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'Spectre Fleet Schedule',
});

main.show();

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Incoming fleets',
      }, {
        title: '18/10 - 02:00',
        subtitle: 'Combat Ceptors with Morathia, in Amarr (Fleet MOTD will have fits)'
      }, {
        title: '18/10 - 03:00',
      }, {
        title: 'Fourth Item',
      }]
    }]
  });
  menu.show();
});
