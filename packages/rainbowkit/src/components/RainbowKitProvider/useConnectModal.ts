import { useContext } from 'react';

import { ConnectModalContext } from './ConnectModalContext';

export const useConnectModal = () => {
  const { closeConnectModal, connectModalOpen, openConnectModal } =
    useContext(ConnectModalContext);
  return { closeConnectModal, connectModalOpen, openConnectModal };
};
