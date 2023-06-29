# Licensing Solution Test Case

This is a simple Flask web application to generate and manage license keys for software, and a demo application to simulate a licensed software's behavior. The app uses in-memory data structure (a list of dictionaries) for data storage.

![Ekran Görüntüsü](https://github.com/SoftIceCream/Licensing_Solution/assets/42888846/5abc0215-5310-4983-8bc8-2002780ef09d)


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

## Future Goals and Improvement Ideas

Given the vision of providing a robust, user-friendly, and secure licensing solution for software and application developers, our project can take the following paths:

### Short-Term Goals:

1. Expand the Feature Set - Additional features could be key expiration notifications, renewal of keys, and different licensing models (like perpetual, term, concurrent, etc.)

2. Testing - Conduct thorough testing of the system for any bugs or security issues.

3. User Interface Improvement - Plan for a more user-friendly and attractive interface.

4. Documentation - Prepare comprehensive documentation for your project, including installation, usage, and internal workings. Create guides or tutorials for integration with popular software development frameworks.

### Long-Term Goals:

1. Scalability - Ensure that the system can handle the increased load with more users.

2. Integration with Payment Gateways - Automate the process of issuing keys upon payment.

3. API Development - Provide an API for the system so that it can be integrated into other software or services.

4. Cross-Platform Support - Develop versions for different platforms like Windows, MacOS, Linux, and even mobile platforms.

5. Customer Support - Set up a system to handle customer support requests efficiently, such as a ticketing system or a support forum.

### Milestones:

1. Completion of Feature Set Expansion - Adding features like key expiration notifications, renewal of keys, different licensing models, etc.

2. Completion of Initial Testing Phase - After thorough testing of the system, all identified bugs should be fixed.

3. User Interface Redesign - Redesign of the interface to improve user experience.

4. Completion of Documentation - Detailed documentation for users and contributors is completed.

5. Scalability Achieved - The system is able to handle a large number of users without performance degradation.

6. Integration with Payment Gateways - The system is now capable of issuing keys automatically upon payment.

7. API Development - The API for your system is fully functional and documented.

8. Cross-Platform Support - The system is now able to run on multiple platforms.

### Improvement Ideas:

1. Database Integration - Better persistence and scalability with a database.

2. User Accounts - Associate keys with user accounts for easier management and customer support.

3. Key Analytics - Provide analytics on key usage, like how many active keys there are, how many have expired, etc.

4. Robust Security - Continuously review and enhance security measures. This could involve encryption of sensitive data, regular audits, and vulnerability assessments.

5. Localization - Increase the accessibility of your product by adding support for multiple languages.
