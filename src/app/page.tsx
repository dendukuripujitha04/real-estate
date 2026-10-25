'use client';

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '@/context/language-context';
import { TopBar } from '@/components/layout/top-bar';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MobileStickyBar } from '@/components/layout/mobile-sticky-bar';
import { SplashScreen } from '@/components/layout/splash-screen';

import { HeroSection } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { ProjectsSection } from '@/components/sections/projects';
import { GallerySection } from '@/components/sections/gallery';
import { VideoShowcaseSection } from '@/components/sections/video-showcase';
import { MaterialsSection } from '@/components/sections/materials';
import { WhyUsSection } from '@/components/sections/why-us';
import { ProcessSection } from '@/components/sections/process';
import { FaqSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { SS_GALLERY_ITEMS } from '@/constants';

import { FloatingActions } from '@/components/widgets/floating-actions';
import { AiAssistant } from '@/components/widgets/ai-assistant';

import { ConsultationModal } from '@/components/modals/consultation-modal';
import { ProjectModal } from '@/components/modals/project-modal';
import { LightboxModal } from '@/components/modals/lightbox-modal';
import { AdminModal } from '@/components/modals/admin-modal';

import { ProjectItem, GalleryItem } from '@/types';
import { fetchProjects, fetchGallery } from '@/services/api';

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'SS Global Royal Villa',
    category: 'residential',
    categoryLabel: 'Residential Villa',
    location: 'Poranki, Vijayawada',
    area: '4,200 Sq.Ft',
    year: '2024',
    status: 'Completed',
    image: '/images/residential.jpg',
    description:
      'Triplex luxury independent villa featuring double-height living spaces, cross-ventilation, terrace garden, and Teak wood finishes.',
    services: [
      'Architectural Planning',
      'Structural Engineering',
      'Civil Construction',
      'Turnkey Interiors',
    ],
    highlights: [
      '100% Vasthu Compliant',
      'Quality Brand Materials',
      'From Foundation to Finishing',
    ],
  },
  {
    id: 'proj-2',
    title: 'SS Global Commercial Arcade',
    category: 'commercial',
    categoryLabel: 'Commercial Complex',
    location: 'Ramavarappadu Ring Road, Vijayawada',
    area: '18,500 Sq.Ft',
    year: '2024',
    status: 'Ongoing (80%)',
    image: '/images/commercial.jpg',
    description:
      'Modern commercial complex with structural glass facade, retail showrooms, corporate office floors, and basement parking.',
    services: [
      'Structural Design',
      'Commercial Civil Construction',
      'Glass Facade Glazing',
      'Electrical & Plumbing Engineering',
    ],
    highlights: [
      'High Load Bearing Capacity',
      'Earthquake Resistant Framing',
      'Fire Safety Compliant',
    ],
  },
  {
    id: 'proj-3',
    title: 'SS Global Amaravati Residences',
    category: 'residential',
    categoryLabel: 'Residential Multi-Family',
    location: 'Tadepalli, Amaravati Capital Region',
    area: '7,800 Sq.Ft',
    year: '2023',
    status: 'Completed',
    image: '/images/hero-bg.jpg',
    description:
      'Contemporary residential homes designed with cantilevered decks, wooden finish louvers, and spacious family living areas.',
    services: [
      'Complete Architectural Design',
      'Structural Engineering',
      'Turnkey House Construction',
    ],
    highlights: [
      'Seismic Zone III Proofing',
      'Rainwater Harvesting',
      'Choice Is Yours Customization',
    ],
  },
  {
    id: 'proj-4',
    title: 'Studio Architectural Elevation',
    category: 'architecture',
    categoryLabel: 'Architectural Design',
    location: 'Currency Nagar / Benz Circle, Vijayawada',
    area: '3,400 Sq.Ft',
    year: '2024',
    status: 'Completed',
    image: '/images/architecture.jpg',
    description:
      'Detailed 3D exterior elevation modeling, natural daylight planning, and municipal sanction drawings.',
    services: [
      '2D & 3D Architectural Drawings',
      'Elevation Modeling',
      'Vasthu Space Verification',
    ],
    highlights: [
      'Zero Space Wastage',
      'Modern Architectural Aesthetics',
    ],
  },
  {
    id: 'proj-5',
    title: 'SS Global Heavy Structural Framework',
    category: 'structural',
    categoryLabel: 'Structural Engineering',
    location: 'Gannavaram Highway, Krishna District',
    area: '12,000 Sq.Ft',
    year: '2024',
    status: 'Ongoing',
    image: '/images/structural.jpg',
    description:
      'Heavy reinforced concrete framing engineered with deep pile foundations, Tata Tiscon steel, and certified high-grade concrete.',
    services: [
      'Soil Investigation Analysis',
      'Structural Detailing',
      'On-Site Quality Audit',
    ],
    highlights: [
      'Tata Tiscon Fe-550D TMT Steel',
      'UltraTech Grade 53 Cement',
      'Safety Audited Execution',
    ],
  },
  {
    id: 'proj-6',
    title: 'The Royal Haven Living Hall & Interiors',
    category: 'interior',
    categoryLabel: 'Interior Design',
    location: 'Mogalrajpuram, Vijayawada',
    area: '2,800 Sq.Ft',
    year: '2024',
    status: 'Completed',
    image: '/images/interior.jpg',
    description:
      'Italian marble flooring, automated cove ceiling lighting, custom acrylic modular kitchen cabinetry, and bespoke pooja mandir.',
    services: [
      'Interior Space Planning',
      'Modular Kitchen Renovation',
      'Designer False Ceiling & Lighting',
      'Bespoke Carpentry',
    ],
    highlights: [
      'Marine Grade Termite-Proof Plywood',
      'Soft-Close Hardware',
      'Stain-Proof Vitrified Tiles',
    ],
  },
];

