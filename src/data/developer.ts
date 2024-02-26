'use client'

const developer: Developer = {
  profile: {
    name: 'René Durazo',
    tagline: 'Software Developer',
  },
  contact: {
    email: 'hello@renedurazo.com',
    phone: '+52 (662) 224-65-13',
    website: [{
      name: 'renedurazo.com',
      url: 'https://renedurazo.com',
    },
    {
      name: 'renedurazo.dev',
      url: 'https://renedurazo.dev',
    }],
    linkedin: 'renedurazo',
    github: 'raiot',
    twitter: 'rene_du',
  },
  education: [{
    degree: 'Bachelor of Science in Computer Science',
    school: 'Instituto Tecnológico de Hermosillo',
    time: '2007-2011',
  }],
  languages: [{
    name: 'Spanish',
    level: 'Native',
  },
  {
    name: 'English',
    level: 'Professional',
  },
  ],
  interests: [
    'Horror Movies',
    'Videogames',
    'Cooking',
    'Videogames',
    'Creating stuff',
  ],
}

export default developer
