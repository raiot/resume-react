'use client'

const resume: Resume = {
  summary: 'I\'m a Senior Software Developer With 10+ years of experience, I have worked across multiple product types, I love learning and trying new things and I can adapt to any technology needed. I like to take part in decision making and meaninful conversations. I like to **get things done** to the best of my extent and expetise.',
  experiences: [
    {
      position: 'Senior Software Developer, (Frontend)',
      company: 'Wizeline',
      location: 'Remote',
      time: '2022 - current',
      description: `As a Senior Software Developer for Wizeline I was involved in planning, artchitecture, deployment and development of a new platform.
      **Highlights** include:\
      - Leading the development of a new platform
      - Working with a team of 5+ developers
      - Implementing a new CI/CD pipeline with Gitub Actions
      - Implementing a new development strategy
      - Implementing a new communication strategy.`,
      technologies: [
        'React',
        'TypeScript',
        'TailwindCSS',
        'Node.js',
        'Next JS',
        'Github Actions',
        'React Query',
        'Jira'
      ],
    },
    {
      position: 'Senior Software Developer, (Frontend)',
      company: 'Skupos',
      location: 'Remote',
      time: '2021 - 2022',
      description: 'As a Senior Software Developer for Skupos, I was involved in planning and estimation for new features, I worked closely with Product and Marketing to setup campaing goals and stadistics, set up a few goals in Google Analytics, approved and reviewed PRs and releases in AWS Pipelines. **Highlights** include: - Leading a new internal design system - Working with Product and Marketing to define goals and setup external tools - Implementing a new CI/CD pipeline with Github Actions for the internal design system - Implementing Cypress from scratch from our webapp with 80% coverage.',
      technologies: [
        'React',
        'Material UI',
        'TypeScript',
        'Node JS',
        'GraphQL',
        'Relay',
        'AWS Pipeline',
        'Netlify',
        'Jira',
        'Github Actions',
        'Rollup',
        'Jest',
        'Jira',
        'React Testing Library',
        'TailwindCSS',
        'Cypress'
      ],
    },
    {
      position: 'Senior Software Developer (Frontend)',
      company: 'Mindstrong',
      location: 'Remote',
      time: '2019 - 2021',
      description: 'As a Senior Software Developer for Mindstrong, I was involved in planning and estimation for new features, I worked closely with Product to setup campaing goals and stadistics, set up copies of the site for A/B testing, approved and reviewed PRs and releases in AWS Pipelines. **Highlights** include: - Set up Google Optimize with several copies for A/B testing - Worked with Product to define goals, funnels and other metrics using Google Analytis - Lead the frontend implementation of a new platform to discover potential leads - Increased Cypress automation test coverage by 20%.',
      technologies: [
        'TypeScript',
        'React',
        'Redux',
        'Redux Toolkin',
        'Cypress',
        'Auth0',
        'Jest',
        'React Testing Library',
        'Node JS',
        'Google Analytics',
        'Google Optimize',
        'Jira'
      ],
    },
    {
      position: 'Senior Software Developer (Frontend)',
      company: 'Nextiva',
      location: 'Guadalajara, México',
      time: '2018 - 2019',
      description: 'As a Senior Software Developer for Nextiva, I was involved in improving the security and performance of the app. **Highlights** include: - Lead initiaive to improve deploy performance, decreasing 60% build time - Worked with Backend to set up session using JWToken  - Add test 70% of test coverage. - Setup nginx to avoid COORS issues in internal apps.',
      technologies: [
        'TypeScript',
        'React',
        'Redux',
        'JWToken',
        'Jest',
        'React Testing Library',
        'REST',
        'Nginx',
        'Jenkins',
        'Jira'
      ],
    },
    {
      position: 'Software Developer (Frontend)',
      company: 'HomeAway (Vrbo/Expedia)',
      location: 'Guadalajara, México',
      time: '2016 - 2018',
      description: 'As a Senior Software Developer for HomrAway, I was involved in migrating the onboarding flow and the property managment flow from Java/Spring/JSP to React/Typescript/Node. **Highlights** include: - Debugging crucial parts of the property state machine.',
      technologies: [
        'TypeScript',
        'React',
        'Redux',
        'NodeJS',
        'HapiJS',
        'Enzyme',
        'Java',
        'GraphQL',
        'Spring',
        'Jira'
      ],
    },
  ],
  projects: {
    header: 'Open Source Collaborations',
    items: [
      {
        name: 'resume-react',
        url: 'https://github.com/tepachelabs/resume-react',
        description: 'A simple resume for developers in react',
      },
      {
        name: 'SongBox.webapp',
        url: 'https://github.com/tepachelabs/songbox.webapp',
        description: 'Listeng to your music collection from the cloud (Dropbox)',
      }
    ],
  },
  skills: [
    {
      name: 'React',
      value: 100,
    },
    {
      name: 'JavaScript',
      value: 100,
    },
    {
      name: 'CSS',
      value: 80,
    },
    {
      name: 'TailwindCSS',
      value: 90,
    },
    {
      name: 'NextJS',
      value: 90,
    },
  ],
}

export default resume
