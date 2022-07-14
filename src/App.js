import logo from './logo.svg';
import './App.css';
import Links from './components/Links';



function App() {

  let dataSet1 = [{type: "line", source: {x: 0, y:0}, target: {x:100, y:100}}, { type: "line", source: {x: 0, y:100}, target: {x:300, y:0}}, {type: "line", source: {x: 250, y:0}, target: {x:500, y:100}},{type: "polygon", source: {x: 150, x1: 180, y:0, y1: 0}, target: {x:400, x1: 440, y:100, y1: 100}}, {type: "polygon", source: {x:400, x1: 440,y:0, y1: 0}, target: {x: 90, x1: 160,  y:100, y1: 100}}];
  let dataSet2 = [{type: "line", source: {x: 0, y:0}, target: {x:100, y:100}}, { type: "line", source: {x: 0, y:100}, target: {x:300, y:0}}, {type: "line", source: {x: 250, y:0}, target: {x:500, y:100}},{type: "line", source: {x: 150, y:0}, target: {x:400, y:100}}, {type: "line", source: {x:400, y:0}, target: {x: 90,  y:100}}];
  let dataSet3 = [{type: "polygon", source: {x: 0,x1: 0,y1:0, y:0}, target: {x:100,x1: 200, y1: 100, y:100}}, { type: "polygon", source: {x: 0,x1:200, y1:0 , y:0}, target: {x:300, x1:900, y:0, y1:0}}, {type: "polygon", source: {x: 250,x1:300, y1:0, y:0}, target: {x:500,x1:750,y1:100, y:100}},{type: "polygon", source: {x: 150, x1: 180, y:0, y1: 0}, target: {x:400, x1: 440, y:100, y1: 100}}, {type: "polygon", source: {x:400, x1: 440,y:0, y1: 0}, target: {x: 90, x1: 160,  y:100, y1: 100}}]
  return (
    <div className="App">
      <Links arrayCoordinates={dataSet2} />
      <Links arrayCoordinates={dataSet3} />
      <Links arrayCoordinates={dataSet1} />
   </div>
  );
}

export default App;
