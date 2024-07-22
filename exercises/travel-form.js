document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms["myForm"];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = form.elements[0].value;
        const lastName = form.elements[1].value;
        const gender = form.elements["gender"].value;
        const age = form.elements[4].value;
        const destination = form.elements["city"].value;
        const dietaryRestrictions = form.elements["dietary-restrictions"].value;

        const message = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Gender: ${gender}
        Age: ${age}
        Destination: ${destination}
        Dietary Restrictions: ${dietaryRestrictions}
        `;

        alert(message);
    });
});
