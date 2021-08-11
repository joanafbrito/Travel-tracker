import TripRepository from './TripRepository';
import Traveler from './Traveler';
import {fetchUserData, postNewTrip, travelerRepo, tripRepo, destinationRepo, currentUser} from './fetch';

// console.log(fetchUserData,travelerRepo, tripRepo, destinationRepo);


const userName = document.getElementById('userInput');
const userPassword = document.getElementById ('passwordInput');
const loginBtn = document.querySelector('.submit-user-login');
const welcome = document.querySelector('.welcome-user');
const loginForm = document.querySelector('.user-login');
const userTrip = document.querySelector('.all-user-trips');
const destinationSelect = document.getElementById('next-destinations');
const bookTripBtn = document.querySelector('.book-trip');
const startTripDate = document.querySelector('#dateInput');
const tripDuration = document.querySelector('#durationInput');
const numberOfTravelers = document.getElementById('travelersNumber');
const costTrip = document.getElementById('tripCost') ;

fetchUserData(49).then(() => {
    showWelcomeMessage();
})

const submitLogin = () => {

    let user = userName.value;
    let password = userPassword.value;
    
    if((user !== '' && user !== null) && (password !== '' && password !== null)) {
        if(/^traveler\d{1,2}$/.test(user) && password === 'travel') {
            let userId = user.replace('traveler','')
            fetchUserData(userId).then(() => {
                showWelcomeMessage();
            })
        } else {
            alert('Invalid Username or Password');
        }
    } else {
        alert('Username and Password are required to login'); 
        
    }
}

let showWelcomeMessage = () => {
    welcome.classList.remove('hidden');
    welcome.querySelector('h2').innerHTML = `Welcome ${currentUser.name} !`
    loginForm.classList.add('hidden');
    let totalSpent = currentUser.getTotalAmoutSpent(new Date().getFullYear(), destinationRepo); 
    welcome.querySelector('span').innerHTML = totalSpent;
    showUserTrips();
    destinationRepo.destinations.forEach(item=>{
        let option = document.createElement('option')
        option.value = item.id 
        option.innerHTML = item.destination;
        destinationSelect.appendChild(option);
    } )
}

let showUserTrips = () => {
    currentUser.trips.forEach(trip => userTrip.appendChild(createTripCard(trip))) 
}

let createTripCard = (trip) => {   
    let card = document.createElement('section')
    card.classList.add('user-trip');
    card.style.backgroundImage = `url(${trip.destination.image})`

    card.innerHTML =
        `<h3>Your trip to: ${trip.destination.destination}.</h3>
        <p>Trip status: ${trip.status}</p>
        <p>Trip date: ${trip.date}</p>
        <p>Trip duration: ${trip.duration}</p>
        <p>Number of Travelers: ${trip.travelers}</p>
        <p>Lodging per day: ${trip.destination.estimatedLodgingCostPerDay}</p>
        <p>Flight per person: ${trip.destination.estimatedFlightCostPerPerson}</p>`

    return card;
}

const submitNewTrip = () => {
    let parameters = {
        id: new Date().getTime(),
        userID: currentUser.id, 
        destinationID: parseInt(destinationSelect.value), 
        travelers:  numberOfTravelers.value, 
        date: startTripDate.value.replace(/-/g, '/'), 
        duration: tripDuration.value, 
        status: 'pending', 
        suggestedActivities: []     
    }
    console.log(parameters)
    postNewTrip(parameters).then((trip)=>{
        userTrip.appendChild(createTripCard(trip))
    })

}


let changeDestination = (e) => {

    let dest = destinationRepo.destinations.find(item =>item.id === parseInt(e.target.value));
    let tripCost = dest.getTripCost(numberOfTravelers.value, tripDuration.value)
    costTrip.querySelector('span').innerHTML = tripCost;

    console.log()

}




loginBtn.addEventListener('click', submitLogin)
bookTripBtn.addEventListener('click', submitNewTrip);
destinationSelect.addEventListener('change', changeDestination);

