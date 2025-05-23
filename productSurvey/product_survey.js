
function submitFeedback()
{

  // getting input values
  const name= document.getElementById('name').value;
  const age= document.getElementById('age').value;
  const email= document.getElementById('email').value;
  const job= document.getElementById('job').value;
  const destination= document.getElementById('destination').value;
  const productType= document.getElementById('productType').value;
  const feedBack= document.getElementById('feedBack').value;

alert("Thanks for your valuable feedback!!");

  // getting p elements and storing them in consts
  const UserName= document.getElementById('userName');
  const UserAge= document.getElementById('userAge');
  const UserEmail= document.getElementById("userEmail");
  const UserJob= document.getElementById('userJob');
  const UserDestination= document.getElementById('userDestination');
  const UserProductChoice= document.getElementById('userProductChoice');
  const UserFeedback=document.getElementById('userFeedback');

  // setting values we got from 'inputs elemnets' to consts 
  
  UserName.textContent=name;
  UserAge.textContent=age;
  UserEmail.textContent= email;
  UserJob.textContent=job;
  UserDestination.textContent=destination;
  UserProductChoice.textContent=productType;
  UserFeedback.textContent=feedBack;

  // change display in 'div' container with id 'userInfo'
  const userInfo= document.getElementById('userInfo');

  userInfo.style.display="block";
}

const submitBTN= document.getElementById('submitBtn');

// option_1
submitBTN.addEventListener('click', submitFeedback);

// // option_2
// submitBTN.onclick=submitFeedback;

// Implement key press to submit feedback
document.addEventListener('keydown', function(event){

  if(event.key==="Enter")
  {
    submitFeedback();
  }
});