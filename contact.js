const logoH = "Hilaire";
const homeHi = "Home";
const aboutH = "About Us";
const contacth = "Contact Us";
const contactTittle = "Leave Your Short Message Here!!!";

const userFullName = "Name & Surname";
const userEmail = "Email Address";
const msg = "Message";
const hid = "Invalid input!";

// Updated regex to match most valid email formats and block invalid ones
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Setting innerHTML for labels and form titles
document.getElementById("myLogo").innerHTML = logoH;
document.getElementById("homeH").innerHTML = homeHi;
document.getElementById("about").innerHTML = aboutH;
document.getElementById("cont").innerHTML = contacth;
document.getElementById("mycontactc").innerHTML = contactTittle;
document.getElementById("userFullName").innerHTML = userFullName;
document.getElementById("userEmail").innerHTML = userEmail;
document.getElementById("msg").innerHTML = msg;
document.getElementById("hid").innerHTML = hid;
document.getElementById("hidEmail").innerHTML = hid;
document.getElementById("hidmsg").innerHTML = hid;

// Form submission logic
async function submissionOfForm(event) {
    event.preventDefault();

    const name_surnameInput = document.getElementById("namesur");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Validations
    const validNameSurname = name_surnameInput.value.trim() !== '';
    const validEmail = emailPattern.test(emailInput.value.trim()) && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim());
    const validMessage = messageInput.value.trim() !== '';

    // Hide all previous error messages
    document.getElementById("hid").style.display = 'none';
    document.getElementById("hidEmail").style.display = 'none';
    document.getElementById("hidmsg").style.display = 'none';

    if (validNameSurname && validEmail && validMessage) {
        const my_data_from_form = new FormData(event.target);
        const response = await fetch('https://formspree.io/f/mvoeloyw', {
            method: 'POST',
            body: my_data_from_form,
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        if (data.ok) {
            alert('Email successfully sent!');
            document.getElementById('myFormt').reset();
        }
    } else {
        // Display error messages
        if (!validNameSurname) {
            document.getElementById("hid").style.display = 'block';
        }
        if (!validEmail) {
            document.getElementById("hidEmail").innerHTML = "Please enter a valid email address (e.g., test@example.com)";
            document.getElementById("hidEmail").style.display = 'block';
        }
        if (!validMessage) {
            document.getElementById("hidmsg").style.display = 'block';
        }
    }
}

// Display submission message
document.getElementById('myFormt').addEventListener("submit", function () {
    const name_surnameInput = document.getElementById("namesur");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (name_surnameInput.value.trim() !== '' && emailPattern.test(emailInput.value.trim()) && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim()) && messageInput.value.trim() !== '') {
        document.getElementById('submission_msg').innerHTML = "Thanks for your message!";
        document.getElementById('submission_msg').style.color = "blue";
    } else {
        document.getElementById('submission_msg').innerHTML = "Please fill in all fields correctly!";
        document.getElementById('submission_msg').style.color = "red";
    }
});
//toggle the nav bar for the small sreen
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}
