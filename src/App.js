import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';

const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:500
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-ID' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

  return (
    <>
        <div className="container">
            <h2>Speech to Text Converter & Text to Speech Converter</h2>
            <br/>
            <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                {transcript}
            </div>

            <div className="btn-style">

                <button onClick={setCopied}>
                    {isCopied ? 'Copied!' : 'Copy to clipboard'}
                </button>
                <button onClick={startListening}>Start Listening</button>
                <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

            </div>

        </div>

    </>
  );
}

export default App;
