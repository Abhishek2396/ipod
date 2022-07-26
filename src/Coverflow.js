import React from "react";

class Coverflow extends React.Component{

  // Rendering the code for display
  render() {
    return (

      // Title bar
      <div style={styles.Coverflow}>
        <div style={styles.titleBar}>
          <p style={{fontWeight: "bold", height: '10%'}} > Ipod Coverflow </p>
          <img
          style={styles.battery}
          src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
          alt="battery"/>
        </div>

        {/* Text area */}
        <div style={styles.info} >
          <h4> Cover-flow </h4>
        </div>
      </div>
    );
  }
}

// styles for Coverflow
const styles = {
  Coverflow: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
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
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",

  },
  battery: {
    width: "25px",
    height: "25px",     
  }
};

export default Coverflow;