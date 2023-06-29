# Licensing Solution Test Case

This is a simple Flask web application to generate and manage license keys for software, and a demo application to simulate a licensed software's behavior. The app uses SQLite for data storage.

## Project Structure

The application consists of the following files:

- `application/app.py`: A demo application simulating a licensed software's behavior, validating license keys against the licensing server.
- `licensingSolution/main.py`: The main server-side logic for the key generation and management system (licensing server).
- `licensingSolution/templates/index.html`: The homepage of the licensing server.
- `licensingSolution/templates/keygen.html`: The page for key generation.
- `licensingSolution/static/script.js`: The client-side JavaScript file.
- `licensingSolution/static/styles.css`: The CSS file for styling the web pages.

## Setup and Run

1. Clone the repository: `git clone <repository url>`.
2. Navigate into the project directory: `cd <project directory>`.
3. If you have not yet created a Conda environment, you can do so by using the following command: `conda create -n webdev python=3.11`.
4. Activate the Conda environment: `conda activate webdev`.
5. Install the required packages: `pip install -r requirements.txt`.
6. Run the licensing server: `python licensingSolution/main.py`.
7. In a separate terminal, with the same Conda environment active, run the demo application: `python application/app.py`.


## Usage

### Licensing Server
1. Open your web browser and go to `localhost:8090`.
2. On the homepage, you can see the list of already generated keys. You can toggle the active state of any key by clicking on the 'Yes' or 'No' in the 'Active' column.
3. Click on the 'Generate a Key' button to generate a new key. A modal will appear where you can enter the number of days for the key to expire. If you don't provide any value, it defaults to 30 days.
4. Click the 'Generate' button in the modal to generate the key. The key will appear in the keys list.
5. Refresh the page to load the keys from the server.

### Demo Application
1. Run the application using the command `python application/app.py`.
2. The application will ask for a license key. Enter a key from the licensing server.
3. If the key is valid and active, the application will print "License key valid. Starting application..." and you can proceed with using the application. If not, the application will provide an appropriate error message.

## Contributing


## License

