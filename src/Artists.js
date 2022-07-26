import React from "react";

class Artists extends React.Component {

  // rendering the code to display
  render() {
    return (
      <div style={styles.artistsContainer}>

        {/* Title bar */}
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>iPod</p>
          <img
            style={styles.battery}
            src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
            alt="battery"
          />
        </div>

        {/* Texts area */}
        <div style={styles.info}>
          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>IPod Player</h4>
            <p style={{ marginBottom: "0" }}>Made by using React</p>
            <p>Created by: Abhishek Kumar Singh </p>
          </div>
        </div>

        <div style={styles.info2}>
          <h5 style={{ alignSelf: "center" }}>
            Thank you for using the Ipod !!
          </h5>
        </div>
      </div>
    );
  }
}

// Styles for Artists
const styles = {
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "2rem",
    height: "2rem",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info2: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subInfo: {
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

export default Artists;
