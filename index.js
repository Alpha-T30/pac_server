const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // Railway will set the PORT environment variable

// Define PAC file content
const pacContent = `
function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*.facebook.com*")) {
    return "PROXY 198.23.239.134:6540";
  } else if (shExpMatch(url, "*.amazon.com/.com*")) {
    return "PROXY 207.244.217.165:6712";
  }
  return "DIRECT";
}`;

// Serve the PAC file
app.get("/proxy.pac", (req, res) => {
  res.type("application/x-ns-proxy-autoconfig");
  res.send(pacContent);
});

// Start the server
app.listen(port, () => {
  console.log(`PAC server running on port ${port}`);
});
