'use client';

import React, { useState, useEffect } from 'react';
import { TopBar } from '@/components/layout/top-bar';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MobileStickyBar } from '@/components/layout/mobile-sticky-bar';

import { HeroSection } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats';
import { ServicesSection } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { EstimatorSection } from '@/components/sections/estimator';
import { ProcessSection } from '@/components/sections/process';
import { WhyUsSection } from '@/components/sections/why-us';
import { TrackerSection } from '@/components/sections/tracker';
import { GallerySection } from '@/components/sections/gallery';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';

import { FloatingActions } from '@/components/widgets/floating-actions';
import { AiAssistant } from '@/components/widgets/ai-assistant';

import { ConsultationModal } from '@/components/modals/consultation-modal';
import { ProjectModal } from '@/components/modals/project-modal';
import { LightboxModal } from '@/components/modals/lightbox-modal';
import { AdminModal } from '@/components/modals/admin-modal';

import { ProjectItem, GalleryItem, TestimonialItem } from '@/types';
import { fetchProjects, fetchGallery, fetchTestimonials } from '@/services/api';

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'BuildSphere Royal Villa',
    category: 'residential',
    categoryLabel: 'Residential Villa',
    location: 'Poranki, Vijayawada',
    area: '4,200 Sq.Ft',
    year: '2024',
    status: 'Completed',
    image: '/images/residential.jpg',
    description:
      'Triplex luxury villa featuring double-height living spaces, cross-ventilation, terrace garden, and Teak wood finishes.',
    services: [
      'Architectural Planning',
      'Structural Engineering',
      'Civil Construction',
      'Turnkey Interiors',
    ],
    highlights: [
      '15-Year Structural Warranty',
      '100% Vasthu Compliant',
      'German Hardware Fittings',
      'Rainwater Harvesting',
    ],
  },
  {
    id: 'proj-2',
    title: 'Vertex Corporate Arcade',
    category: 'commercial',
    categoryLabel: 'Commercial Complex',
    location: 'Ramavarapadu Ring Road',
    area: '18,500 Sq.Ft',
    year: '2024',
    status: 'Ongoing (80%)',
    image: '/images/commercial.jpg',
    description:
      'G+4 commercial hub with structural glass facade, retail showrooms, corporate floors, and basement parking.',
    services: [
      'Structural Design',
      'Commercial Civil Construction',
      'Facade Glazing',
      'MEP Engineering',
    ],
    highlights: [
      'High Load Bearing Capacity',
      'Earthquake Resistant IS-1893',
      'Escrow Milestone Payments',
      'Fire Safety Compliant',
    ],
  },
  {
    id: 'proj-3',
    title: 'Amaravati Lakeview Residences',
    category: 'residential',
    categoryLabel: 'Residential Multi-Family',
    location: 'Tadepalli, Amaravati',
    area: '7,800 Sq.Ft',
    year: '2023',
    status: 'Completed',
    image: '/images/hero-bg.jpg',
    description:
      'Contemporary residential homes with cantilevered decks, wooden louvers, and 15-year structural warranty.',
    services: [
      'Complete Architecture',
      'Structural Design',
      'Turnkey Construction',
    ],
    highlights: [
      'Seismic Zone III Proofing',
      'Rainwater Harvesting',
      '15-Year Structural Guarantee',
    ],
  },
  {
    id: 'proj-4',
    title: 'Studio Architectural Elevation',
    category: 'architecture',
    categoryLabel: 'Architectural Design',
    location: 'Benz Circle, Vijayawada',
    area: '3,400 Sq.Ft',
    year: '2024',
    status: 'Completed',
    image: '/images/architecture.jpg',
    description:
      'Detailed 3D elevation modeling, natural daylight planning, and municipal sanction drawings.',
    services: [
      '2D & 3D Architectural Drawings',
      'Elevation Modeling',
      'Vasthu Verification',
    ],
    highlights: [
      'Government Sanction Approved',
      'Zero Space Wastage',
      'Modern Aesthetic',
    ],
  },
  {
    id: 'proj-5',
    title: 'BuildSphere Multi-Tier Framework',
    category: 'structural',
    categoryLabel: 'Structural Engineering',
    location: 'Gannavaram Highway',
    area: '12,000 Sq.Ft',
    year: '2024',
    status: 'Ongoing',
    image: '/images/structural.jpg',
    description:
      'Heavy reinforced concrete framing by BuildSphere Engineering with deep pile foundation and Fe-550D steel.',
    services: [
      'Soil Investigation Analysis',
      'Structural Detailing',
      'Quality Audit',
    ],
    highlights: [
      'Grade Fe-550D TMT Steel',
      'NABL Tested Concrete M-30',
      'Safety Audited',
    ],
  },
  {
    id: 'proj-6',
    title: 'The Royal Haven Interiors',
    category: 'interior',
    categoryLabel: 'Interior Design',
    location: 'Mogalrajpuram, Vijayawada',
    area: '2,800 Sq.Ft',
    year: '2024',
    status: 'Completed',
    image: '/images/interior.jpg',
    description:
      'Italian Botticino marble, automated cove ceiling lighting, and custom acrylic modular kitchen cabinetry.',
    services: [
      'Interior Space Planning',
      'Modular Kitchen',
      'False Ceiling & Lighting',
      'Carpentry',
    ],
    highlights: [
      'Marine Grade Plywood',
      'Hafele Hardware',
      'Smart Automation',
    ],
  },
];

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Contemporary Luxury Villa',
    category: 'residential',
    image: '/images/residential.jpg',
    caption: 'Contemporary Luxury Villa - Poranki, Vijayawada',
  },
  {
    id: 'gal-2',
    title: 'Vertex Corporate Arcade',
    category: 'commercial',
    image: '/images/commercial.jpg',
    caption: 'Vertex Corporate Arcade - Ramavarapadu Ring Road',
  },
  {
    id: 'gal-3',
    title: '2D/3D Architectural Drafting',
    category: 'architecture',
    image: '/images/architecture.jpg',
    caption: '2D/3D Architectural Blueprints & Space Planning',
  },
  {
    id: 'gal-4',
    title: 'Reinforced Column Detailing',
    category: 'construction',
    image: '/images/structural.jpg',
    caption: 'Civil Structural Rebar Column Reinforcement Inspection',
  },
  {
    id: 'gal-5',
    title: 'Grand Living Room Interiors',
    category: 'interiors',
    image: '/images/interior.jpg',
    caption: 'Grand Living Hall with Italian Botticino Marble & False Ceiling',
  },
  {
    id: 'gal-6',
    title: 'Architectural Facade Uplighting',
    category: 'commercial',
    image: '/images/hero-bg.jpg',
    caption: 'Modern Architectural Facade & Terrace Lighting',
  },
  {
    id: 'gal-7',
    title: 'Terrace Garden & Balconies',
    category: 'residential',
    image: '/images/residential.jpg',
    caption: 'Private Terrace Landscape Garden with Waterproofing',
  },
  {
    id: 'gal-8',
    title: 'Floating Staircase Architecture',
    category: 'interiors',
    image: '/images/interior.jpg',
    caption: 'Floating Teak Wood Staircase with LED Lighting',
  },
];

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'K. Venkata Rao',
    role: 'Villa Owner',
    location: 'Poranki, Vijayawada',
    project: 'Residential Villa (G+2)',
    rating: 5,
    text: 'Building a home is once in a lifetime, and choosing BuildSphere was the best decision. Their milestone payment model gave us immense peace of mind. The structural engineering is solid and the finishing is top notch. Highly recommended!',
  },
  {
    id: 'test-2',
    name: 'M. Prasad Reddy',
    role: 'Commercial Developer',
    location: 'Ramavarapadu, Vijayawada',
    project: 'Commercial Complex (16,000 Sq.Ft)',
    rating: 5,
    text: 'BuildSphere delivered our commercial complex 3 weeks ahead of schedule. Their transparency in material specifications—from Vizag Steel to UltraTech cement—was 100% genuine. The team handles government approvals and site supervision with complete professionalism.',
  },
  {
    id: 'test-3',
    name: 'S. Anusha',
    role: 'Independent Homeowner',
    location: 'Tadepalli, Amaravati',
    project: 'Architectural Design & Construction',
    rating: 5,
    text: 'Their 3D elevation and interior design match the final constructed house down to the smallest millimeter! 20+ years of local experience shows in how effortlessly they manage labour, materials, and Vasthu requirements.',
  },
];

