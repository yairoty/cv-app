import React from 'react';
import { BioModel } from '../models/Bio';
import { BioLink, BioText, Tag, Text } from '../ui-component';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaUniversity,
  FaWhatsapp,
} from 'react-icons/fa';

interface Props {
  bio: BioModel;
}

const Bio: React.FC<Props> = ({ bio }) => {
  return (
    <div className="flex flex-col p-6 rounded-lg whitespace-pre-line">
      <h3 className="text-2xl font-bold mb-2">{bio.name}</h3>
      <div className="flex text-sm text-gray-700 mb-4 flex-wrap gap-2">
        {bio.roles.map((role, idx) => (
          <Tag text={role} key={idx} variant="white" />
        ))}
      </div>
      <Text text={bio.description} className="pb-4" />
      <div className="flex flex-wrap gap-1 max-w-4xl">
        <BioLink
          className="mr-8"
          text={bio.email}
          link={`mailto:${bio.email}`}
          icon={<FaEnvelope className="text-red-500 mr-2" size={20} />}
        />
        <BioText
          className="mr-8"
          text={bio.phone}
          icon={<FaPhoneAlt className="text-green-500 mr-2" size={20} />}
        />
        <BioText
          className="mr-8"
          text={bio.whatsapp}
          icon={<FaWhatsapp className="text-green-500 mr-2" size={20} />}
        />
        <BioLink
          className="mr-8"
          link={bio.github}
          icon={<FaGithub className="text-gray-900 mr-2" size={20} />}
        />

        <BioLink
          className="mr-8"
          link={bio.linkedin}
          icon={<FaLinkedin className="text-gray-900 mr-2" size={20} />}
        />

        <div className="flex items-start gap-8">
          {bio.education.map((educationItem, idx) => (
            <BioText
              key={idx}
              text={educationItem}
              icon={
                <FaUniversity
                  className="text-gray-900 mr-3 flex-shrink-0"
                  size={20}
                />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
