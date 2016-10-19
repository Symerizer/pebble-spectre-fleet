/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');
var fleetSchedule = 'http://www.smercier.net/';

var main = new UI.Card({
  title: 'Spectre Fleet Schedule',
});

main.show();

main.on('click', 'select', function(e){
  ajax({ url: fleetSchedule, type: 'json' },
     function(data) {
       console.log(data);
         var eventMenu = new UI.Menu();
         for (var x = 0; x < Object.keys(data).length; x++) {
           eventMenu.item(0, x, { title: data[x][2], subtitle: data[x][1] });
         }

         eventMenu.show();
         eventMenu.on('select', function(e){
           console.log(data);
           var index = e.itemIndex;
             var eventCard = new UI.Card({
                 title: data[index][1],
                 subtitle: data[index][2],
                 body: data[index][0] + "\nFC: "+data[index][3] + "\nStaging:"+data[index][4]+"\nDetails:"+data[index][6]+"\n"+data[index][5],
                 scrollable: true,
             });
           eventCard.show();
         });
     }, function(){
       console.log('failure');
     });
});

