const logoH = "Hilaire";
const homeHi = "Home";
const aboutH = "About Us";
const contacth = "Contact Us";
var aboutc = "<big>About me</big>";

const fullName = "Hilaire Ntibashima";
const my_pbg = {
    pers_det: "Personal Details",
    pers_obj: "Objective",
    pers_ed: "Education",
    pers_sk: "Skills",
    pers_ac: "Activities",
    pers_pr: "Projects"
};

const content = {
    cont_full_address: "2561 Block L Soshanguve 0152",
    cont_full_address_: "0655865443 | hilairentibashima@gmail.com",
    cont_objective: "To enhance my professional skills, capabilities, and knowledge in the Tech Industry.",
    cont_education: "Tshwane University Of Technology",
    cont_education_: "Diploma in Computer System Engineering <br>2022 to Date",
    cont_education__: "Lycée Sainte Famille de Kinama/Bujumbura/Burundi <br>Matric",
    cont_birth: "Date of Birth: 09 November 1995",
    cont_nationality: "Nationality: Burundian",
    cont_gender: "Gender: Male",
    cont_decision: "Decision making",
    cont_teamW: "Team Work",
    cont_commSkills: "Communication Skills",
    Photoshop: "Photoshop",
    CorelDraw: "CorelDraw",
    programSkills: "Programming Skills (C++, Processing, Assembly, SQL, LLD for PLCs)",
    electroCircuit: "Electronic Circuits",
    digit: "Digital Electronics",
    frontEnd: "Front End Dev (HTML, CSS, JavaScript)",
    ambassador: "TUT Ambassadors",
    bankSys: "Banking System",
    guessNum: "Guessing Number Program",
    tempConv: "Temperature Conversion"
};

// Helper function to set innerHTML only if the element exists
function setInnerHTMLById(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = content;
    }
}

// Navigation Bar
setInnerHTMLById("myLogo", logoH);
setInnerHTMLById("homeH", homeHi);
setInnerHTMLById("about", aboutH);
setInnerHTMLById("cont", contacth);

// Main Content
setInnerHTMLById("aboutc", aboutc);
setInnerHTMLById("fullName", fullName);
setInnerHTMLById("pbg", my_pbg.pers_det);
setInnerHTMLById("obj", my_pbg.pers_obj);
setInnerHTMLById("ed", my_pbg.pers_ed);
setInnerHTMLById("sk", my_pbg.pers_sk);
setInnerHTMLById("ac", my_pbg.pers_ac);
setInnerHTMLById("pr", my_pbg.pers_pr);

// Personal Information
setInnerHTMLById("full_address", content.cont_full_address);
setInnerHTMLById("full_address_", content.cont_full_address_);
setInnerHTMLById("objective", content.cont_objective);
setInnerHTMLById("education", content.cont_education);
setInnerHTMLById("education_", content.cont_education_);
setInnerHTMLById("education__", content.cont_education__);
setInnerHTMLById("birth", content.cont_birth);
setInnerHTMLById("nationality", content.cont_nationality);
setInnerHTMLById("gender", content.cont_gender);

// Skills and Experience
setInnerHTMLById("decision", content.cont_decision);
setInnerHTMLById("teamW", content.cont_teamW);
setInnerHTMLById("commSkills", content.cont_commSkills);
setInnerHTMLById("Photoshop", content.Photoshop);
setInnerHTMLById("CorelDraw", content.CorelDraw);
setInnerHTMLById("programSkills", content.programSkills);
setInnerHTMLById("electroCircuit", content.electroCircuit);
setInnerHTMLById("digit", content.digit);
setInnerHTMLById("frontEnd", content.frontEnd);

// Activities and Projects
setInnerHTMLById("ambassador", content.ambassador);
setInnerHTMLById("bankSys", content.bankSys);
setInnerHTMLById("guessNum", content.guessNum);
setInnerHTMLById("tempConv", content.tempConv);

console.log(content.tempConv);  // Logging to ensure value is set correctly
