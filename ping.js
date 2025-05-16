// ping.js
const axios = require('axios');

const url = 'http://zein-edtech.uz/';

async function sendPing() {
  try {
    const response = await axios.get(url);
    console.log(`[${new Date().toISOString()}] Ping sent. Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Ping failed:`, error.message);
  }
}

setInterval(sendPing, 5 * 60 * 1000);
sendPing();
