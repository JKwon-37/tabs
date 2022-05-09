import './App.css';
// import MyComponent from './components/example';
import Tabs from './components/tabs';

// const allTabs = [
//   {
//     label: "Tab 1", content: "This is the first tab created."
//   },
//   {
//     label: "Tab 2", content: "Currently catching up on One Piece."
//   },
//   {
//     label: "Tab 3", content: "Spy x Family is a great anime."
//   }
// ]
function App() {
  return (
    <div className="App">
      <Tabs currentTab={[
        {
          label: "Tab 1", content: "This is the first tab created."
        },
        {
          label: "Tab 2", content: "Currently catching up on One Piece."
        },
        {
          label: "Tab 3", content: "Spy x Family is a great anime."
        }
      ]}/>
      {/* <MyComponent/> */}
    </div>
  );
}

export default App;
