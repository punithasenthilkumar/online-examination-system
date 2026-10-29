# Online Examination System

## Project Overview

The Online Examination System is a web-based application developed to conduct multiple-choice online examinations. It allows students to enter their personal details, attend a Web Technology examination, and view their results immediately after submission.

The application includes a countdown timer, automatic exam submission, score calculation, percentage calculation, and pass/fail status.

## Features

- **Student Login:** Enter student name and register number.
- **Department Selection:** Select the student's department.
- **Online Examination:** Attend a Web Technology exam containing 10 multiple-choice questions.
- **Countdown Timer:** A 2-minute timer tracks the examination duration.
- **Automatic Submission:** The exam is submitted automatically when the timer expires.
- **Score Calculation:** Calculates the number of correct answers out of 10.
- **Percentage Calculation:** Displays the student's examination percentage.
- **Pass/Fail Evaluation:** Displays PASS for a score of 50% or above; otherwise, displays FAIL.
- **Instant Results:** Shows student details, score, percentage, and result.
- **Local Storage:** Stores student details and examination results in the browser.

## Technologies Used

- **HTML5** – Creates the login, examination, and result pages.
- **CSS3** – Styles the pages and user interface.
- **JavaScript** – Implements the timer, answer evaluation, automatic submission, and result calculation.
- **Browser Local Storage** – Stores student information and examination results.

## Project Structure

```text
online exam system/
│
├── login.html
├── exam.html
├── result.html
├── style.css
├── script.js
└── README.md
```

## Application Workflow

1. The student opens the login page.
2. The student enters their name and register number and selects a department.
3. The system opens the examination page.
4. The student answers the 10 Web Technology MCQs within 2 minutes.
5. The student submits the exam, or the system submits it automatically when time expires.
6. JavaScript evaluates the answers and calculates the score and percentage.
7. The result page displays the student details, score, percentage, and PASS/FAIL status.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/punithasenthilkumar/online-examination-system.git
   ```

2. Open the project folder:

   ```bash
   cd online-examination-system
   ```

3. Open `login.html` in a web browser.

4. Alternatively, open the folder in Visual Studio Code and run `login.html` using the Live Server extension.

5. Enter the required student details and click **Start Exam** to begin.

## Evaluation Criteria

- Total questions: 10
- Maximum score: 10
- Each correct answer: 1 mark
- Passing percentage: 50%
- Examination duration: 2 minutes

## Future Enhancements

- Admin panel to add, edit, and delete questions.
- Database integration to store student details and results permanently.
- Support for multiple subjects and examinations.
- Secure student authentication.
- Examination history and performance reports.

## Author

**Punitha Senthilkumar**

GitHub: [punithasenthilkumar](https://github.com/punithasenthilkumar)

## License

This project is developed for educational and academic purposes.
