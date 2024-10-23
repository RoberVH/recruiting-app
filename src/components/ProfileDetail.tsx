import React from 'react';
import { Profile } from '../types';
import { format } from 'date-fns';
import { 
  X, MapPin, Mail, Phone, Award, Link, Calendar,
  Building, CheckCircle, XCircle, MessageSquare 
} from 'lucide-react';

interface ProfileDetailProps {
  profile: Profile;
  onClose: () => void;
}

export function ProfileDetail({ profile, onClose }: ProfileDetailProps) {
  const handleContact = () => {
    // Implement contact functionality
    console.log('Contacting:', profile.name);
  };

  const handleVerify = (certId: string) => {
    // Implement verification functionality
    console.log('Verifying certification:', certId);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{profile.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Header Section */}
          <div className="flex items-start space-x-6">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{profile.title}</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{profile.address}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{profile.phone}</span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleContact}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Candidate
                </button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Professional Summary</h4>
            <p className="text-gray-700 dark:text-gray-300">{profile.summary}</p>
          </div>

          {/* Certifications Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Certifications</h4>
            <div className="space-y-4">
              {profile.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h5>
                      <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {format(new Date(cert.date), 'MMMM yyyy')}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <Link className="h-5 w-5" />
                      </a>
                      <button
                        onClick={() => handleVerify(cert.id)}
                        className={`p-1 rounded ${
                          cert.verified
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
                        }`}
                      >
                        {cert.verified ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <XCircle className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Work Experience</h4>
            <div className="space-y-6">
              {profile.experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    <h5 className="font-semibold text-gray-900 dark:text-white">{exp.company}</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.position}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(exp.startDate), 'MMM yyyy')} -{' '}
                    {exp.endDate
                      ? format(new Date(exp.endDate), 'MMM yyyy')
                      : 'Present'}
                  </p>
                  
                  <div className="mt-3 space-y-2">
                    <h6 className="font-medium text-gray-900 dark:text-white">Key Projects:</h6>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {exp.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 space-y-2">
                    <h6 className="font-medium text-gray-900 dark:text-white">Achievements:</h6>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}