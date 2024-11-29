document.getElementById('donateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const donorName = document.getElementById('donor-name').value;
    const foodName = document.getElementById('food-name').value;
    const quantity = document.getElementById('quantity').value;
    const expiryDate = document.getElementById('expiry-date').value;

    // Simulate sending the data to the backend
    // For now, we just log it and update the UI
    const foodRequestItem = document.createElement('li');
    foodRequestItem.innerHTML = `<strong>${foodName}</strong> (${quantity} units) - Donated by: ${donorName}, Expiry: ${expiryDate}`;
    document.getElementById('food-request-list').appendChild(foodRequestItem);

    // Clear form fields after submission
    document.getElementById('donor-name').value = '';
    document.getElementById('food-name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('expiry-date').value = '';
});