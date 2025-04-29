const subjectNameElement = document.querySelector("#subject-name");
const prepTypeElement = document.querySelector("#prep-type");
const mainContainerElement = document.querySelector("#main-container");
const navBar = document.querySelector("#navigation-bar");
const detailsBar = document.querySelector("#details");

const subjectName = " Cryptography";
const prepType = " Question-Bank";

const documentFragement = document.createDocumentFragment();


const questionArray = [
    "What does the term \"confidentiality\" mean in the context of security?",
    "Name any two types of classical ciphers.",
    "What is the main purpose of cryptography?",
    "What does DES stand for in cryptography?",
    "Name any two types of symmetric key encryption algorithms.",
    "Define \"integrity\" in information security.",
    "Differentiate between Caesar Cipher and Substitution Cipher",
    "Mention one real-life example where authentication is used",
    "Which cipher operates on blocks of plaintext: DES or RC4?",
    "Is AES a symmetric or asymmetric encryption algorithm?",
    "Explain the working of the Caesar Cipher with an example.",
    "List and briefly describe three types of security attacks",
    "Describe the main differences between symmetric and asymmetric encryption.",
    "State one difference between Block Cipher and Stream Cipher.",
    "Identify the key length used in standard DES encryption.",
    "What is the role of authentication in securing data?",
    "How does transposition cipher differ from substitution cipher?",
    "What are the basic goals of information security?",
    "Explain the term \"symmetric key encryption\" in simple words.",
    "What is the main idea behind the term “block cipher”?",
    "Describe the principle of \"defense in depth\" in security.",
    "How is integrity maintained in digital communication?",
    "Explain how cryptography contributes to secure communication.",
    "How does a stream cipher process plaintext?",
    "What makes AES more secure than DES?",
    "Interpret how the Caesar Cipher can be broken using brute force.",
    "Explain how asymmetric cryptography works with an example.",
    "Why is it necessary to have both confidentiality and integrity in secure systems?",
    "Describe how the substitution-permutation network applies to DES.",
    "In what way does RC5 achieve variability in key size and number of rounds?",
    "A bank uses a combination of block ciphers and stream ciphers for different services. Block ciphers are used for file encryption, while stream ciphers are used for real-time transactions. Explain why the bank might prefer stream ciphers for real-time applications and block ciphers for file encryption.",
    "Break down the components of the CIA triad.",
    "Identify the strengths and weaknesses of the Caesar Cipher.",
    "Given a security principle, classify which part of the CIA triad it addresses.",
    "Apply the concept of stream cipher to explain how RC4 encrypts data.",
    "Show how Blowfish splits the plaintext block in its first step.",
    "Compare and contrast different classical cryptographic techniques.",
    "Analyze how symmetric and asymmetric cryptography handle key exchange.",
    "Interpret a cipher text and determine if it’s a substitution or transposition.",
    "Given a simple 64-bit plaintext, describe how DES applies 16 rounds of Feistel structure.",
    "Demonstrate the working principle of IDEA using its mixing of operations (XOR, addition, multiplication).",
    "Analyze a given cryptographic message and identify the type of cipher used.",
    "Determine the effectiveness of Caesar Cipher in modern encryption.",
    "Evaluate different security approaches for a banking system.",
    "Write a basic pseudocode to encrypt a plaintext block using the RC5 structure.",
    "Simulate one round of AES with input S-box values.",
    "Justify the need for using encryption in everyday internet use.",
    "Critique the Caesar Cipher based on its security level.",
    "Assess why integrity is more important in certain security applications.",
    "Identify the key components of the AES algorithm.",
    "How is a Feistel network different from a substitution-permutation network?",
    "A messaging app developer is considering using RC5 or Blowfish for encrypting messages. They need fast performance and flexible key lengths. Based on the features of RC5 and Blowfish, which algorithm would you recommend and why?",
    "Evaluate the effectiveness of symmetric vs. asymmetric cryptography in secure communication.",
    "Recommend which classical cipher is best for learning basic cryptographic principles and why.",
    "Judge the vulnerability of a simple encryption method against brute force attacks.",
    "Compare DES and AES in terms of key size and security level.",
    "Which algorithms from the list use variable block sizes and how does it affect encryption?",
    "A company is moving its data infrastructure to the cloud and is reviewing its existing use of IDEA for encryption. The team is now debating switching to AES. Analyze the trade-offs between continuing with IDEA and moving to AES in terms of scalability, performance, and security.",
    "Evaluate a case study of a data breach and identify what security principles were violated.",
    "Develop an argument for the inclusion of cryptography in mobile app development.",
    "Appraise the limitations of classical ciphers in the context of modern computing power.",
    "Analyze why Blowfish is considered suitable for hardware implementation.",
    "Explain how the key schedule in IDEA ensures complexity and security.",
    "Justify the need for using encryption in everyday internet use.",
    "Critique the Caesar Cipher based on its security level.",
    "Assess why integrity is more important in certain security applications.",
    "Do you think DES is still a secure method for data encryption today? Why or why not?",
    "Rank the listed algorithms (DES, AES, RC5, IDEA) based on security strength.",
    "Evaluate the effectiveness of symmetric vs. asymmetric cryptography in secure communication.",
    "Recommend which classical cipher is best for learning basic cryptographic principles and why.",
    "Judge the vulnerability of a simple encryption method against brute force attacks.",
    "Argue for or against the use of stream ciphers in modern communication.",
    "Justify why AES is a better standard over Blowfish for modern encryption needs.",
    "A hospital uses DES to encrypt patient health records stored on a local server. Why might the hospital have chosen DES initially, and what is one reason it may need to switch to a more modern algorithm like AES?",
    "Evaluate a case study of a data breach and identify what security principles were violated.",
    "Develop an argument for the inclusion of cryptography in mobile app development.",
    "Appraise the limitations of classical ciphers in the context of modern computing power.",
    "Critically evaluate the weaknesses of DES that led to the development of AES.",
    "Assess the advantages and disadvantages of using RC5 for lightweight devices.",
    "A government agency used DES for secure communication for many years but is now facing increasing threats of brute-force attacks. Evaluate the agency’s decision to use DES initially and assess the urgency of migrating to a newer algorithm like AES or Blowfish. Support your answer with relevant criteria.",
    "Design a simple Caesar Cipher game for students.",
    "Create a classroom demonstration to explain confidentiality.",
    "Formulate a basic definition of cryptography using your own words.",
    "Design a simple symmetric cipher using basic substitution and XOR.",
    "Create a block cipher model with 2 rounds for demonstration purposes.",
    "Design a simple substitution cipher to encrypt a class message.",
    "Develop a mnemonic to remember the CIA triad components.",
    "Propose a new security principle for emerging digital systems.",
    "Develop a secure key exchange protocol using any of the symmetric algorithms discussed.",
    "Propose a variant of Blowfish that includes an additional diffusion step.",
    "Create your own encryption method using a mix of substitution and transposition.",
    "Formulate a mini project using both symmetric and asymmetric cryptography.",
    "Design a poster explaining the need for security in the digital world.",
    "Imagine a new encryption method combining stream and block cipher techniques — outline your approach.",
    "Construct a modified AES-like algorithm optimized for low-latency applications in IoT devices.",
    "A startup developing a smart wearable health monitor wants to build a lightweight, energy-efficient encryption system to protect user health data. They are exploring RC5, Blowfish, and a potential custom hybrid approach. Propose a secure and efficient encryption architecture for the wearable device. Justify your choices of algorithms and outline how your system balances encryption strength with performance constraints."


];
  







