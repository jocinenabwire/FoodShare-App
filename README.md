# ** ECO EATS - MEAL CYCLE
**Food Donation & Request Management System**

## **Project Overview**

This is a web-based system built using Django to facilitate food donations and requests. It allows individuals and organizations to donate surplus food and enables users in need to request specific items. The platform also includes a recipe section for leftover food and tracks the environmental impact of saved food.

## **Key Features**
- **Food Donation**: Users can donate food by providing details such as food type, quantity, and expiry date.
- **Food Request**: Users can request specific food items, specifying the type and quantity.
- **Recipe Suggestions**: Displays recipes based on leftover or commonly donated ingredients.
- **Environmental Impact Tracker**: Tracks total food saved and calculates the reduction in carbon footprint.

## **Technology Stack**
- **Backend**: Django
- **Frontend**: HTML, CSS (via Django templates)
- **Database**: SQLite (default for Django)
- **Other Tools**:
  - Django ORM for database interactions.
  - Bootstrap (if used) for styling and responsive design.

## **Project Structure**
```plaintext
/django_app
├── manage.py                 # Django project management
├── /donation_app             # Main Django app for the project
│   ├── models.py             # Defines the database models for donations and requests
│   ├── views.py              # Handles request/response logic
│   ├── urls.py               # Routes URLs to views
│   ├── templates/            # Contains HTML files for different pages
│   │   ├── base.html         # Base template
│   │   ├── donate.html       # Page for food donation
│   │   ├── request.html      # Page for food requests
│   │   ├── recipes.html      # Page for leftover recipes
│   │   └── home.html         # Homepage
│   ├── static/               # CSS, JavaScript, and images
│   │   ├── css/
│   │   │   └── styles.css    # Custom styling for the app
│   │   ├── js/
│   │   │   └── app.js        # JavaScript for dynamic functionality
│   │   └── images/           # Static images used in the app
│   ├── admin.py              # Django admin configuration
│   ├── forms.py              # Defines forms for user input
│   └── tests.py              # Automated tests
└── README.md                 # Project documentation
```

## **Setup Instructions**

### **Prerequisites**
- [Python 3](https://www.python.org/downloads/)
- [Django](https://www.djangoproject.com/)
- A web browser

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/food-donation.git
   cd food-donation
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**:
   ```bash
   python manage.py migrate
   ```

5. **Start the development server**:
   ```bash
   python manage.py runserver
   ```

6. **Access the application**:
   Open [http://localhost:8000](http://localhost:8000) in your web browser.

## **Usage**

### **1. Donate Food**
- Navigate to the "Donate Food" page.
- Fill out the donation form and submit.
- View donated items in the donation table.

### **2. Request Food**
- Go to the "Request Food" page.
- Fill out the request form and submit.
- View requested items in the request table.

### **3. View Recipes**
- Check the "Recipes" page for creative ways to use donated ingredients.

### **4. Environmental Impact Tracker**
- On the homepage, see metrics on food saved and CO2 reduction.

## **Improvement Areas**
- **User Authentication**: Add registration and login for tracking individual contributions.
- **Notification System**: Notify users of matching food donations and requests.
- **Advanced Analytics**: Insights into food trends, popular items, and user engagement.

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch and open a pull request.

## **License**
This project is licensed under the [MIT License](LICENSE).

## **Contact**
For any questions or feedback:
- **Name**: Jocine
- **GitHub**: [Your GitHub Profile]
