import './App.css';
import ContainerExamples from './examples/ContainerExamples'
import FlexExamples from './examples/FlexExamples'
import CardExamples from './examples/CardExamples'
import ButtonExamples from './examples/ButtonExamples'


function App() {
  return (
    <div className="App">
      <ContainerExamples />
      <FlexExamples />
      <CardExamples />
      <ButtonExamples />
    </div>
  );
}

export default App;
