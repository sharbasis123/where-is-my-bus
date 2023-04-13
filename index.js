let fstop, lstop;
var fair = 0;
var bus1, bus2;
var time,time_2;

const bus_stop = ["Behala", "Howrah", "Rashbehari", "Khiddirpore", "Hazra","Kalighat"];




function showMap() {
    const map= document.getElementById("map")
    
    if( document.getElementById("container").contains(map))
    {
      map.remove()
    }

    const new_node_2 = document.createElement("section");
    new_node_2.setAttribute('id', 'map');
    new_node_2.classList.add('mt-2', 'text-light');
    new_node_2.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.076537515319!2d88.32667031464358!3d22.538805485200154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02775de26c3dfd%3A0xd7255ce261457bec!2sSt.%20Thomas&#39;%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1676652217015!5m2!1sen!2sin" width="100%" height="90%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><p>Bus arriving in :<strong>${time} minutes</strong></p>`
    const container = document.getElementById('container');
    container.insertBefore(new_node_2, container.children[3]);
}
function showMap1() {
    const map= document.getElementById("map")
    
    if( document.getElementById("container").contains(map))
    {
      map.remove()
    }

    const new_node_2 = document.createElement("section");
    new_node_2.setAttribute('id', 'map');
    new_node_2.classList.add('mt-2', 'text-light');
    new_node_2.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.076537515319!2d88.32667031464358!3d22.538805485200154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02775de26c3dfd%3A0xd7255ce261457bec!2sSt.%20Thomas&#39;%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1676652217015!5m2!1sen!2sin" width="100%" height="90%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><p>Bus arriving in :<strong>${time_2} minutes</strong></p>`
    const container = document.getElementById('container');
    container.insertBefore(new_node_2, container.children[3]);
}

function display(bus1, bus2, fare) {

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
      <th >Fare</th>
    </tr>
    <tr>
      <td>1.</td>
      <td><a href="#map" class="bus" onclick="showMap()">${bus1}</a></td>
      <td>${fare}</td>
    </tr>
    <tr>
      <td>2.</td>
      <td><a href="#map" class="bus" onclick="showMap1()">${bus2}</a></td>
      <td>${fare}</td>
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
    if ((fstop == "Khiddirpore" && lstop == "Howrah") || (lstop == "Khiddirpore" && fstop == "Howrah")) {
        bus1 = "37";
        bus2 = "259";
        fare = 15;
        if(bus1)
          time=2;
          
        if(bus2)
          time_2=9;  
    }  
   
    

    //khiddirpore-hazra
    else if ((fstop == "Khiddirpore" && lstop == "Hazra") || (lstop == "Khiddirpore" && fstop == "Hazra")) {
        bus1 = "1A";
        bus2 = "37";
        fare = 12;
        if(bus1)
          time=4;
          
        if(bus2)
          time_2=12;
    
    }
   

    //khiddirpore-behala
    else if ((fstop == "Khiddirpore" && lstop == "Behala") || (lstop == "Khiddirpore" && fstop == "Behala")) {
        bus1 = "12C/1";
        bus2 = "3D";
        fare = 15;
        if(bus1)
          time=1;
          
        if(bus2)
          time_2=5;
    }
    

    //khiddirpore-rashbehari
    else if ((fstop == "Khiddirpore" && lstop == "Rashbehari") || (lstop == "Khiddirpore" && fstop == "Rashbehari")) {
        bus1 = "18C";
        bus2 = "42A";
        fare = 12;
        if(bus1)
          time=5;
          
        if(bus2)
          time_2=7;
    }
    
    //howrah-kalighat
     else if ((fstop == "Howrah" && lstop == "Kalighat") || (lstop == "Howrah" && fstop == "Kalighat")) {
        bus1 = "AC-6";
        bus2 = "41B";
        fare = 20;
        if(bus1)
          time=6;
          
        if(bus2)
          time_2=8;
   }
 

    //howrah-hazra
    else if ((fstop == "Howrah" && lstop == "Hazra") || (lstop == "Howrah" && fstop == "Hazra")) {
        bus1 = "37A";
        bus2 = "S-2";
        fare = 15;
        if(bus1)
          time=4;
          
        if(bus2)
          time_2=5;
       
    }
   

    //behala-howrah
    else if ((fstop == "Behala" && lstop == "Howrah") || (lstop == "Behala" && fstop == "Howrah")) {
        bus1 = "18A";
        bus2 = "S-21";
        fare = 25;
        if(bus1)
          time=4;
          
        if(bus2)
          time_2=11;
        
    }
    

    //rashbehari-howrah
    else if ((fstop == "Rashbehari" && lstop == "Howrah") || (lstop == "Rashbehari" && fstop == "Howrah")) {
        bus1 = "12C/1B";
        bus2 = "S-10A";
        fare = 20;
        if(bus1)
          time=10;
          
        if(bus2)
          time_2=15;
      
    }
    


    //behala-hazra
    else if ((fstop == "Behala" && lstop == "Hazra") || (lstop == "Behala" && fstop == "Hazra")) {
        bus1 = "18C";
        bus2 = "S-131";
        fare = 12;
        if(bus1)
          time=1;
          
        if(bus2)
          time_2=3;
        
    }

   
    //rashbehari-hazra
    else if ((fstop == "Hazra" && lstop == "Rashbehari") || (lstop == "Hazra" && fstop == "Rashbehari")) {
        bus1 = "AC-5";
        bus2 = "13C";
        fare = 10;
        if(bus1)
          time=2;
          
        if(bus2)
          time_2=5;
       
    }
    
    
    display(bus1, bus2, fare)
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


