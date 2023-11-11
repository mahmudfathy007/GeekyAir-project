# GeekyAir Project

Welcome to the GeekyAir project! This project is a simple library management system to manage books and borrowers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Available Features](#available-features)
- [Environment Configuration](#environment-configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with GeekyAir, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmudfathy007/GeekyAir-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd GeekyAir-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To use GeekyAir, follow these instructions:

1. Run the following command:

   ```bash
   npm run dev
   ```

## API Documentation

Explore the GeekyAir API documentation using [Postman](https://documenter.getpostman.com/view/25015433/2s9YXk3144).

You can also find a JSON file in the project containing the APIs.

## Available Features

GeekyAir provides the following features:

### Book Management

- **Create Book:** Add a new book to the library.
- **Get All Books:** Retrieve a list of all books in the library.
- **Get Book by ID:** Retrieve details of a specific book by its ID.
- **Update Book:** Update information for a specific book.
- **Delete Book:** Remove a book from the library.
- **Search Books:** Search for books based on certain criteria.

### Borrower Management

- **Create Borrower:** Add a new borrower to the system.
- **Get All Borrowers:** Retrieve a list of all borrowers.
- **Get Borrower by ID:** Retrieve details of a specific borrower by their ID.
- **Update Borrower:** Update information for a specific borrower.
- **Delete Borrower:** Remove a borrower from the system.

### Borrowing Process Management

- **Create Borrowing Process:** Initiate a borrowing process.
- **Return Book:** Mark a book as returned.
- **Get All Borrowings Process:** Retrieve a list of all borrowing processes.
- **Check Borrowing Process by User ID:** Check borrowing processes for a specific user.
- **Get All Borrowings Process with Due Date Passed:** Retrieve processes where the due date has passed.

## Environment Configuration

Before running the application, make sure to set up your environment configuration. Follow these steps:

1. Rename the `.env.example` file to `.env`:

   ```bash
   mv .env.example .env
   ```

2. Open the `.env` file in a text editor and fill in the values:

   ```env
   # Port number
   PORT=3000

   # Database
   DB_NAME=my_database
   DB_USER=my_database_user
   DB_PASSWORD=my_secure_password
   DB_HOST=localhost
   DB_DIALECT=postgresql
   DB_PORT=5432
   ```

   Replace the placeholder values with your own data.

## Contributing

We welcome contributions from the community! If you'd like to contribute to GeekyAir, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Description of changes'`.
4. Push your changes to your fork: `git push origin feature-name`.
5. Submit a pull request to the `main` branch of the original repository.

Please make sure to follow our [code of conduct](CODE_OF_CONDUCT.md) and [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.
```
