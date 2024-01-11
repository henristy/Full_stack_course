
import './App.css';
import ButtonComponent from './components/button.jsx';
import ImageComponent from './components/imgClass.jsx';
//import SearchBar from './components/SearchBar.jsx';
import TableComponent from './components/table.jsx';

let photos;

const promise = await fetch('https://api.pexels.com/v1/search/?page=1&per_page=8&query=yoghurt', {method: 'GET', headers: {Authorization: 'xGYIr6sRPrS480Ubv0q9cAilNvBmvKdFdNTiBccBj0ydK1blcAYiCDme'}}).then(response=> response.json());
photos = await promise.photos;


function App() {
  return (
    // // <div className="App">
    // //   <header className="App-header">
    // //     <img src={logo} className="App-logo" alt="logo" />
    // //     <p>
    // //       Edit <code>src/App.js</code> and save to reload.
    // //     </p>
    // //     <a
    // //       className="App-link"
    // //       href="https://reactjs.org"
    // //       target="_blank"
    // //       rel="noopener noreferrer"
    // //     >
    // //       Learn React
    // //     </a>
    // //   </header>
    // // </div>
    <div className="App">
      <div>
        <ImageComponent imgSrc='https://images.pexels.com/photos/10224729/pexels-photo-10224729.jpeg?auto=compress&cs=tinysrgb&w=600' imgDesc='Just nothing bro image' />
      </div>
      <ButtonComponent btnName="Say hi Anyway. maybe search something..."/>
      {/* <SearchBar /> */}
      <TableComponent list={photos} />
    </div>

  );
}

export default App;
