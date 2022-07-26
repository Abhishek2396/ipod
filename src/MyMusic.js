import React from "react";

class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: true,
    };
  }

  componentDidMount() {
    let self = this;
    self.props.audio.play();

    self.props.audio.addEventListener("timeupdate", function () {
      if (self.state.isMounted) {
        var pos = self.props.audio.currentTime / self.props.audio.duration;
        self.updateTime();
        let fill = document.getElementById("fill");
        console.log(fill);
        if (fill !== null) {
          fill.style.width = pos * 100 + "%";
        }
      }
    });
  }

  updateTime = () => {
    this.setState({
      audio: this.props.audio,
    });
  };

  componentWillUnmount() {
    this.setState.isMounted = false;
  }

  // rendering the code to display
  render() {
    let audio = this.props.audio;

    return (
      // Title bar
      <div style={styles.myMusicContainer}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>Music Player</p>
          <img
          style={styles.battery}
          src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
          alt="battery"/>
        </div>

        {/* Description of Song */}
        <div style={styles.info}>
          <img
          style={styles.image}
          src="https://c.saavncdn.com/348/Excuses-Ap-Dhillon-Punjabi-2022-20220506024751-500x500.jpg"
          alt="song"/>

          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>Excuses</h4>
            <p style={{ marginBottom: "0" }}>AP Dhillon</p>
          </div>
        </div>

        {/* Seek Bar */}
        <div style={styles.statusBar}>
          <p style={styles.currTime}>
            {audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}
          </p>

          <div style={styles.seekBar}>
            <div style={styles.fill} id="fill"></div>
          </div>

          <p style={styles.dur}>
            {audio != null ? Math.floor(audio.duration) : "0 / 0"}
          </p>
        </div>

      </div>
    );
  }
}

// Styles for MyMusic
const styles = {
  myMusicContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: "80%",
    width: "45%",
    alignSelf: "center",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statusBar: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  subInfo: {
    alignSelf: "center",
  },
  seekBar: {
    width: "75%",
    height: "20%",
    border: "1px solid grey",
    cursor: "pointer",
    alignSelf: "center",
    display: "flex",
  },
  fill: {
    height: "100%",
    backgroundColor: "red",
  },
  currTime: {
    margin: "0",
    alignSelf: "center",
  },
  dur: {
    margin: "0",
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

export default MyMusic;
