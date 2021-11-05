


  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'key3kQAZHgzH6SAix'}).base('app7PiRH6J2bC4tS9');
  
  
  base('Table 1').find('rec4il5csW5MmEITV', function(err, record) {
      var firstValue = document.getElementById("name");
      firstValue.innerHTML = record.get("Name");
      // console.log(record.get('Name'));
  
      var secondValue = document.getElementById("short");
      secondValue.innerHTML = record.get("shortdesc");
      //  console.log(record.get('shortdesc'));
  
      var thirdValue = document.getElementById("long");
      thirdValue.innerHTML = record.get("longdesc");
  
      var fourthValue = document.getElementById("Date");
      fourthValue.innerHTML = record.get("date");
  
      var fifthValue = document.getElementById("links");
      fifthValue.innerHTML = record.get("links");
  
      var sixthValue = document.getElementById("createdBy");
      sixthValue.innerHTML = record.get("creator");
  
      var sixthValue = document.getElementById("vids");
      sixthValue.innerHTML = record.get("video");
  

  
      var seventhValue = document.getElementById("img").src=record.get("pictures").url;
  
      if (err) { console.error(err); return; }
      console.log('Retrieved', record.id);
  });
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  
  