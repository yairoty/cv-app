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
    <div className="p-6 rounded-lg max-w-sm whitespace-pre-line">
      <h3 className="text-2xl font-bold mb-2">{bio.name}</h3>
      <div className="text-sm text-gray-700 mb-8 flex flex-wrap gap-2">
        {bio.roles.map((role, idx) => (
          <Tag text={role} key={idx} variant="white" />
        ))}
      </div>
      <Text text={bio.description} />

      <BioLink
        text={bio.email}
        link={`mailto:${bio.email}`}
        icon={<FaEnvelope className="text-red-500 mr-3" size={20} />}
      />
      <BioText
        text={bio.phone}
        icon={<FaPhoneAlt className="text-green-500 mr-3" size={20} />}
      />
      <BioText
        text={bio.whatsapp}
        icon={<FaWhatsapp className="text-green-500 mr-3" size={20} />}
      />
      <BioLink
        link={bio.github}
        icon={<FaGithub className="text-gray-900 mr-3" size={20} />}
      />

      <BioLink
        link={bio.linkedin}
        icon={<FaLinkedin className="text-gray-900 mr-3" size={20} />}
      />

      <div className="flex items-start flex-col">
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
  );
};

export default Bio;
