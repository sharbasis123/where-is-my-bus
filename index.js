let fstop, lstop;
var fair = 0;
var bus1, bus2;
var time;

const bus_stop = ["behala", "howrah", "rashbehari", "khiddirpore", "hazra","kalighat"];




function showMap() {
    const map= document.getElementById("map")
    
    if( document.getElementById("container").contains(map))
    {
      map.remove()
    }

    const new_node_2 = document.createElement("section");
    new_node_2.setAttribute('id', 'map');
    new_node_2.classList.add('mt-2', 'text-light');
    new_node_2.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.076537515319!2d88.32667031464358!3d22.538805485200154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02775de26c3dfd%3A0xd7255ce261457bec!2sSt.%20Thomas&#39;%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1676652217015!5m2!1sen!2sin" width="100%" height="90%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><p>Bus arriving in <strong>${time} minutes</strong></p>`
    const container = document.getElementById('container');
    container.insertBefore(new_node_2, container.children[3]);
}

function display(bus1, bus2, fair) {

    const map= document.getElementById("map")
    
    if( document.getElementById("container").contains(map))
    {
      map.remove()
    }
    const new_node = document.createElement("section");
    new_node.innerHTML = `
    <table style="width:100%">
    <tr>
      <th>Sl. No</th>
      <th >Bus</th>
      <th >Fair</th>
    </tr>
    <tr>
      <td>1.</td>
      <td><a href="#map" class="bus" onclick="showMap()">${bus1}</a></td>
      <td>${fair}</td>
    </tr>
    <tr>
      <td>2.</td>
      <td><a href="#map" class="bus" onclick="showMap()">${bus2}</a></td>
      <td>${fair}</td>
    </tr>
  </table>`


    const element = document.getElementById("sharbasissur")
    new_node.classList.add('sharbasissur', 'mt-2', 'text-light');
    new_node.setAttribute('id', 'sharbasissur')
    if (element != null) {
        element.remove()
    }
    document.getElementById("container").appendChild(new_node)
}

