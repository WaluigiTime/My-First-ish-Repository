import "./styles.css";

export default function App() {
  const omari = "Omari";
  return (
    <div className="App">
      <div>
        <h1>hey what's up gamers</h1>
        <h2>Year: 2021 High School: P-Tech</h2>
        <h3>{omari}</h3>
      </div>

      <div className="About Me">
        hi my name is omari this is my about page
        <img
          src="https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_brw/public/field/image/2021/07/nintendo-switch-oled-model-with-tv.jpg"
          alt="nintendo"
        />
      </div>
    </div>
  );
}
