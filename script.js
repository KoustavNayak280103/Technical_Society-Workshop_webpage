let currentWorkshop = '';

function showForm(workshop) {
  currentWorkshop = workshop.toLowerCase();
  document.getElementById('workshop-name').textContent = workshop;
  document.getElementById('registrationForm').style.display = 'block';
  document.getElementById('posterCarousel').style.display = 'none';
  document.getElementById('attendeesList').style.display = 'none';
}

function submitForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();

  if (name && email && phone && whatsapp) {
    const table = document.querySelector(`#${currentWorkshop} table`);
    const row = table.insertRow();
    row.innerHTML = `<td>${name}</td><td>${email}</td><td>${phone}</td><td>${whatsapp}</td>`;

    alert(`Thanks ${name}! You are registered for ${currentWorkshop.toUpperCase()}.\n📍 Workshop Room Location: Opening Google Maps...`);
    goToMap(currentWorkshop + " Room");

    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('posterCarousel').style.display = 'flex';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('whatsapp').value = '';
  } else {
    alert("Please fill all fields.");
  }
}

function showAttendees(workshop) {
  document.getElementById('posterCarousel').style.display = 'none';
  document.getElementById('registrationForm').style.display = 'none';
  document.getElementById('attendeesList').style.display = 'block';

  document.querySelectorAll('.attendees-table').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(workshop).style.display = 'block';
}

function returnHome() {
  document.getElementById('attendeesList').style.display = 'none';
  document.getElementById('registrationForm').style.display = 'none';
  document.getElementById('posterCarousel').style.display = 'flex';
}

function goToMap(location) {
  const query = encodeURIComponent("Haldia Institute of Technology" + location);
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
}
