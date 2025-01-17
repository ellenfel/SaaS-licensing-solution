import requests

def check_license_key(key):
    try:
        response = requests.get('http://127.0.0.1:8090/check_key', params={'license_key': key})
        if response.json()['valid']:
            return True
        else:
            return False
    except requests.exceptions.RequestException as err:
        print ("Something went wrong with the licensing server request", err)
        return False

def start_application():
    user_key = input("Please enter your license key: ")
    if check_license_key(user_key):
        response = requests.get('http://127.0.0.1:8090/check_key', params={'license_key': user_key})
        if response.json()['valid'] and response.json()['active']:
            print("License key valid. Starting application...")
            # Here goes your code to start the application
        else:
            print("Inactive license key. Please enter an active key.")
    else:
        print("Invalid license key. Please enter a valid key.")


if __name__ == "__main__":
    start_application()
