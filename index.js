document.getElementById("bookingForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let date = document.getElementById("date").value;
    let schedule = document.getElementById("schedule").value;

    if(name === "" || contact === "" || email === "" || address === "" || date === "" || schedule === ""){

        alert("Please complete the booking form.");

        return;
    }

    let templateParams = {

        name: name,
        contact: contact,
        email: email,
        address: address,
        date: date,
        schedule: schedule,
    };


    emailjs.send(
        "service_tbl5uhf",
        "template_74nj1o9",
        templateParams
    )

    emailjs.send(
        "service_tbl5uhf", 
        "template_jmo6oa5",
        templateParams
    )

    .then(function(response){

        alert("Booking Submitted Successfully!");

        document.getElementById("bookingForm").reset();

    })

    .catch(function(error){

        alert("Failed to send receipt.");
    });
    
    function goToBooking() {
    window.location.href = "booking.html";
}
});

const imgs=document.querySelectorAll('.item img'),box=document.getElementById('lightbox'),big=document.getElementById('lightImg');document.getElementById('close').onclick=()=>box.style.display='none';imgs.forEach(i=>i.onclick=()=>{big.src=i.src;box.style.display='flex'});box.onclick=e=>{if(e.target===box)box.style.display='none'};document.addEventListener('keydown',e=>{if(e.key==='Escape')box.style.display='none'});