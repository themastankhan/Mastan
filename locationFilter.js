const locationFilter = document.getElementById('location-filter');
const careerListings = document.getElementsByClassName('job-box');

locationFilter.addEventListener('change', () => {
  const selectedLocation = locationFilter.value;

  for (let i = 0; i < careerListings.length; i++) {
    const listing = careerListings[i];
    const location = listing.getAttribute('data-location');

    if (selectedLocation === '' || selectedLocation === location) {
      listing.style.display = 'block';
    } else {
      listing.style.display = 'none';
    }
  }
});