function calculate(fstop, lstop) {
    //khiddirpore-howrah
    if ((fstop == "khiddirpore" && lstop == "howrah") || (lstop == "khiddirpore" && fstop == "howrah")) {
        bus1 = "37";
        bus2 = "259";
        fair = 15;
    }
    //howrah-khiddirpore
      if ((fstop == "howrah" && lstop == "khiddirpore") || (lstop == "howrah" && fstop == "khiddirpore")) {
        bus1 = "37 A";
        bus2 = "17 AB";
        fair = 15;
        time = 10;
    }
    

    //khiddirpore-hazra
    else if ((fstop == "khiddirpore" && lstop == "hazra") || (lstop == "khiddirpore" && fstop == "hazra")) {
        bus1 = "1A";
        bus2 = "37";
        fair = 12;
        time = 15;
    }
    //hazra-khiddirpore
     else if ((fstop == "hazra" && lstop == "khiddirpore") || (lstop == "hazra" && fstop == "khiddirpore")) {
        bus1 = "1A";
        bus2 = "37";
        fair = 12;
        time = 12;
    }

    //khiddirpore-behala
    else if ((fstop == "khiddirpore" && lstop == "behala") || (lstop == "khiddirpore" && fstop == "behala")) {
        bus1 = "12C/1";
        bus2 = "3D";
        fair = 15;
    }
     //behala-khiddirpore
     else if ((fstop == "behala" && lstop == "khiddirpore") || (lstop == "behala" && fstop == "khiddirpore")) {
        bus1 = "235";
        bus2 = "S21";
        fair = 15;
        time = 2;
    }

    //khiddirpore-rashbehari
    else if ((fstop == "khiddirpore" && lstop == "rashbehari") || (lstop == "khiddirpore" && fstop == "rashbehari")) {
        bus1 = "18C";
        bus2 = "42A";
        fair = 12;
        time = 5;
    }
    //rashbehari-khiddirpore
     else if ((fstop == "rashbehari" && lstop == "khiddirpore") || (lstop == "rashbehari" && fstop == "khiddirpore")) {
         bus1 = "45B";
         bus2 = "41B";
         fair = 12;
    }
    //howrah-kalighat
     else if ((fstop == "howrah" && lstop == "kalighat") || (lstop == "howrah" && fstop == "kalighat")) {
        bus1 = "AC-6";
        bus2 = "41B";
        fair = 20;
   }
    //kalighat-howrah
     else if ((fstop == "kalighat" && lstop == "howrah") || (lstop == "kalighat" && fstop == "howrah")) {
        bus1 = "107";
        bus2 = "S-10A";
        fair = 20;
        time = 7;
   }

    //howrah-hazra
    else if ((fstop == "howrah" && lstop == "hazra") || (lstop == "howrah" && fstop == "hazra")) {
        bus1 = "37A";
        bus2 = "S-2";
        fair = 15;
        time =3;
    }
    //hazra-howrah
      else if ((fstop == "hazra" && lstop == "howrah") || (lstop == "hazra" && fstop == "howrah")) {
        bus1 = "37A";
        bus2 = "42A";
        fair = 15;
        time = 3;

    }

    //behala-howrah
    else if ((fstop == "behala" && lstop == "howrah") || (lstop == "behala" && fstop == "howrah")) {
        bus1 = "18A";
        bus2 = "S-21";
        fair = 25;
        time = 6;
    }
    //howrah-behala
       else if ((fstop == "howrah" && lstop == "behala") || (lstop == "howrah" && fstop == "behala")) {
        bus1 = "S-21";
        bus2 = "27A";
        fair = 25;
        time = 10;
    }

    //rashbehari-howrah
    else if ((fstop == "rashbehari" && lstop == "howrah") || (lstop == "rashbehari" && fstop == "howrah")) {
        bus1 = "12C/1B";
        bus2 = "S-10A";
        fair = 20;
        time = 8;
    }
    //howrah-rashbehari
      else if ((fstop == "howrah" && lstop == "rashbehari") || (lstop == "howrah" && fstop == "rashbehari")) {
        bus1 = "41B";
        bus2 = "S-1A";
        fair = 20;
        time = 5;
    }


    //behala-hazra
    else if ((fstop == "behala" && lstop == "hazra") || (lstop == "behala" && fstop == "hazra")) {
        bus1 = "18C";
        bus2 = "S-131";
        fair = 12;
        time = 1;
    }

    //hazra-rashbehari
    else if ((fstop == "rashbehari" && lstop == "hazra") || (lstop == "rashbehari" && fstop == "hazra")) {
        bus1 = "3C/1";
        bus2 = "18B";
        fair = 10;
        time = 10;
    } 
    //rashbehari-hazra
    else if ((fstop == "hazra" && lstop == "rashbehari") || (lstop == "hazra" && fstop == "rashbehari")) {
        bus1 = "AC-5";
        bus2 = "13C";
        fair = 10;
        time = 1;
    }
    //hazra-behala
     else if ((fstop == "hazra" && lstop == "behala") || (lstop == "hazra" && fstop == "behala")) {
        bus1 = "18C";
        bus2 = "42A";
        fair = 10;
        time = 9;
    }
    
    display(bus1, bus2, fair)
}


function check(fstop, lstop) {
    if (bus_stop.includes(fstop) && (bus_stop.includes(lstop)) && (fstop != lstop)) {
        calculate(fstop, lstop);
    }
    else {
        const el = document.createElement('div');
        el.classList.add('alert', 'alert-danger', 'alert-dismissible');
        el.innerHTML = `<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Failed!</strong> No such bus stop.`
        const container = document.getElementById('container');
        container.insertBefore(el, container.children[0]);
    }
}


// Define the addItem() function
// to be called through onclick

function addItem() {

    let fstop = (document.getElementById("fstop").value).toString();

    let lstop = document.getElementById("lstop").value;

    check(fstop, lstop);
}

var div = document.getElementById("header");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,1000);