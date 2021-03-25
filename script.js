import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const drumPads = [
{
  letter: "Q",
  keyCode: 81,
  id: "Roblox-Oof",
  src: "https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3" },

{
  letter: "W",
  keyCode: 87,
  id: "Discord-Notification",
  src: "https://www.myinstants.com/media/sounds/discord-notification.mp3" },

{
  letter: "E",
  keyCode: 69,
  id: "Windows-XP",
  src: "https://www.myinstants.com/media/sounds/erro.mp3" },

{
  letter: "A",
  keyCode: 65,
  id: "Anime-Wow",
  src:
  "https://www.myinstants.com/media/sounds/anime-wow-sound-effect_Q6Q4ech.mp3" },

{
  letter: "S",
  keyCode: 83,
  id: "Bruh",
  src: "https://www.myinstants.com/media/sounds/movie_1.mp3" },

{
  letter: "D",
  keyCode: 68,
  id: "Metal-Gear-Solid",
  src: "https://www.myinstants.com/media/sounds/tindeck_1.mp3" },

{
  letter: "Z",
  keyCode: 90,
  id: "Sans",
  src: "https://www.myinstants.com/media/sounds/voice_sans.mp3" },

{
  letter: "X",
  keyCode: 88,
  id: "Minecraft-Oof",
  src:
  "https://www.myinstants.com/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3" },

{
  letter: "C",
  keyCode: 67,
  id: "Hjonk",
  src: "https://www.myinstants.com/media/sounds/honk-sound.mp3" }];



class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.play = this.play.bind(this);
  }

  play() {
    this.props.setDisplay(this.props.id);
    let audio = document.getElementById(this.props.letter);
    audio.currentTime = 0;
    audio.play();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.play();
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("button", { className: "drum-pad", id: this.props.id, onClick: this.play },
      this.props.letter, /*#__PURE__*/
      React.createElement("audio", {
        src: this.props.src,
        className: "clip",
        id: this.props.letter })));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: " " };

    this.setDisplay = this.setDisplay.bind(this);
  }

  setDisplay(str) {
    this.setState({
      display: str });

  }

  render() {
    const pads = drumPads.map(obj => {
      return /*#__PURE__*/(
        React.createElement(DrumPad, {
          letter: obj.letter,
          id: obj.id,
          src: obj.src,
          setDisplay: this.setDisplay,
          keyCode: obj.keyCode }));


    });
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("h1", { id: "header-text" }, "Drum Machine App"), /*#__PURE__*/
      React.createElement("div", { id: "drum-machine" }, pads), /*#__PURE__*/
      React.createElement("h1", { id: "current-text" }, this.state.display))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));