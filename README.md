# Cozy Pews

Introducing a pet adoption platform built on the MERN stack, created to bring together people looking to adopt pets in need of loving homes. Our website features an easy-to-navigate homepage where you can explore different pet categories, find inspiring success stories, and learn about our donation campaigns. We’re dedicated to promoting animal welfare and making the adoption process as simple and enjoyable as possible for everyone involved. Join us in giving these wonderful animals a second chance!

## Live Link & Github Link

- [CozyPaws](https://bespoke-klepon-c7fe9f.netlify.app)
- [Github-CozyPaws-Servere](https://github.com/SFTanim/CozyPows-Server)

## Core Technologies

| **Category**               | **Technologies**                   |
| :------------------------- | :--------------------------------- |
| **Frontend Framework**     | `React`, `React-DOM`               |
| **Routing**                | `React-Router-Dom`                 |
| **State Management**       | `React-Query`, `use-local-storage` |
| **Styling**                | `TailwindCSS`, `DaisyUI`           |
| **APIs and Data Fetching** | `Axios`                            |
| **Authentication & DB**    | `Firebase`                         |
| **Build Tool**             | `Vite`                             |
| **Payment Integration**    | `Stripe`                           |


## Core Features

- ### User -Friendly Interface

  - Our platform features a clean and attractive design that makes it easy for everyone to navigate and interact, no matter their level of tech-savviness.

- ### Pet Search and Adoption

  - You can easily browse through a variety of pet listings, organized by categories like cats, dogs, and rabbits. Each pet profile includes detailed information, making it simple to find the perfect furry friend to adopt.

- ### Secure User Authentication

  - We take your security seriously with a strong login and registration system. You can manage your profile, check your adoption history, and enjoy a personalized dashboard tailored just for you.

- ### Donation Integration

  - Support animal welfare by contributing directly to campaigns or organizations dedicated to rescuing and caring for animals in need. Every little bit helps!

- ### Fully Responsive Design

  - Our website is designed to look great on any device—whether you’re using a desktop, tablet, or smartphone—ensuring a smooth experience no matter where you are.

- ### Community Impact and Success Stories
  - We love to celebrate the happy endings! Our platform showcases heartwarming success stories of adopted pets and their new families, inspiring others to join us in the mission of helping animals find loving homes.

## Initialization

- Clone the repository <br>
  ```bash
  git clone https://github.com/SFTanim/CozyPaws-Client.git
  ```
- Configure Dependencies
  ```bash
  cd CozyPaws-Client
  npm install
  ```
- Setup Environment Variables - Create a `.env` file in the project folder. - Add firebase configuration key in `.env` file

  ```bash
  # in .env file:

  VITE_APIKEY=
  VITE_AUTHDOMAIN=
  VITE_PROJECTID=
  VITE_STORAGEBUCKET=
  VITE_MESSAGINGSENDERID=
  VITE_APPID=
  VITE_IMAGE_HOSTING_KEY=
  VITE_PAYMENT_GATEWAY_PK=

  ```