subjectNameElement.innerText +=  subjectName;
prepTypeElement.innerText += prepType;


const createQuestion = () => {
    
}


counter = 0;
let addContent = () => {
    for(let i=0; i<questionArray.length; i++) {
        const questionElement = document.createElement("div");
        questionElement.classList.add("questions");
        questionElement.dataset.index = ++counter;

        const questionNumber = document.createElement("div");
        questionNumber.classList.add("question-number");
        questionNumber.innerHTML += counter;
        
        const questionContent = document.createElement("div");
        questionContent.classList.add("question-content")
        questionContent.innerHTML += questionArray[i];

        const checkBox = document.createElement("input");
        checkBox.classList.add("completion-checkbox")
        checkBox.type = "checkbox";
        checkBox.id = `checkbox-${i+1}`;

        const solved = localStorage.getItem(checkBox.id);
        if(solved === "true") {
            checkBox.checked = true;
        }

        checkBox.addEventListener("change", () => {
            localStorage.setItem(checkBox.id, checkBox.checked);
        });
        
        questionElement.appendChild(questionNumber);    // adding the div
        questionElement.appendChild(questionContent);   // adding the div
        questionElement.appendChild(checkBox);

        documentFragement.appendChild(questionElement); 
    }

    mainContainerElement.appendChild(documentFragement)
    

}

addContent();

// makes the navbar hide when it's scolled and the course-detail to take the nav-bar's direction
window.addEventListener("scroll", () => {
    const rect = detailsBar.getBoundingClientRect();
    if (rect.top <= 0) {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "flex";
    }
});



window.addEventListener('load', function() {
    document.querySelector('.loading-overlay').classList.add('loaded');
    
    // Simulate loading questions after a delay
    setTimeout(function() {
        const skeletons = document.querySelectorAll('.question-skeleton');
        
        // Replace skeletons with actual question elements
        skeletons.forEach((skeleton, index) => {
            const question = document.createElement('div');
            question.className = 'questions';
            question.innerHTML = `
                <div class="question-number">${index + 1}</div>
                <div>What is the difference between symmetric and asymmetric encryption?</div>
                <input type="checkbox" class="completion-checkbox">
            `;
            skeleton.parentNode.replaceChild(question, skeleton);
        });
    }, 2000);
});
