
  var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3kQAZHgzH6SAix'}).base('app7PiRH6J2bC4tS9');

base('Table 1').find('recak5uIHLNpI8Odc', function(err, record) {
    var firstValue = document.getElementById("name");
    firstValue.innerHTML = record.get("Name");
    // console.log(record.get('Name'));

    var secondValue = document.getElementById("short");
    secondValue.innerHTML = record.get("shortdesc");
    //  console.log(record.get('shortdesc'));

    var thirdValue = document.getElementById("long");
    thirdValue.innerHTML = record.get("longdesc");

 



    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});