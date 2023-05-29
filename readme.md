# Flickr Web App

This is a full-stack web application that integrates with the Flickr API. It consists of a client-side application and an Express server. The client-side application allows users to search for images on Flickr, while the server handles the API requests to Flickr.

## Prerequisites

Before running the application, make sure you have the following:

- Node.js (version 14 or above) installed on your machine.
- A Flickr API key. You can obtain an API key by signing up for a Flickr account and creating a new app in the Flickr Developer Portal (https://www.flickr.com/services/apps/create/). Once you have the API key, you'll need to add it to the server's environment variables.

## Installation

Follow these steps to set up and run the Flickr web app:

1. Clone this repository to your local machine.

2. Navigate to the project's root directory.

3. Install the dependencies for both the client and server applications by running the following command:
```Powershell
npm install
```

4. In the `backend` folder, rename the `.env.example` file to `.env`.

5. Open the `.env` file and update the `FLICKR_API_KEY` value with your own Flickr API key. Save the file.

## Usage

To start the Flickr web app, follow these steps:

1. Open a terminal window or tab.

2. Ensure that you are in the project's root directory.

3. Run the following command to start the application:
```Powershell
npm run start
```

This command utilizes `npm-run-all` to concurrently start the Express server and the client-side application.

4. The server will start running on the configured port (default is 3001), and the client-side application will open automatically in your default browser.

5. Use the client-side application to search for images on Flickr and interact with the web app.

## Contributing

Contributions to the project are welcome. If you find any issues or want to add new features, please open an issue or submit a pull request on the project's GitHub repository.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for personal or commercial purposes.
