// Show and Hide Sections Based on User Click
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Function to update the unit options based on the food type
function updateUnitOptions(formType) {
    let unitSelect;
    let foodType;
    
    if (formType === 'donate') {
        foodType = document.getElementById('food-type').value;
        unitSelect = document.getElementById('unit-of-measurement');
    } else if (formType === 'request') {
        foodType = document.getElementById('food-type-request').value;
        unitSelect = document.getElementById('unit-of-measurement-request');
    }

    // Clear existing options
    unitSelect.innerHTML = '';

    // Add unit options based on the selected food type
    if (foodType === 'liquid') {
        unitSelect.innerHTML += '<option value="liters">Liters</option>';
        unitSelect.innerHTML += '<option value="milliliters">Milliliters</option>';
    } else if (foodType === 'solid') {
        unitSelect.innerHTML += '<option value="kg">Kilograms</option>';
        unitSelect.innerHTML += '<option value="grams">Grams</option>';
        unitSelect.innerHTML += '<option value="packets">Packets</option>';
    } else if (foodType === 'bottle') {
        unitSelect.innerHTML += '<option value="number">Number</option>';
    }
}

// Handle Donate Form Submission
document.getElementById('donateForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const donorName = document.getElementById('donor-name').value;
    const foodName = document.getElementById('food-name').value;
    const quantity = document.getElementById('quantity').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const foodType = document.getElementById('food-type').value;
    const unitOfMeasurement = document.getElementById('unit-of-measurement').value;

    // Add to Donated Food Table
    const donatedFoodTable = document.getElementById('donated-food-table').getElementsByTagName('tbody')[0];
    const newRow = donatedFoodTable.insertRow();
    newRow.innerHTML = `
        <td>${donorName}</td>
        <td>${foodName}</td>
        <td>${foodType}</td>
        <td>${quantity}</td>
        <td>${unitOfMeasurement}</td>
        <td>${expiryDate}</td>
    `;

    // Clear the Donate Food form
    document.getElementById('donateForm').reset();
});

// Handle Request Form Submission
document.getElementById('requestForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const requesterName = document.getElementById('requester-name').value;
    const requestedFood = document.getElementById('requested-food').value;
    const quantityRequested = document.getElementById('quantity-requested').value;
    const foodTypeRequest = document.getElementById('food-type-request').value;
    const unitOfMeasurementRequest = document.getElementById('unit-of-measurement-request').value;

    // Add to Requested Food Table
    const requestedFoodTable = document.getElementById('requested-food-table').getElementsByTagName('tbody')[0];
    const newRow = requestedFoodTable.insertRow();
    newRow.innerHTML = `
        <td>${requesterName}</td>
        <td>${requestedFood}</td>
        <td>${quantityRequested}</td>
        <td>${unitOfMeasurementRequest}</td>
    `;

      // Clear the Request Food form
    document.getElementById('requestForm').reset();
});