const DEFAULT_GALLERY: GalleryItem[] = SS_GALLERY_ITEMS;

export default function HomePage() {
  const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECTS);
  const [gallery, setGallery] = useState<GalleryItem[]>(DEFAULT_GALLERY);

  // Modals state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('General Consultation');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        if (Array.isArray(data) && data.length) setProjects(data);
      })
      .catch(() => {});

    fetchGallery()
      .then((data) => {
        if (Array.isArray(data) && data.length) setGallery(data);
      })
      .catch(() => {});
  }, []);

  const handleOpenConsultation = (service = 'General Consultation') => {
    setConsultationService(service);
    setIsConsultationOpen(true);
  };

  const handleDiscussSimilarProject = (projectName: string) => {
    setSelectedProject(null);
    setConsultationService(`Project Inquiry: Similar to ${projectName}`);
    setIsConsultationOpen(true);
  };

  return (
    <LanguageProvider>
      {/* 2.8-Second Architectural Splash Screen */}
      <SplashScreen durationMs={2800} />

      {/* Top Contact & Hours Bar */}
      <TopBar />

      {/* Main Responsive Navbar with Language Switcher */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section with Quick Site Visit Request */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 2. Key Verified Statistics (20+ Years, Foundation to Finishing) */}
        <StatsSection />

        {/* 3. Company Story, Philosophy & 4 Pillars */}
        <AboutSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Complete Services Showcase (All 15 Services with Category Filters) */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Projects & Architectural Portfolio */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 6. Visual Gallery (Official Posters, Banners & Work Highlights) */}
        <GallerySection
          galleryItems={gallery}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* 7. Live Architectural & Engineering Video Tour (Real Video in Cinema Frame) */}
        <VideoShowcaseSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Quality Materials & Trusted Brands (UltraTech, Asian Paints, Tata Tiscon, Kajaria, Hindware) */}
        <MaterialsSection />

        {/* 8. Why Choose SS Global (Value Proposition Grounded in Stated Facts) */}
        <WhyUsSection onOpenConsultation={handleOpenConsultation} />

        {/* 9. 6-Step Construction Journey (Foundation to Finishing) */}
        <ProcessSection />

        {/* 10. Frequently Asked Questions (Accordion Addressing 10 Core Questions) */}
        <FaqSection />

        {/* 11. Contact Desk & Enquiry Form with Verified Details */}
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Mobile Sticky Bottom Call & WhatsApp Bar */}
      <MobileStickyBar />

      {/* Floating Action Buttons (AI Assistant & WhatsApp) */}
      <FloatingActions onToggleAi={() => setIsAiOpen(!isAiOpen)} />

      {/* Floating AI Assistant Chat Window */}
      <AiAssistant
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        service={consultationService}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussSimilar={handleDiscussSimilarProject}
      />

      <LightboxModal
        items={gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </LanguageProvider>
  );
}
