// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementById('closeBtn');

// Eventlistenener to open modal on click
modalBtn.addEventListener('click', openModal);

// Eventlistenener to close modal on click
closeBtn.addEventListener('click', closeModal);

// Eventlistenener to close modal on click outside the modal
window.addEventListener('click', clickOutside)


// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none'
}


// Function to close modal when clicked outside the modal
function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none'
  }
}