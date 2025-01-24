# Haven

Haven is a modern hotel website built using Next.js, Tailwind CSS, and powered by Auth.js for authentication and Supabase for data management. This website allows users to view luxury cabins in the heart of the Italian Dolomites, book them for specific dates and number of guests, and enjoy a seamless, responsive, and visually engaging user experience.

## Preview

Here’s a quick look at the design:

[Check out the live demo](#)

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Clone and Run the Project](#how-to-clone-and-run-the-project)
  - [Prerequisites](#prerequisites)
  - [Steps to Clone and Run](#steps-to-clone-and-run)
- [License](#license)
- [Contributing](#contributing)

## Project Description

Haven offers an online booking platform for 8 luxury cabins located in the serene Italian Dolomites. The website showcases beautiful visuals of the cabins, provides an option to log in and book a cabin, and allows users to choose the number of nights and members for their stay. The site emphasizes modern UI features, responsive design, and an immersive user experience that reflects the natural beauty of the location.

## Features

- **Luxury Cabin Overview**: A stunning display of the 8 luxury cabins available for booking.
- **User Authentication**: Secure login and registration using Auth.js for a seamless experience.
- **Cabin Booking**: Book cabins based on the number of nights and number of guests.
- **Responsive Design**: Fully responsive layout for an optimal experience across all devices.
- **Modern UI**: Clean, sleek design with smooth transitions and animations.
- **Supabase Integration**: Managed data for cabin availability, user profiles, and booking details.
- **Nature-Inspired Design**: Visual elements and color palettes that reflect the tranquility and beauty of the Italian Dolomites.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.
- **Auth.js**: Authentication framework for secure login and user management.
- **Supabase**: Open-source backend-as-a-service platform for database and authentication.
- **Vercel**: Deployment platform used to host and serve the website.

## How to Clone and Run the Project

### Prerequisites

- Ensure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).
- You should have **Git** installed. Download it from [here](https://git-scm.com/).
- Set up a **Supabase** account and project. More info [here](https://supabase.io/).
- Install **Vercel CLI** if you plan to deploy locally using Vercel.

### Steps to Clone and Run:

1. **Clone the repository**

   ```bash
   git clone https://github.com/prabhsingh20/haven-website.git
   ```

2. **Navigate to the project directory**

   Change into the project directory by running:

   ```bash
   cd haven
   ```

3. **Install dependencies**

   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. **Set up Supabase**

   - Create a new Supabase project and configure your database schema.
   - Get your Supabase credentials (API keys) and update the `.env.local` file with the relevant values.

5. **Start the development server**

   Once the dependencies are installed and Supabase is configured, you can start the app by running:

   ```bash
   npm run dev
   ```

   This will start the development server, and you should see the application running at http://localhost:3000.

---

## Core Dependencies

- **Next.js**: React framework for building modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid custom styling.
- **Auth.js**: Framework for handling user authentication.
- **Supabase**: Backend platform for managing data and authentication.
- **Vercel**: Hosting and deployment platform for Next.js applications.

For a full list of dependencies, check the `package.json` file.

## Contributing

✨ We welcome contributions to improve Haven! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Run tests (if applicable) and ensure everything works.
5. Commit your changes and push to your forked repository.
6. Open a Pull Request to the main repository.

Please make sure to adhere to the project's coding standards, and write meaningful commit messages. If you're unsure about anything, feel free to ask!

## Testing

This project currently does not have a dedicated testing suite. However, contributions to add tests for robust functionality are welcome. If you'd like to help with testing, please follow the instructions below (if applicable).

- To run tests:  
  `npm run test` (or the appropriate command)

## License

This project is open-source and available under the MIT License. You can freely use, modify, and distribute the code. Please see the [LICENSE](./LICENSE) file for more detailed information.
