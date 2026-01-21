
import React from 'react';

export interface CardData {
  id: string;
  title: string;
  preview: string;
  icon: React.ReactNode;
  modalContent: React.ReactNode;
}

export interface MenuItem {
  label: string;
  targetId: string;
}
