import ContainerQ1 from './container/Section_1/Q1';
import ContainerQ2 from './container/Section_1/Q2';
import ContainerQ3 from './container/Section_1/Q3';
import ContainerQ4 from './container/Section_1/Q4';

import ContainerQ1_S2 from './container/Section_2/Q1';
import ContainerQ2_S2 from './container/Section_2/Q2';
import ContainerQ2_S3 from './container/Section_2/Q3';

function App() {
  return (
    <div className="App">
      <h1>Section 1</h1>
      <ContainerQ1 />
      <ContainerQ2 />
      <ContainerQ3 />
      <ContainerQ4 />
      <div className='pb-20'>------------------------</div>
      <h1>Section 2</h1>
      <ContainerQ1_S2 />
      <ContainerQ2_S2 />
      <ContainerQ2_S3 />
    </div>
  );
}

export default App;
