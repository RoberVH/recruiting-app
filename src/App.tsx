import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ProfileCard } from './components/ProfileCard';
import { ProfileDetail } from './components/ProfileDetail';
import { ThemeToggle } from './components/ThemeToggle';
import { mockProfiles } from './data/mockData';
import { Profile } from './types';
import { Users } from 'lucide-react';

function App() {
  const [profiles, setProfiles] = useState<Profile[]>(mockProfiles);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  
  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = mockProfiles.filter((profile) => {
      return (
        profile.name.toLowerCase().includes(lowercaseQuery) ||
        profile.title.toLowerCase().includes(lowercaseQuery) ||
        profile.skills.some(skill => 
          skill.toLowerCase().includes(lowercaseQuery)
        ) ||
        profile.certifications.some(cert =>
          cert.name.toLowerCase().includes(lowercaseQuery)
        )
      );
    });
    setProfiles(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">TalentHub</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="flex justify-center mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {profiles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No profiles found matching your search criteria.</p>
            </div>
          ) : (
            profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onClick={() => setSelectedProfile(profile)}
              />
            ))
          )}
        </div>
      </main>

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <ProfileDetail
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

export default App;