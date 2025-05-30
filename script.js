// Initialize EmailJS with your user ID
emailjs.init("tfonHzYtkdAoBn28q"); // Replace "YOUR_USER_ID" with your EmailJS user ID

// Function to send email
const submitContactForm = () => {
    // Get the value of the subject field
    const subject = document.getElementById("subject").value;

    // Validate that the subject field is not empty
    if (!subject) {
        alert("يرجى كتابة الرسالة.");
        return;
    }

    // Prepare the email parameters
    const templateParams = {
        to_email: "scoutopediax@gmail.com", // The recipient's email
        subject: "رسالة جديدة من صفحة التواصل", // Email subject
        message: subject, // The message body
    };

    // Send the email using EmailJS
    emailjs
        .send("service_kg4gtwl", "tfonHzYtkdAoBn28q", templateParams) // Replace "YOUR_TEMPLATE_ID" with your EmailJS template ID
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("تم إرسال رسالتك بنجاح!");
            document.getElementById("subject").value = ""; // Clear the subject field
        })
        .catch((error) => {
            console.error("FAILED...", error);
            alert("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.");
        });
        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('campSearch');
            const boxes = document.querySelectorAll('.box');
          
            searchInput.addEventListener('input', function() {
              const searchTerm = this.value.toLowerCase().trim();
          
              boxes.forEach(box => {
                const title = box.querySelector('.text-title').textContent.toLowerCase();
                const description = box.querySelector('.text-body').textContent.toLowerCase();
                const location = box.querySelector('.location').textContent.toLowerCase();
          
                if (title.includes(searchTerm) || 
                    description.includes(searchTerm) || 
                    location.includes(searchTerm)) {
                  box.classList.remove('hidden');
                } else {
                  box.classList.add('hidden');
                }
              });
            });
          });
};