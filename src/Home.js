import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class Home extends React.Component {

  // rendering the code to display
  render() {
    return (
      <div style={styles.homeScreen} id="home-screen">
        <div style={styles.menuList} id="menu-list">
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold" }}>iPod</p>
            <img
              style={styles.battery}
              src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
              alt="battery"
            />
          </div>

          {/* Adding List in Home Screen */}
          <ListGroup style={{ borderRadius: "0" }}>

            <ListGroupItem 
            style={{ border: "0", padding: "0.2rem 0.6rem" }}
            className={this.props.activeItem === "Coverflow" ? "active" : ""} 
            >
              Coverflow{" "}
              {this.props.activeItem === "Coverflow" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : ("")}
            </ListGroupItem>

            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "NowPlaying" ? "active" : ""}
            >
              Now Playing{" "}
              {this.props.activeItem === "NowPlaying" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : ("")}
            </ListGroup.Item>

            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Music" ? "active" : ""}
            >
              Music{" "}
              {this.props.activeItem === "Music" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : ("")}
            </ListGroup.Item>

            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Games" ? "active" : ""}
            >
              Games{" "}
              {this.props.activeItem === "Games" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : ("")}
            </ListGroup.Item>

            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Settings" ? "active" : ""}
            >
              Settings{" "}
              {this.props.activeItem === "Settings" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : ("")}
            </ListGroup.Item>
            
          </ListGroup>
        </div>

        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}

// Styles for Home
const styles = {
  homeScreen: {
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
    height: "100%",
    width: "50%",
    backgroundImage: 'url("https://img.favpng.com/5/8/8/samsung-galaxy-s6-samsung-galaxy-s5-smartphone-wallpaper-png-favpng-Rg3QQBfgSzzsefjAX99F063Tx_t.jpg")',
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

export default Home;
