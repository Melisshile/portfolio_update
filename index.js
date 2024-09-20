const logoText = "Hilaire";
const homeText = "Home";
const aboutText = "About Us";
const contactText = "Contact Us";
const name = "Hilaire";
const bio = "Computer Systems Agent, passionate about tech.Proficient in a range of technologies including C++, Assembler Language (PIC), MySQL, and web development (HTML, CSS, JavaScript), passionate about solving complex problems in the ICT field. With hands-on experience from the MLAB CodeTribe Boot Camp 2024 and participation in the AI Mashup Hackathon 2023, combines technical expertise in digital electronics, PLCs, ROS, and network concepts with creativity in tools like Photoshop and CorelDRAW. Eager to take on new challenges, currently pursuing a Diploma in Computer Systems Engineering at Tshwane University of Technology";
const address = "Soshanguve L, 0152";
const youtubeChannel = "My YouTube Channel";

// Cache DOM elements
const logoEl = document.getElementById("myLogo");
const homeEl = document.getElementById("homeH");
const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("cont");
const nameEl = document.getElementById("hilairen"); // Corrected ID
const bioEl = document.getElementById("bio_h");
const addressEl = document.getElementById("sosha");
const youtubeEl = document.getElementById("rheahilec");

// Set content if elements exist
if (logoEl) logoEl.innerHTML = logoText;
if (homeEl) homeEl.innerHTML = homeText;
if (aboutEl) aboutEl.innerHTML = aboutText;
if (contactEl) contactEl.innerHTML = contactText;
if (nameEl) nameEl.innerHTML = name;
if (bioEl) bioEl.innerHTML = bio;
if (addressEl) addressEl.innerHTML = address;
if (youtubeEl) youtubeEl.innerHTML = youtubeChannel;

// // Toggle the nav bar for small screens
// function toggleNav() {
//     const navLinks = document.getElementById('navLinks');
//     if (navLinks) {
//         navLinks.classList.toggle('show');
//     }
// }

// // Add event listener to menu icon
// document.querySelector('.menu-icon').addEventListener('click', toggleNav);
