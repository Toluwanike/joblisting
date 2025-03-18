
export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  description: string;
  shortDescription: string;
  requirements: string[];
  benefits: string[];
  postedAt: string;
  featured?: boolean;
}

export const jobsData: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'Designify',
    companyLogo: '/placeholder.svg',
    location: 'San Francisco, CA (Remote)',
    salary: '$120,000 - $160,000',
    type: 'Full-time',
    shortDescription: 'Lead the development of our design system and improve our web application performance.',
    description: 'We are looking for a Senior Frontend Engineer to join our growing team. You will be responsible for developing and maintaining our web applications, with a focus on creating elegant and efficient user interfaces. You will work closely with our design team to implement new features and improve existing ones.',
    requirements: [
      '5+ years of experience with modern JavaScript frameworks (React, Vue, Angular)',
      'Strong knowledge of HTML, CSS, and responsive design',
      'Experience with state management libraries (Redux, MobX, etc.)',
      'Familiarity with modern build tools and workflows',
      'Excellent problem-solving skills and attention to detail'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible working hours and remote work options',
      'Annual learning and development budget',
      'Regular team events and retreats'
    ],
    postedAt: '2023-09-15',
    featured: true
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'Minimalist',
    companyLogo: '/placeholder.svg',
    location: 'New York, NY',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    shortDescription: 'Create beautiful, functional interfaces for our flagship product.',
    description: 'Minimalist is seeking a talented Product Designer to join our design team. In this role, you will design intuitive and visually appealing user interfaces for our digital products. You will collaborate with product managers and engineers to create designs that balance business needs with user experience.',
    requirements: [
      '3+ years of experience in product or UI/UX design',
      'Proficiency in design tools such as Figma, Sketch, or Adobe XD',
      'Strong portfolio showcasing your design process and aesthetic',
      'Understanding of user-centered design principles',
      'Excellent communication and collaboration skills'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Flexible work environment',
      'Professional development opportunities',
      'Modern office in central New York'
    ],
    postedAt: '2023-09-18'
  },
  {
    id: '3',
    title: 'iOS Developer',
    company: 'AppCraft',
    companyLogo: '/placeholder.svg',
    location: 'Remote',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    shortDescription: 'Build and maintain our iOS applications with a focus on performance and user experience.',
    description: 'AppCraft is looking for an experienced iOS Developer to join our mobile development team. You will be responsible for developing and maintaining our iOS applications, ensuring high performance and responsiveness. You will collaborate with cross-functional teams to define, design, and ship new features.',
    requirements: [
      '3+ years of experience developing iOS applications',
      'Proficiency in Swift and UIKit',
      'Experience with iOS frameworks such as Core Data, Core Animation',
      'Knowledge of RESTful APIs and integrating mobile apps with back-end services',
      'Understanding of the Apple Human Interface Guidelines'
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Remote-first company culture',
      'Flexible working hours',
      'Latest equipment and tools',
      'Professional development budget'
    ],
    postedAt: '2023-09-20',
    featured: true
  },
  {
    id: '4',
    title: 'Backend Engineer',
    company: 'DataFlow',
    companyLogo: '/placeholder.svg',
    location: 'Austin, TX (Hybrid)',
    salary: '$110,000 - $150,000',
    type: 'Full-time',
    shortDescription: 'Design and implement scalable backend services for our data processing platform.',
    description: 'DataFlow is seeking a talented Backend Engineer to help us build and scale our data processing platform. You will be responsible for designing, implementing, and maintaining our backend services. You will work closely with our frontend team to ensure seamless integration between all parts of our system.',
    requirements: [
      '4+ years of experience in backend development',
      'Proficiency in at least one server-side language (Python, Node.js, Go, etc.)',
      'Experience with database design and optimization',
      'Knowledge of cloud services (AWS, GCP, or Azure)',
      'Understanding of microservices architecture'
    ],
    benefits: [
      'Competitive compensation package',
      'Comprehensive health insurance',
      'Flexible working arrangements',
      'Regular team-building events',
      'Modern, collaborative workspace'
    ],
    postedAt: '2023-09-22'
  },
  {
    id: '5',
    title: 'UX Researcher',
    company: 'UserFirst',
    companyLogo: '/placeholder.svg',
    location: 'Boston, MA (Remote)',
    salary: '$85,000 - $110,000',
    type: 'Full-time',
    shortDescription: 'Conduct user research to inform product decisions and improve user experiences.',
    description: 'UserFirst is looking for a UX Researcher to join our growing team. In this role, you will plan and conduct user research studies to gather insights that inform our product design decisions. You will work closely with designers, product managers, and engineers to ensure our products meet user needs and expectations.',
    requirements: [
      '2+ years of experience in UX research',
      'Experience with various research methods (interviews, usability testing, surveys, etc.)',
      'Strong analytical and problem-solving skills',
      'Excellent communication and presentation skills',
      'Ability to translate research findings into actionable insights'
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Comprehensive healthcare benefits',
      'Professional development stipend',
      'Flexible PTO policy'
    ],
    postedAt: '2023-09-25'
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudNine',
    companyLogo: '/placeholder.svg',
    location: 'Seattle, WA',
    salary: '$120,000 - $160,000',
    type: 'Full-time',
    shortDescription: 'Build and maintain our cloud infrastructure and deployment pipelines.',
    description: 'CloudNine is seeking a DevOps Engineer to help us design, implement, and maintain our cloud infrastructure and deployment processes. You will be responsible for automating our software delivery pipeline, improving system reliability, and optimizing our infrastructure costs.',
    requirements: [
      '3+ years of experience in DevOps or Site Reliability Engineering',
      'Proficiency with cloud platforms (AWS, GCP, or Azure)',
      'Experience with containerization and orchestration (Docker, Kubernetes)',
      'Knowledge of infrastructure as code (Terraform, CloudFormation)',
      'Strong scripting skills (Bash, Python, etc.)'
    ],
    benefits: [
      'Top-tier salary and equity package',
      'Comprehensive health, dental, and vision coverage',
      'Flexible work arrangements',
      'Annual professional development budget',
      'Regular team events and activities'
    ],
    postedAt: '2023-09-28',
    featured: true
  },
  {
    id: '7',
    title: 'Content Strategist',
    company: 'WordCraft',
    companyLogo: '/placeholder.svg',
    location: 'Chicago, IL (Hybrid)',
    salary: '$80,000 - $100,000',
    type: 'Full-time',
    shortDescription: 'Develop and implement content strategies that align with our brand and business goals.',
    description: 'WordCraft is looking for a Content Strategist to help us develop and implement effective content strategies. You will be responsible for creating and managing content that engages our audience, strengthens our brand, and supports our business objectives. You will work with various teams to ensure content consistency across all channels.',
    requirements: [
      '3+ years of experience in content strategy or content marketing',
      'Strong writing and editing skills',
      'Experience with content management systems',
      'Understanding of SEO best practices',
      'Excellent project management and organizational skills'
    ],
    benefits: [
      'Competitive salary',
      'Hybrid work model',
      'Comprehensive benefits package',
      'Professional growth opportunities',
      'Collaborative and inclusive work environment'
    ],
    postedAt: '2023-10-01'
  },
  {
    id: '8',
    title: 'Data Scientist',
    company: 'Insightful',
    companyLogo: '/placeholder.svg',
    location: 'Remote',
    salary: '$110,000 - $140,000',
    type: 'Full-time',
    shortDescription: 'Analyze complex datasets to extract actionable insights for our clients.',
    description: 'Insightful is seeking a Data Scientist to join our analytics team. In this role, you will analyze complex datasets, build predictive models, and extract actionable insights that help our clients make data-driven decisions. You will collaborate with other data professionals and business stakeholders to understand requirements and communicate findings.',
    requirements: [
      '4+ years of experience in data science or related field',
      'Proficiency in Python and data analysis libraries (pandas, NumPy, etc.)',
      'Experience with machine learning frameworks (scikit-learn, TensorFlow, PyTorch)',
      'Strong knowledge of statistical analysis and modeling',
      'Excellent communication skills to present technical findings to non-technical audiences'
    ],
    benefits: [
      'Competitive compensation',
      'Remote-first work environment',
      'Comprehensive healthcare coverage',
      'Continuous learning opportunities',
      'Flexible working hours'
    ],
    postedAt: '2023-10-03'
  },
  {
    id: '9',
    title: 'Marketing Manager',
    company: 'GrowthHub',
    companyLogo: '/placeholder.svg',
    location: 'Miami, FL',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    shortDescription: 'Lead our marketing efforts to drive growth and brand awareness.',
    description: 'GrowthHub is looking for a Marketing Manager to lead our marketing initiatives. You will be responsible for developing and implementing marketing strategies to increase brand awareness, generate leads, and drive customer acquisition. You will work closely with our sales, product, and design teams to create effective marketing campaigns.',
    requirements: [
      '5+ years of experience in marketing, with at least 2 years in a management role',
      'Experience with digital marketing channels (social media, email, content, SEO)',
      'Strong analytical skills to measure and optimize marketing performance',
      'Excellent project management and organizational abilities',
      'Creative thinking and ability to develop innovative marketing approaches'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Comprehensive benefits package',
      'Hybrid work model with flexible hours',
      'Professional development opportunities',
      'Collaborative and dynamic work environment'
    ],
    postedAt: '2023-10-05'
  },
  {
    id: '10',
    title: 'QA Engineer',
    company: 'PerfectCode',
    companyLogo: '/placeholder.svg',
    location: 'Denver, CO (Hybrid)',
    salary: '$85,000 - $115,000',
    type: 'Full-time',
    shortDescription: 'Ensure the quality and reliability of our software through comprehensive testing.',
    description: 'PerfectCode is seeking a QA Engineer to join our quality assurance team. You will be responsible for designing and implementing tests, identifying defects, and ensuring the quality and reliability of our software products. You will work closely with developers and product managers throughout the development lifecycle.',
    requirements: [
      '3+ years of experience in software testing or quality assurance',
      'Experience with test automation frameworks and tools',
      'Knowledge of QA methodologies and best practices',
      'Strong analytical and problem-solving skills',
      'Attention to detail and ability to document issues clearly'
    ],
    benefits: [
      'Competitive salary',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional certification support',
      'Regular team events and activities'
    ],
    postedAt: '2023-10-08'
  },
  {
    id: '11',
    title: 'Customer Success Manager',
    company: 'ClientCare',
    companyLogo: '/placeholder.svg',
    location: 'Remote',
    salary: '$75,000 - $95,000',
    type: 'Full-time',
    shortDescription: 'Build and nurture client relationships to ensure long-term success and satisfaction.',
    description: 'ClientCare is looking for a Customer Success Manager to help our clients achieve their goals using our platform. You will be responsible for onboarding new clients, providing ongoing support, identifying growth opportunities, and ensuring customer satisfaction and retention. You will work closely with sales, product, and support teams to deliver an exceptional customer experience.',
    requirements: [
      '3+ years of experience in customer success, account management, or similar roles',
      'Strong interpersonal and relationship-building skills',
      'Experience with CRM systems and customer success tools',
      'Excellent communication and presentation abilities',
      'Problem-solving skills and proactive approach to addressing customer needs'
    ],
    benefits: [
      'Competitive salary with commission structure',
      'Comprehensive benefits package',
      'Remote work with flexible hours',
      'Professional development opportunities',
      'Positive and supportive company culture'
    ],
    postedAt: '2023-10-10'
  },
  {
    id: '12',
    title: 'Graphic Designer',
    company: 'VisualEdge',
    companyLogo: '/placeholder.svg',
    location: 'Portland, OR (Hybrid)',
    salary: '$70,000 - $90,000',
    type: 'Full-time',
    shortDescription: 'Create compelling visual assets for our marketing and product teams.',
    description: 'VisualEdge is seeking a talented Graphic Designer to join our creative team. You will be responsible for creating visual assets for our marketing campaigns, social media, website, and product interfaces. You will collaborate with marketers, product managers, and other designers to develop cohesive and engaging visual content that strengthens our brand identity.',
    requirements: [
      '3+ years of experience in graphic design',
      'Proficiency in design software (Adobe Creative Suite, Figma)',
      'Strong portfolio demonstrating your design skills and aesthetic',
      'Understanding of design principles, typography, and color theory',
      'Ability to work within brand guidelines while bringing fresh, creative ideas'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Hybrid work model with flexible schedule',
      'Creative work environment',
      'Professional development opportunities'
    ],
    postedAt: '2023-10-12'
  }
];
