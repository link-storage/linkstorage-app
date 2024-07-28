import { ReactNode } from 'react';

export type BaseModalProps = {
  title: string;
  deletePath?: string;
  children: ReactNode;
  height?: string;
};

export type ModalType = 'ImageExpansion' | 'ProfileImage' | 'FolderSelect';
