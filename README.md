# StudySparks Ed-Tech Platform

Study-sparks is a versatile and intuitive ed-tech platform that enables users to create, consume, and rate educational content. It provides a seamless and interactive learning experience for students while offering a platform for instructors to showcase their expertise and connect with learners worldwide. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.


## System Architecture

The StudySparks ed-tech platform follows a client-server architecture with the following main components:

- **Front-end**: Built with ReactJS, it communicates with the back end using RESTful API calls.
- **Back-end**: Developed with NodeJS and ExpressJS, it handles user authentication, course management, and more.
- **Database**: Utilizes MongoDB as a NoSQL database to store course content, user data, and other relevant information.

![System Architecture Diagram](https://github.com/yashsarode45/StudyNotion-Mega-Project/assets/65209607/3a154827-641d-4269-b662-203afcfd7654)

---

## Front-end

The front end of StudySparks is built with ReactJS, offering a dynamic and responsive user interface for students and instructors. Here are some key pages and functionalities:

**For Students:**

- **Homepage**: Introduction to the platform.
- **Course List**: List of available courses with descriptions and ratings.
- **Wishlist**: Display added courses.
- **Cart Checkout**: Complete course purchase using Razorpay.
- **Course Content**: Access course material, including videos.
- **Enrolled Courses**: Progress and list of enrolled courses.
- **User Details**: Account information.
- **User Edit Details**: Edit account information.

**For Instructors:**

- **Dashboard**: Overview of instructor's courses and ratings.
- **Insights**: Detailed course including the number of views, clicks, and other relevant metrics.
- **Course Management Pages**: Create, update, delete courses.
- **View and Edit Profile Details**: Account management.

Front-end tools and technologies include ReactJS, CSS, Tailwind CSS, Redux for state management, and VSCode for development.
Additionally, we use some npm packages to add extra functionality to the front end.


---

## Back-end

The back end of StudySparks is built with NodeJS and ExpressJS and uses MongoDB as its primary database. Key features and functionalities include:

- **User Authentication and Authorization**: Secure login, OTP verification, and forgot password functionality.
- **Course Management**: Instructors can create, update, delete courses, and students can view and rate them.
- **Payment Integration**: Razorpay integration for course purchases.
- **Cloud-based Media Management**: Cloudinary for storing and managing media content.
- **Markdown Formatting**: Course content is stored in Markdown format for rendering.

**Frameworks, libraries, and tools used**: Node.js, MongoDB, Express.js, JWT for authentication and authorization, Bcrypt for password hashing, and Mongoose for database interaction.





