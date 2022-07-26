import React from "react";
import { ListGroup } from "react-bootstrap";

class Music extends React.Component {

  // rendering the code to display
  render() {
    return (

      // Title bar
      <div style={styles.musicScreen} id="music-screen">
        <div style={styles.menuList} id="menu-list">
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold" }}>iPod Music</p>
            <img
            style={styles.battery}
            src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
            alt="battery" />
          </div>

          {/* Music page container */}
          <ListGroup style={{ borderRadius: "0" }}>

            {/* Contains List in Music page */}
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "MyMusic" ? "active" : ""} >
              My Music{" "}
              {this.props.activeItem === "MyMusic" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : ("")}
            </ListGroup.Item>

            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Artists" ? "active" : ""} >
              Artists{" "}
              {this.props.activeItem === "Artists" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : ("")}
            </ListGroup.Item>

          </ListGroup>
        </div>
        <div style={styles.imageContainer} id="image-container">
        </div>
      </div>
    );
  }
}

// Styles for Music
const styles = {
  musicScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
  },
  menuList: {
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1",
  },
  imageContainer: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    backgroundImage: 'url("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0",
  },
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 0 0 0",
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

export default Music;
