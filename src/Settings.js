import React from "react";

class Settings extends React.Component {
  
  // rendering the code to display
  render() {
    return (
      <div style={styles.settings}>

        {/* Title bar */}
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>iPod Settings</p>
          <img
          style={styles.battery}
          src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
          alt="Battery"/>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}>

          <img
          style={styles.image}
          src="https://cdn-icons.flaticon.com/png/128/2880/premium/2880986.png?token=exp=1657811504~hmac=22479b7d2d0d1d0805a0211c908bc875"
          alt="settings"/>
        </div>
      </div>
    );
  }
}

// Styles for Settings
const styles = {
  settings: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "70%",
    height: "70%",
    alignSelf: "center",
  },
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 12px 0 0",
    backgroundImage: "linear-gradient(90deg, #42c39c6f, #485ea0)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
  },
  battery: {
    width: "25px",
    height: "25px",
  },
};

export default Settings;
