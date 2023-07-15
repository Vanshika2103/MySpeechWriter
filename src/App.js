// import "./styles.css";
import "./styles.css";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

export default function App() {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    {}
  );

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <h1>Speech to Text Converter</h1>

      <div className="main-content">{transcript}</div>

      <div className="btn-style">
        <button className="primary-btn">Copy</button>
        <button className="primary-btn" onClick={startListening}>
          Start Listening
        </button>

        <button
          className="primary-btn"
          onClick={SpeechRecognition.stopListening}
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
}
