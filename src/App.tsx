import './App.css';
import Gallery from './components/Gallery';

// temp images to move data through react tree
const images = [
  {
    url: 'image 1',
    caption: 'caption 1',
  },
  {
    url: 'image 2',
    caption: 'caption 2'
  },
  {
    url: 'image 3',
    caption: 'caption 3'
  }
];

function App() {
  return (
    <div className="App">
      <Gallery images={images} />
    </div>
  );
}

export default App;
