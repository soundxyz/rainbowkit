import { useContext } from 'react';

import { ConnectModalContext } from './ConnectModalContext';

export const useConnectModal = () => {
  const { connectModalOpen, openConnectModal } =
    useContext(ConnectModalContext);
  return { connectModalOpen, openConnectModal };
};
