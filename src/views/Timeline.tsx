import React from 'react';
import { TimelineModel } from '../models/Timeline';
import { ViewModel } from '../viewModels/App'; // TODO move to context-API and provide from root
import { Tag } from '../ui-component';

interface Props {
  timelineData: TimelineModel[];
}

const Timeline: React.FC<Props> = ({ timelineData }) => {
  const vm = new ViewModel();
  return (
    <>
      {timelineData.map((card, index) => (
        <div className="mb-10 pl-10 pt-4 relative" key={index}>
          <div className="absolute -top-4 -left-8 flex gap-2">
            <div className="w-3 h-1 bg-gray-500 rounded-e-full mt-2" />
            <div className="text-sm font-semibold text-gray-500 ">
              {vm.getDisplayDateRange(card.startDate, card.endDate)}
            </div>
          </div>

          {/* Card Content */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="mb-4">{card.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold">Technologies:</h4>
              <div className="flex mt-1 flex-wrap gap-2">
                {card.tech.map((word, idx) => (
                  <Tag text={word} key={idx} />
                ))}
              </div>
            </div>
            {Boolean(card.accomplishments?.length) && (
              <div>
                <h4 className="font-semibold">Accomplishments:</h4>
                <ul className="list-disc pl-5 mt-2 grid grid-cols-2 gap-4">
                  {card.accomplishments?.map((item, idx) => (
                    <li className={'flex-1'} key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
