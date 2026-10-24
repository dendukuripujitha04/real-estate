'use client';

import React from 'react';
import { Modal } from '@/components/ui/modal';
import { ConsultationForm } from '@/components/forms/consultation-form';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  service,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Request Free Engineering Consultation"
    >
      <ConsultationForm initialService={service} onSuccess={onClose} />
    </Modal>
  );
};
