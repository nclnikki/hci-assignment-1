# HCI Assignment 1

A simple React app with Firebase Authentication. Users can sign up, log in, and toggle password visibility.

## Features

- Login and Signup functionality using Firebase Auth
- Show/Hide password feature
- Dashboard with Logout button
- Responsive and clean UI

## Tech Stack

- React (with Vite)
- Firebase Authentication
- CSS for styling

## Installation

1. Clone the repository:


```bash
git clone https://github.com/nclnikki/hci-assignment-1.git
cd hci-assignment-1
```

2. Install Dependencies

```bash
npm install
```

3. Create a .env file in the root directory with Firebase config:
```ini
VITE_API_KEY=api_key_here
VITE_AUTH_DOMAIN=project_id.firebaseapp.com
VITE_PROJECT_ID=project_id
VITE_STORAGE_BUCKET=project_id.appspot.com
VITE_MESSAGING_SENDER_ID=messaging_sender_id
VITE_APP_ID=app_id
```

4. Start the development server:
```bash
npm run dev
```
