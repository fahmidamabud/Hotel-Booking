<h1 align="center">🏨 Hotel Booking Application</h1>

<p align="center">
  <strong>Full-Stack Hotel Booking Web Application</strong><br>
  Built using <b>React.js</b>, <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b> with <b>Tailwind CSS</b> for styling.
</p>

<hr>

<h2>📘 Project Overview</h2>

<p>
The <strong>Hotel Booking Application</strong> is a complete web-based platform that allows users to browse hotels, view room details, and book rooms online. 
It also includes authentication and admin functionalities for managing hotels, rooms, and bookings. 
This project demonstrates the use of a modern MERN stack setup and focuses on clean, responsive UI using Tailwind CSS.
</p>

<hr>

<h2>🛠️ Technology Stack</h2>

<ul>
  <li><b>Front-end:</b> React.js, React Router, Tailwind CSS</li>
  <li><b>Back-end:</b> Node.js, Express.js</li>
  <li><b>Database:</b> MongoDB (via Mongoose)</li>
  <li><b>Environment Management:</b> dotenv</li>
  <li><b>Version Control:</b> Git & GitHub</li>
</ul>

<hr>

<h2>📂 Folder Structure</h2>

<pre>
Hotel-Booking/
├── client/        → React front-end
├── server/        → Node.js + Express back-end
├── .gitignore
├── README.md
└── package.json
</pre>

<hr>

<h2>⚙️ Installation & Setup</h2>

<h3>1️⃣ Clone the Repository</h3>

<pre><code>git clone https://github.com/fahmidamabud/Hotel-Booking.git
cd Hotel-Booking
</code></pre>

<h3>2️⃣ Install Dependencies</h3>

<p>Navigate into both <code>client</code> and <code>server</code> directories and install dependencies separately.</p>

<pre><code># For client
cd client
npm install

# For server
cd ../server
npm install
</code></pre>

<hr>

<h2>🔐 Environment Variables</h2>

<p>
Create a <code>.env</code> file inside the <code>server</code> folder.  
Below is the example structure you should follow:
</p>

<pre><code># Server Port
PORT=5000

# MongoDB Database Connection
MONGO_URI=your_mongodb_connection_string_here

# JWT Secret for Authentication
JWT_SECRET=your_secret_key_here

# (Optional) Cloudinary or other image storage configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
</code></pre>

<p>
Make sure not to share your <code>.env</code> file publicly or upload it to GitHub.  
Your <code>.gitignore</code> file should include:
</p>

<pre><code>node_modules/
.env
</code></pre>

<hr>

<h2>🚀 Running the Application</h2>

<h3>3️⃣ Start the Server</h3>

<pre><code>cd server
npm run dev
</code></pre>

<p>
This command will start the Node.js backend on the specified port (default: <b>5000</b>).
</p>

<h3>4️⃣ Start the Client</h3>

<pre><code>cd ../client
npm run dev
</code></pre>

<p>
This starts the React development server, usually at <b>http://localhost:5173</b> (if using Vite).
</p>

<hr>

<h2>🧩 Running Both Servers Concurrently</h2>

<p>
If you wish to run both the client and server simultaneously, you can use a tool like <code>concurrently</code> in your project root.
</p>

<pre><code># Install concurrently (optional)
npm install concurrently --save-dev
</code></pre>

<p>Then in your root <code>package.json</code>, add a script:</p>

<pre><code>"scripts": {
  "start": "concurrently \"npm run dev --prefix server\" \"npm run dev --prefix client\""
}
</code></pre>

<p>Now you can start both with:</p>

<pre><code>npm start
</code></pre>

<hr>

<h2>📦 Build for Production</h2>

<p>To create a production build of the React front-end:</p>

<pre><code>cd client
npm run build
</code></pre>

<p>
This generates optimized static files in the <code>dist/</code> folder, ready for deployment.
</p>

<hr>

<h2>📘 Available Scripts Summary</h2>

<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>npm install</code></td>
      <td>Installs all dependencies</td>
    </tr>
    <tr>
      <td><code>npm run dev</code></td>
      <td>Starts development server (client or server)</td>
    </tr>
    <tr>
      <td><code>npm run build</code></td>
      <td>Builds production version of client</td>
    </tr>
    <tr>
      <td><code>npm start</code></td>
      <td>Runs both servers concurrently (if configured)</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>💡 Notes</h2>

<ul>
  <li>Ensure MongoDB is running locally or use a remote MongoDB Atlas URI.</li>
  <li>Use correct environment variable values before running the app.</li>
  <li>The project uses Tailwind CSS for all styling (no plain CSS files).</li>
  <li>Node.js version 18+ is recommended for best compatibility.</li>
</ul>

<hr>

<h2>🧑‍💻 Author</h2>

<p>
<strong>Developed by:</strong> Fahmida Mabud<br>
GitHub: <a href="https://github.com/fahmidamabud">fahmidamabud</a><br>
</p>

<hr>

<h2>📄 License</h2>
<p>
This project is open-source under the <b>MIT License</b>.  
Feel free to use and modify with proper attribution.
</p>
