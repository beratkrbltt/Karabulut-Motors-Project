# 🚗 Karabulut Motors

Karabulut Motors is a comprehensive application for vehicle sales and repair/maintenance services, built using React and React Redux Toolkit. The project demonstrates a clean and dynamic UI with interactive features for exploring car options, purchasing vehicles, and scheduling repair and maintenance services.
## ✨ Features

### 1. **Homepage with Rotating Car Cards**
   - 🖼️ Each card showcases the car's image, model, and price on the front.
   - 🔄 Flip the card to view detailed information on the back.
   - 📅 The back side includes a **Book Appointment** button, leading to a detailed booking page.

### 2. **Booking Appointment Page**
   - 🚘 Displays the selected car's image and model.
   - 📝 Users can enter their name, phone number, and select a date and time for the appointment.
   - 🔒 Booked slots are saved in **localStorage**, ensuring unavailable time slots cannot be selected again.

### 3. **Our Services Page**
   - 🔧 **Service Request Section**: Users can submit their details:
     - 📛 Name
     - 📧 Email
     - 📞 Phone number
     - 🚗 Vehicle model and the requested service
   - 💾 All submitted data is securely stored in **localStorage**.

### 4. **Footer Section**
   - 📞 **Contact Information**
   - 🌐 **Social Media Links**
   - 📲 **Request a Call**:
     - Users can enter their phone number, which is also saved in **localStorage**.

## 🛠️ Technologies Used
- **React**: For building the UI and managing component-based architecture.
- **React Redux Toolkit**: For state management and handling data flow across components.
- **localStorage**: To persist user data such as bookings, service requests, and contact information.

## 📸 You can view the application's screenshots below.
![1](image/home1.png)
![2](image/home2.png)
![3](image/Appointment1.png)
![4](image/Appointment2.png)
![5](image/Service.png)


## 🚀 How to Run the Project
1. Extract the file from the ZIP archive.

2. Navigate to the project directory:
   ```bash
   cd K-motors
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

Feel free to reach out if you have any questions or feedback regarding the project. Thank you for checking out Karabulut Motors! 🚗💨
