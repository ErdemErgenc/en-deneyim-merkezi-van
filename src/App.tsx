/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceAreasSection } from './components/ExperienceAreasSection';
import { GallerySection } from './components/GallerySection';
import { EventsWhyInstagramSection } from './components/EventsWhyInstagramSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { ImageLightboxModal } from './components/ImageLightboxModal';

export default function App() {
  const [selectedProgramInquiry, setSelectedProgramInquiry] = useState<string>('');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    description: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    description: '',
  });

  const handleNavigate = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleOpenImageModal = useCallback(
    (imageUrl: string, title: string, description: string) => {
      setLightboxState({
        isOpen: true,
        imageUrl,
        title,
        description,
      });
    },
    []
  );

  const handleCloseImageModal = useCallback(() => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const handleSelectPackageForContact = useCallback(
    (programName: string) => {
      setSelectedProgramInquiry(programName);
      handleNavigate('iletisim');
    },
    [handleNavigate]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141413]">
      <Navbar onNavigate={handleNavigate} />

      <main className="flex-1">
        <HeroSection
          onNavigate={handleNavigate}
          onOpenImageModal={handleOpenImageModal}
        />

        <AboutSection
          onOpenImageModal={handleOpenImageModal}
          onNavigate={handleNavigate}
        />

        <ExperienceAreasSection
          onSelectPackageForContact={handleSelectPackageForContact}
        />

        <GallerySection onOpenImageModal={handleOpenImageModal} />

        <EventsWhyInstagramSection
          onNavigate={handleNavigate}
          onOpenImageModal={handleOpenImageModal}
        />

        <ContactFooterSection
          selectedProgramInquiry={selectedProgramInquiry}
          onNavigate={handleNavigate}
        />
      </main>

      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        description={lightboxState.description}
        onClose={handleCloseImageModal}
      />
    </div>
  );
}
