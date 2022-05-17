import { createContext } from 'react';

type ConnectModalContextType = {
  openAccountModal: () => void;
  closeAccountModal: () => void;
  openChainModal: () => void;
  openConnectModal: () => void;
  closeChainModal: () => void;
  closeConnectModal: () => void;
  accountModalOpen: boolean;
  chainModalOpen: boolean;
  connectModalOpen: boolean;
};

export const ConnectModalContext = createContext<ConnectModalContextType>({
  openAccountModal: () => {},
  closeAccountModal: () => {},
  openChainModal: () => {},
  closeChainModal: () => {},
  closeConnectModal: () => {},
  openConnectModal: () => {},
  accountModalOpen: false,
  chainModalOpen: false,
  connectModalOpen: false,
});
