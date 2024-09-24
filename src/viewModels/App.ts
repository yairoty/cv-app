// import { useEnv } from '../hooks';
import { BioModel, TimelineModel } from '../models';
import { getEnv } from '../utils';

export class ViewModel {
  getBio(): BioModel {
    const { userFullName, email, phone, whatsapp, linkedin } = getEnv();
    return {
      name: userFullName,
      roles: ['Tech lead', 'Full stack developer', 'Remote contracts'],
      email: email,
      github: 'https://github.com/yairoty',
      linkedin: linkedin,
      whatsapp: '+972 546543201',
      phone: '+351 918882646',
      education: [
        'B.S psychology, BGU. 2011',
        'MCPD C# .NET 3.0, High-Tech Collage. 2012',
        'JAVA Developer SAPIENS internal course. 2013',
      ],
      description: `I am an experienced Full Stack Web Developer with over 12 years of experience.<br/>
        As a freelance working in long term contracts, I help startups grow and achieve their goals.<br/>
        My background consists of various domains such as cyber security solutions, blockchain solution, leading and training teams aimed to bring the companies dreams and ideas into reality.<br/>
        I consider myself an autodidact as well as a true team player, fast learner with curiosity and passion to develop and learn new things.`,
    };
  }

  getTimelineData(): TimelineModel[] {
    return [
      {
        title: 'Tech-lead | Fullstack developer at Cyolo, Remote',
        startDate: new Date(2021, 1).getTime(),
        endDate: Date.now(),
        description:
          'Cyolo is a cyber security startup developing zero-trust solution for organizations. Joined as the 15th employee. (https://cyolo.io)',
        tech: [
          'Golang',
          'SQL',
          'Ladger DB',
          'NodeJS',
          'ReactJS',
          'ES6',
          'Mobx',
          'Typescript',
          'Monorepo',
          'MVVM',
          'Docker',
          'Inline product',
          'Distributed system',
        ],
        accomplishments: [
          'Conducting technical lectures, training, and technical onboarding for employees',
          'Working closely with the product team to define features based on customer requests',
          'Conducting interviews and technical assessments for candidates',
          'Implemented web-socket infrastructure',
          'Implemented integration with SSO solutions',
          'Implemented an email alert solution for system events for customers, with the ability to configure the content and template',
          'Developed main table view with query builder E2E solution',
          'Migrated the Monorepo projects to React 18V while supporting legacy customers',
          'Migrated the Monorepo projects styling to css-in-js solution (JSS)',
        ],
      },
      {
        title: 'Fullstack developer at Cycognito, TLV',
        startDate: new Date(2020, 1).getTime(),
        endDate: new Date(2021, 1).getTime(),
        description:
          'Cycognito is a cyber security startup developing red team simulation on organizations.(https://www.cycognito.com/)',
        tech: [
          'Clojure',
          'Reagent',
          'ReactJS',
          'Graphql',
          'RabbitMQ',
          'MongoDb',
          'AWS',
          'Kubernetes',
          'Functional system',
        ],
        accomplishments: [
          'Lead the FE guideline and standard',
          'Developed a fully functional E2E solution',
          'Developed customization infrastructure for white-labeling the entire webapp',
        ],
      },
      {
        title: 'Fullstack developer at Bancor, Ramat-Gan',
        startDate: new Date(2018, 6).getTime(),
        endDate: new Date(2020, 1).getTime(),
        description:
          'Bancor is a cryptocurrency startup developing liquidity solution on multiple blockchains. (https://about.bancor.network/)',
        tech: [
          'Blockchain',
          'NodeJS',
          'Micro services',
          'Typescript',
          'RabbitMQ',
          'MongoDb',
          'ES6',
          'React',
          'Redux',
          'GCP',
          'Kubernetes',
          'Docker',
          'MVC',
          'Distributed system',
          'Inline product',
        ],
        accomplishments: [
          'Implemented pubsub infrastructure to communicate with parallel application apps. This enables the product to use embedded app dedicated for company partners as well as in internal use',
          'Implemented localstorage Redux store support',
          'Implemented non-url based React wizard',
          'Implemented feature-flag support with whitelist abilities',
          'Implemented non-url react wizard, Feature flag',
          'Implemented event based scheduler engine',
          'Moved the server team to Typescript. This includes conducting proof of concept, training and guiding the team through',
        ],
      },
      {
        title:
          'Fullstack developer at Dome9 Security (acquired by checkpoint), TLV',
        startDate: new Date(2015, 1).getTime(),
        endDate: new Date(2018, 1).getTime(),
        description:
          'Dome9 is a cyber security startup which developed cloud security for enterprises. Joined as the 7th employee (https://dome9.com)',
        tech: [
          'C#',
          '.Net 4.6',
          'NodeJS',
          'MongoDb',
          'AngularJS',
          'ES6',
          'Stylus',
          'Flexbox',
          'AWS',
          'GCP',
          'Inline product',
        ],
        accomplishments: [],
        // accomplishments: [
        //   'Enhanced CI-CD pipeline using grunt build scripts',
        //   'Developed innovating UI component including slide-in response feedback (asynchronous based). slide-in wizards.',
        //   'Developed Main App worker service',
        //   'Adding fully automation environment initializer to automation API tests. This includes creation of AWS environment using SDK with NodeJS project.',
        // ],
      },
      {
        title: 'Fullstack developer at Sapiens, Hulon',
        startDate: new Date(2012, 1).getTime(),
        endDate: new Date(2015, 1).getTime(),
        description:
          'Sapiens developing software solutions for the insurance industry. (http://www.sapiens.com)',
        tech: [
          'Java',
          'Java Spring',
          'Hibernate',
          'NodeJS',
          'AngularJS',
          'ES6',
        ],
        accomplishments: [],
      },
    ];
  }

  getDisplayDateRange(
    start: TimelineModel['startDate'],
    end: TimelineModel['endDate'],
  ): string {
    if (!Boolean(start) || !Boolean(end)) {
      return '';
    }

    const startStr: string = new Date(start).getFullYear().toString();
    const endDate = new Date(end);
    let endStr: string = endDate.getFullYear().toString();

    if (endDate.getFullYear() === new Date().getFullYear()) {
      endStr = 'Current';
    }
    return `${startStr} - ${endStr}`;
  }
}
