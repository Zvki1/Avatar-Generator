import { useState } from 'react';
import NameInput from './components/nameInput';
import Avatar from 'react-string-avatar';
import './App.css';
import domtoimage from 'dom-to-image';

function App() {
  const [name, setName] = useState('Person');

  const handleChangeName = (newName) => {
    setName(newName);
  };

  const downloadAvatar = (dataUrl) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'avatar.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAvatar = () => {
    const avatarContainer = document.getElementById('avatar-container');

    domtoimage.toPng(avatarContainer)
      .then((dataUrl) => downloadAvatar(dataUrl))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="h-screen w-screen bg-gray-800">
      <h1 className="text-white text-4xl font-semibold text-center pt-8">Avatar Generator</h1>
      <NameInput onChangeName={handleChangeName} />
      <div id="avatar-container" className="w-full flex justify-center pt-12">
        <Avatar
          string={name}
          autoColor={true}
          pixelated={false}
          pictureFormat="png"
          width={256}
          cornerRadius={10}
          pictureResolution={1024}
        />
      </div>
      <div className="flex justify-center pt-4">
        <button onClick={handleDownloadAvatar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Avatar
        </button>
      </div>
    </div>
  );
}

export default App;
