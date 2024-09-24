import React, { useMemo } from 'react';
import { ViewModel } from './viewModels/App'; // TODO move to context-API and provide from root
import { Bio, Timeline } from './views';
import { Seperator } from './ui-component';

function App() {
  const viewModel = new ViewModel();

  const [bioData, timelineData] = useMemo(() => {
    return [viewModel.getBio(), viewModel.getTimelineData()];
  }, []);

  return (
    <div className="flex">
      <div className="flex basis-2/12 bg-gray-100 justify-center p-6">
        <Bio bio={bioData} />
      </div>

      <Seperator />

      <div className="flex basis-10/12 bg-gray-100 flex-col p-6 overflow-y-auto pt-8">
        <Timeline timelineData={timelineData} />
      </div>
    </div>
  );
}

export default App;
