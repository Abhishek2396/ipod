import React from "react";

class Games extends React.Component {

  // rendering the code to display
  render() {
    return (
      
      // Title bar
      <div style={styles.settings}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>Ipod Games</p>
          <img
          style={styles.battery}
          src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
          alt="battery"/>
        </div>
        
        {/* Game gif present here */}
        <div style={{ width: "100%", height: "90%" }}>
          <img
          style={styles.image}
          src="https://64.media.tumblr.com/2b66c879a28ec79aeebedf6f0953e41b/tumblr_of2d00IgIo1r3smugo1_500.gifv"
          alt="game.gif"/>
        </div>
      </div>
    );
  }
}

// Styles for Games
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
    width: "100%",
    height: "100%",
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

export default Games;
