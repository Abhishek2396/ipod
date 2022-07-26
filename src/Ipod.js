import React from "react";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import sound from "./assets/music/Excuses - Ap Dhillon.mp3";

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "Coverflow",
      activePage: "Home",
      enter: 0,
      play: true,
    };
  }

  // Adding rotation function to wheel 
  rotateWheel = () => {
    var containerElement = document.getElementById("inner-container");
    var activeRegion = new ZingTouch.Region(containerElement);
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;

    if (self.state.enter < 2) {
      activeRegion.bind(containerElement, "rotate", function (event) {

        //Perform Operations
        var newAngle = event.detail.distanceFromLast;
        console.log(newAngle);

        // Moving towards Right Side
        if (newAngle > 0) {
          console.log(change);
          change++;

          if (change === 15) {
            console.log("change state");
            change = 0;

            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "Coverflow") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              } else if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Games",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Coverflow",
                });
              }

            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }

          // Moving towards Left Side
        } else {
          console.log(change);
          change++;

          if (change === 15) {
            console.log("change state");
            change = 0;

            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "Coverflow") {
                self.setState({
                  activeItem: "Settings",
                })
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Games",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              } else if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Coverflow",
                });
              }
              
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        }
      });
    } else {
      console.log("Not allowed to enter");
    }
  };

  // Function to go in the page from middle button/
  changePage = () => {
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic",
        activePage: this.state.activeItem,
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying",
        activePage: "MyMusic",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem,
      });
    }
  };

  // Press Home button to directly go on homepage
  changePageToHomeScreen = () => {
    if (
      this.state.activePage === "MyMusic" ||
      this.state.activePage === "Artists" ||
      this.state.activePage === "Music"
    ) {
      this.setState({
        activeItem: "Coverflow",
        activePage: "Home",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: "Home",
      });
    }
  };

  // Press Back button/ (|<<) to go on previous page
  changePageToBack =() => {
    if (
      this.state.activePage === "MyMusic" ||
      this.state.activePage === "Artists"
    ) {
      this.setState({
        activeItem: "MyMusic" ,
        activePage: "Music",
      });
    } else {
      this.setState({
        activeItem: "Coverflow",
        activePage: "Home", 
      });
    }
  }

  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause();
        this.setState({
          play: false,
        });
      } else {
        this.state.audio.play();
        this.setState({
          play: true,
        });
      }
      console.log("toggled");
    }
  };

  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    this.setState({
      audio: audio,
    });
    console.log(this.state);
  }

  // rendering the code to display Ipod
  render() {
    return (
      <div style={styles.ipodContainer}>
        <audio className="audio-element">
          <source src={sound}></source>
        </audio>

        <Screen
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
          audio={this.state.audio}
        />

        <div
          id="inner-container"
          style={styles.wheel}
          onMouseOver={this.rotateWheel}>

          <div style={styles.buttonContainer}>

            {/* Press Home button to directly go on homepage */}
            <div style={styles.menuButton}>
              <img 
              onClick={this.changePageToHomeScreen} 
              style={{width: '30px', fontSize:'1.5rem', alignSelf:'center'}} 
              src ="https://cdn-icons-png.flaticon.com/512/846/846551.png" 
              alt="menu"/>
            </div>
          </div>

          <div style={styles.buttonContainer}>

            <div style={styles.middleButtons}>
              {/* Press Back button/ (|<<) to go on previous page */}
              <img 
              onClick={this.changePageToBack}
              style={{width: '20px', alignSelf:'center',}} 
              src="https://cdn-icons-png.flaticon.com/128/6415/6415680.png" alt="back" />
                
              {/* Press center button to enter page */}
              <div
                onClick={this.changePage}
                style={{
                backgroundImage: "linear-gradient(45deg, #a7a53f, transparent)",
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                }}/>
                <img 
                style={{width: '25px', fontSize:'1.5rem', alignSelf:'center'}} 
                src="https://cdn-icons-png.flaticon.com/128/26/26309.png" alt="forward" /> 
              </div>
            </div>

            {/* Press play button to play or pause music */}
            <div style={styles.buttonContainer}>
              <div onClick={this.toggle} style={styles.playButton}>
                <img 
                onClick={this.toggle}
                style={{width: '35px', fontSize:'1.5rem', alignSelf:'center'}} 
                src="https://cdn-icons-png.flaticon.com/512/732/732042.png" 
                alt="play/pause" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Styles for Ipod
const styles = {
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundColor: "#c5c58c",
    boxShadow: '1px 1px 2px black, 0 0 10px black, 0 0 5px black',
    margin: "4rem auto",
    webkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.3))',
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "24px",
  },
  wheel: {
    width: "70%",
    height: "40%",
    margin: "1rem auto",
    backgroundColor: "rgb(241, 236, 236)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    height: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    alignSelf: "center",
    fontSize: "1.5rem",
    color: "white",
  },
};

export default Ipod;
