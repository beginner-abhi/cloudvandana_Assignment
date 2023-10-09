const surveyForm = document.getElementById('surveyForm');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const popupData = document.getElementById('popupData');

// Event listener for form submission
surveyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showPopup();
});

// Event listener for form reset
resetBtn.addEventListener('click', function () {
    surveyForm.reset();
});

// Event listener for closing the popup
closePopup.addEventListener('click', function () {
    hidePopup();
});

// Function to show the popup with survey data
function showPopup() {
    popup.style.display = 'block';

    // Collect and display form data
    const formData = new FormData(surveyForm);
    popupData.innerHTML = '';

    for (const [key, value] of formData.entries()) {
        if (key === 'gender') {
            const genderLabels = {
                'Male': 'Male',
                'Female': 'Female',
                'Other': 'Other'
            };
            value.forEach(genderValue => {
                const genderLabel = genderLabels[genderValue];
                const listItem = document.createElement('li');
                listItem.textContent = `${genderLabel}: Yes`;
                popupData.appendChild(listItem);
            });
        } else {
            const label = surveyForm.querySelector(`[name="${key}"]`).previousElementSibling.textContent;
            const listItem = document.createElement('li');
            listItem.textContent = `${label}: ${value}`;
            popupData.appendChild(listItem);
        }
    }
}

// Function to hide the popup and reset the form
function hidePopup() {
    popup.style.display = 'none';
    surveyForm.reset();
}
