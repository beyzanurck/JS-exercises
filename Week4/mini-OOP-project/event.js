class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }

    addAvailableTickets(type, price){
        this.availableTickets.push({type: type, price: price})
    }

    allTickets(){
        let tickets = ""
        for (let index = 0; index < this.availableTickets.length; index++) {
            tickets += `${index+1}. ${this.availableTickets[index].type} ($${this.availableTickets[index].price}) \n`
        }

        return tickets
    }

    searchTickets(min, max){
        let eligibleTickets = []

        this.availableTickets.forEach((item, index) => {
            if(item.price>min && item.price < max){
                eligibleTickets.push(item)
            }
        })

        return eligibleTickets
    }
}

const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
});

//SECOND WAY TO ADD EVENT LIST
// document.addEventListener('DOMContentLoaded', () => {
//     let html = document.createElement("li")
//     let ul = document.getElementById("event")
//     ul.appendChild(html)

//     //First way of the loop
//     // eventArray.forEach((item) => {
//     //   html.innerHTML = `${item.name} - ${item.description}`;
//     // });

//     //Second way of the loop
//     // for(let i = 0; i<eventArray.length; i++){
//     //     html.innerHTML = `${eventArray[i].name} - ${eventArray[i].description}`;
//     // }
// });

//ADDS NEW TICKETS
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
    //test for the new tickets
console.log(eventObj1)

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

//PRINTS ALL EVENTS W/PROPERTIES
eventArray.forEach((item) => {
    console.log(`${item.name} - ${item.description} - ${item.allTickets()}`)
})

//test for the eligible tickets
console.log(eventObj3.searchTickets(0,250))

//HARDCODES THE ALL EVENTS W/ELIGIBLE TICKETS
document.addEventListener('DOMContentLoaded', () => {
    let html = '';

    eventArray.forEach((item) => {

        let eligible = ""
        item.searchTickets(0,100).forEach((element,index)=> { eligible += `${index + 1}. ${element.type} $(${element.price})  `})

        
        html += `<li>${item.name} - ${item.description} - Eligible tickets: ${eligible}`; 
    });
    document.querySelector('#event').innerHTML = html;
});


