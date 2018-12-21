const y = require("yeelight-awesome");

module.exports = {
  toggleTvLight: () => {
    const discover = new y.Discover();
    discover.start().then(devices => {
      const device = devices[0];
      const yeelight = new y.Yeelight({
        lightIp: device.host,
        lightPort: device.port
      });
      yeelight.connect().then(l => {
        l.toggle().then(() => {
          l.disconnect();
          discover.destroy();
        });
      });
    }).catch(e => {
      console.log(`ERROR:\n${e}`);
    });
  }
}