export default function HomePage() {
  const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECTS);
  const [gallery, setGallery] = useState<GalleryItem[]>(DEFAULT_GALLERY);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);

  // Modals state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('General Consultation');

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const [isAiOpen, setIsAiOpen] = useState(false);

  useEffect(() => {
    // Dynamic data load with graceful fallbacks
    fetchProjects().then((data) => {
      if (Array.isArray(data) && data.length) setProjects(data);
    }).catch(() => {});

    fetchGallery().then((data) => {
      if (Array.isArray(data) && data.length) setGallery(data);
    }).catch(() => {});

    fetchTestimonials().then((data) => {
      if (Array.isArray(data) && data.length) setTestimonials(data);
    }).catch(() => {});
  }, []);

  const handleOpenConsultation = (service = 'General Consultation') => {
    setConsultationService(service);
    setIsConsultationOpen(true);
  };

  const handleGetQuotation = ({
    type,
    quality,
    area,
    costRange,
  }: {
    type: string;
    quality: string;
    area: number;
    costRange: string;
  }) => {
    const formattedType =
      type === 'commercial'
        ? 'Commercial Construction'
        : type === 'renovation'
        ? 'Building Renovation'
        : 'Residential Construction';
    setConsultationService(`${formattedType} (${area} sq.ft, ${quality} tier - Preliminary Cost: ${costRange})`);
    setIsConsultationOpen(true);
  };

  const handleDiscussSimilarProject = (projectName: string) => {
    setSelectedProject(null);
    setConsultationService(`Project Inquiry: Similar to ${projectName}`);
    setIsConsultationOpen(true);
  };

  return (
    <>
      {/* Top Direct Verified Contact Info Bar */}
      <TopBar />

      {/* Main Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section with Quick Estimator */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* Quick Statistics Section */}
        <StatsSection />

        {/* What We Do (6 Core Services) */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* About Section */}
        <AboutSection onOpenConsultation={handleOpenConsultation} />

        {/* Projects Showcase */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Interactive Cost Estimator */}
        <EstimatorSection onGetQuotation={handleGetQuotation} />

        {/* 6-Step Construction Journey */}
        <ProcessSection />

        {/* Why Choose BuildSphere */}
        <WhyUsSection onOpenConsultation={handleOpenConsultation} />

        {/* Customer Live Project Progress Tracker */}
        <TrackerSection />

        {/* Visual Photo Gallery */}
        <GallerySection
          galleryItems={gallery}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* Client Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Contact & Enquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Mobile Sticky Bottom Call Bar */}
      <MobileStickyBar />

      {/* Floating Action Buttons (AI Assistant & WhatsApp) */}
      <FloatingActions onToggleAi={() => setIsAiOpen(!isAiOpen)} />

      {/* Floating AI Assistant Chat Window */}
      <AiAssistant
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Modals */}
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
    </>
  );
}
