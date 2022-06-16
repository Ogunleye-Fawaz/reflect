setInterval(showTime, 1000); // assign interval to the function which allows it automatically reloads the clock after 1s

function showTime(){
    const currentTime = new Date(); // create a date object
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth();
    let day = currentTime.getDate(); 
    let hours =    currentTime.getHours(); //get hours
    let minutes =  currentTime.getMinutes() ; //get minutes
    let seconds =  currentTime.getSeconds(); // get seconds
    let ap = "AM" ; //set AM by default
    
        if(hours >= 12) { //if hours is greater or equal to 12 ap is pm
            ap = "PM";
        }
        if(hours > 12) { // if hours is greater than 12 minus it from 12 since we have 24 hours a day, 12 for each half
            hours = hours - 12;
        }   
       if(minutes < 10) { //if minutes less than 10 add zero before it
            minutes = '0' + currentTime.getMinutes();
        }
       if(seconds < 10) { //if seconds less than 10 add zero before it
            seconds = '0' + currentTime.getSeconds();
        }

 month += 1;
var show = document.getElementById('clock'); // synced my html element id to my js variable
var date = document.getElementById('date');

date.innerHTML = year +  '-' +  month + '-' + day;
show.innerHTML =  hours + ':' + minutes + ':' + seconds + ap; //used the innerHTML property to display my result

}
