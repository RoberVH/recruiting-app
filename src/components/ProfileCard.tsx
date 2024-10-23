import React from 'react';
import { Profile } from '../types';
import { MapPin, Mail, Phone, Award, Briefcase } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  onClick: (id: string) => void;
}

export function ProfileCard({ profile, onClick }: ProfileCardProps) {
  return (
    <div 
      onClick={() => onClick(profile.id)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{profile.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm ${
              profile.available 
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}>
              {profile.available ? 'Available' : 'Unavailable'}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{profile.title}</p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{profile.address}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Award className="h-4 w-4 mr-1" />
                <span className="text-sm">{profile.certifications.length} certifications</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Briefcase className="h-4 w-4 mr-1" />
                <span className="text-sm">{profile.experience.length} experiences</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
            {profile.skills.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                +{profile.skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}