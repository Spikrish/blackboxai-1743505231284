# Mobile Number Location Tracker (MERN Stack)

A full-stack application for tracking mobile number locations with Google Maps integration.

## Features
- Track mobile numbers with simulated location data
- View all tracked locations on an interactive map
- Responsive UI with Tailwind CSS
- Form validation for phone numbers
- Real-time location visualization
- Modern UI with Font Awesome icons

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB
- Google Maps API key

### Installation
1. Install server dependencies:
```bash
cd server
npm install
```

2. Install client dependencies:
```bash
cd ../client
npm install @react-google-maps/api
npm install
```

3. Environment Configuration:
- Create `.env` file in server with:
  ```
  MONGO_URI=mongodb://localhost:27017/mobile-tracker
  PORT=5000
  ```
- Create `.env` file in client with:
  ```
  REACT_APP_API_URL=http://localhost:5000
  REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
  ```

### Running the Application
1. Start MongoDB service
2. Run the server:
```bash
cd server
npm start
```

3. Run the client:
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure
```
mern-mobile-tracker/
├── client/ (React frontend)
│   ├── public/
│   ├── src/
│   │   ├── components/ (React components)
│   │   ├── services/ (API services)
│   │   └── *.js (React application files)
│   └── package.json
├── server/ (Express backend)
│   ├── models/ (Mongoose models)
│   ├── routes/ (API routes)
│   └── *.js (Server files)
└── README.md