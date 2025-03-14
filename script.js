function openTab(event, sectionId) {
  const allSections = document.querySelectorAll('.tab-content');
  allSections.forEach(section => section.classList.remove('active'));

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}

function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modalImg.src = imageSrc;

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}