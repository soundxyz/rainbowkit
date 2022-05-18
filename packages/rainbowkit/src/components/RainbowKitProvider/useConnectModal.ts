import { useContext } from 'react';

import { ConnectModalContext } from './ConnectModalContext';

export const useConnectModal = () => {
  const { connectModalOpen, openConnectModal, closeConnectModal } =
    useContext(ConnectModalContext);
  return { connectModalOpen, openConnectModal, closeConnectModal };
};
