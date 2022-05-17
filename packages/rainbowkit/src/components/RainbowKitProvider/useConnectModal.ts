import { useContext } from 'react';

import { ConnectModalContext } from './ConnectModalContext';

export const useConnectModal = () => {
  const { openConnectModal, connectModalOpen } =
    useContext(ConnectModalContext);
  return { openConnectModal, connectModalOpen };
};
