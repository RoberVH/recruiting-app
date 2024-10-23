import { Profile } from '../types';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Senior Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    email: 'sarah.chen@example.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
    summary: 'Experienced full-stack developer with 8+ years specializing in React, Node.js, and cloud architecture.',
    available: true,
    certifications: [
      {
        id: 'cert1',
        name: 'AWS Solutions Architect Professional',
        issuer: 'Amazon Web Services',
        date: '2023-06-15',
        verificationUrl: 'https://aws.amazon.com/verify/cert1',
        verified: true
      },
      {
        id: 'cert2',
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        date: '2023-03-10',
        verificationUrl: 'https://cloud.google.com/verify/cert2',
        verified: true
      }
    ],
    experience: [
      {
        id: 'exp1',
        company: 'TechCorp Inc.',
        position: 'Senior Software Engineer',
        startDate: '2020-01',
        endDate: null,
        projects: [
          'Led team of 5 developers in rebuilding core payment processing system',
          'Implemented microservices architecture reducing system latency by 40%'
        ],
        achievements: [
          'Reduced deployment time by 60% through CI/CD optimization',
          'Mentored 3 junior developers to senior positions'
        ]
      }
    ],
    skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'Python', 'MongoDB']
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    title: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    email: 'marcus.r@example.com',
    phone: '+1 (555) 987-6543',
    address: 'Austin, TX',
    summary: 'DevOps engineer focused on automation, CI/CD, and cloud infrastructure optimization.',
    available: false,
    certifications: [
      {
        id: 'cert3',
        name: 'Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        date: '2023-08-20',
        verificationUrl: 'https://cncf.io/verify/cert3',
        verified: true
      }
    ],
    experience: [
      {
        id: 'exp2',
        company: 'CloudScale Solutions',
        position: 'Lead DevOps Engineer',
        startDate: '2019-06',
        endDate: null,
        projects: [
          'Implemented Kubernetes clusters across multiple cloud providers',
          'Developed automated disaster recovery system'
        ],
        achievements: [
          'Reduced infrastructure costs by 35%',
          'Achieved 99.99% uptime for critical systems'
        ]
      }
    ],
    skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure', 'Python']
  }
];