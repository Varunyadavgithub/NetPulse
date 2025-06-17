# 🔌 NetPulse – Smart Internal Network Monitoring Dashboard

**NetPulse** is a web-based full-stack tool to monitor the online/offline status of internal network devices using parallel ping checks — built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

> Stop running `ping` in 10 terminals. Start visualizing your network health with one beautiful dashboard.

---

## 🧠 Problem Statement

In many workplaces, IT teams still manually run `ping` commands in separate terminal windows to check device connectivity (servers, routers, printers, CCTV, etc.).  
This is time-consuming, error-prone, and inefficient — especially when dealing with many devices daily.

---

## 💡 Solution

NetPulse automates this process with a smart dashboard that:
- Pings multiple IPs in parallel
- Shows real-time device status (green = online, red = offline)
- Logs the ping history
- Alerts on failures (future)
- Supports device grouping & management

---

## 🌐 Live Demo

[🔗 Live Site](#) – *Coming Soon*  
[📽 Demo Video](#) – *Coming Soon*

---

## 🖥️ Tech Stack

| Layer         | Technology         |
|---------------|--------------------|
| Frontend      | React.js, Tailwind CSS |
| Backend       | Node.js, Express.js |
| Database      | MongoDB (Atlas)     |
| Pinging       | `ping` (Node wrapper) |
| Scheduling    | `node-cron`         |
| Deployment    | Render / Vercel     |

---

## 📸 Screenshots

![Screenshot 2025-06-17 164049](https://github.com/user-attachments/assets/23c678cd-b527-411a-8631-2cbed3dcdeb7)

---

## ⚙️ Features

- ✅ Parallel ping for multiple IPs
- 🌐 Real-time status indicators
- 📝 Add/Edit/Delete IP devices
- 🔍 Search & filter devices
- 📋 Logs of ping results (time + status)
- 🕒 Auto-ping with cron jobs
- 📱 Mobile-responsive dashboard

---

## 📁 Project Structure

```

netpulse/
├── client/            # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── server/            # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js
├── .env
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/netpulse.git
cd netpulse
````

### 2. Set up Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 3. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

### 4. Run the App

```bash
# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/devices      | Get all devices    |
| POST   | /api/devices      | Add a new device   |
| DELETE | /api/devices/\:id | Delete a device    |
| GET    | /api/ping         | Ping all devices   |
| GET    | /api/ping/\:ip    | Ping a specific IP |

---

## ✅ To-Do

* [x] Device CRUD APIs
* [x] Ping command integration
* [x] Basic React dashboard
* [ ] Real-time ping updates
* [ ] Logs & auto-ping
* [ ] Alert system (email/slack)
* [ ] Deploy to Render

---

## 🙋‍♂️ Author

**Varun Yadav**
[🔗 Portfolio](#) | [🐱 GitHub](https://github.com/alphavarun2603) | [💼 LinkedIn](https://linkedin.com/in/alphavarun2603)

---

## 🤝 Contributing

Pull requests are welcome! If you’d like to improve the UI, performance, or features — feel free to fork and submit a PR.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Feedback

Have suggestions or found a bug?
Feel free to open an issue or connect with me!
