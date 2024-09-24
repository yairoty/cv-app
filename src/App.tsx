import React, { useMemo } from 'react';
import { ViewModel } from './viewModels/App'; // TODO move to context-API and provide from root
import { Bio, Timeline } from './views';

function App() {
  const viewModel = new ViewModel();

  const [bioData, timelineData] = useMemo(() => {
    return [viewModel.getBio(), viewModel.getTimelineData()];
  }, []);

  return (
    <div className="bg-gray-100 px-4 py-2 flex justify-center content-center">
      <div className="flex flex-col justify-center content-center">
        <div className="flex ">
          <Bio bio={bioData} />
        </div>

        {/* <Seperator /> */}

        <div className="flex flex-col overflow-y-auto pt-4">
          <Timeline timelineData={timelineData} />
        </div>
      </div>
    </div>
  );
}

export default App;
