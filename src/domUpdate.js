import {fetchUserData, postNewTrip, destinationRepo, currentUser} from './fetch';

//  Query Selectors
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
const costTrip = document.getElementById('tripCost');

// Dom Update functions 
const submitLogin = () => {
  let user = userName.value;
  let password = userPassword.value;
    
  if ((user !== '' && user !== null) && (password !== '' && password !== null)) {
    if (/^traveler\d{1,2}$/.test(user) && password === 'travel') {
      let userId = user.replace('traveler', '')
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

const showWelcomeMessage = () => {
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

const showUserTrips = () => {
  currentUser.trips.forEach(trip => userTrip.appendChild(createTripCard(trip))) 
}

const createTripCard = (trip) => {   
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
    travelers: numberOfTravelers.value, 
    date: startTripDate.value.replace(/-/g, '/'), 
    duration: tripDuration.value, 
    status: 'pending', 
    suggestedActivities: []     
  }
  postNewTrip(parameters).then((trip)=>{
    userTrip.appendChild(createTripCard(trip))
    alert('Congratulations, your next trip has been booked')
  })
}

const changeDestination = (e) => {

  let dest = destinationRepo.destinations.find(item =>item.id === parseInt(e.target.value));
  let tripCost = dest.getTripCost(numberOfTravelers.value, tripDuration.value)
  costTrip.querySelector('span').innerHTML = tripCost;
}

// Event Listeners
loginBtn.addEventListener('click', submitLogin)
bookTripBtn.addEventListener('click', submitNewTrip);
destinationSelect.addEventListener('change', changeDestination);

