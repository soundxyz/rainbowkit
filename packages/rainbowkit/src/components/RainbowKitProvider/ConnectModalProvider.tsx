import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import { ConnectModalContext } from './ConnectModalContext';

const useBooleanState = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { setFalse, setTrue, value };
};

export function ConnectModalProvider({ children }: { children: ReactNode }) {
  const { data: accountData } = useAccount();
  const hasAccountData = Boolean(accountData);

  const {
    setFalse: closeConnectModal,
    setTrue: openConnectModal,
    value: connectModalOpen,
  } = useBooleanState(false);

  const {
    setFalse: closeAccountModal,
    setTrue: openAccountModal,
    value: accountModalOpen,
  } = useBooleanState(false);

  const {
    setFalse: closeChainModal,
    setTrue: openChainModal,
    value: chainModalOpen,
  } = useBooleanState(false);

  useEffect(() => {
    closeConnectModal();
    closeAccountModal();
    closeChainModal();
  }, [hasAccountData, closeConnectModal, closeAccountModal, closeChainModal]);

  return (
    <ConnectModalContext.Provider
      value={{
        openAccountModal,
        openChainModal,
        openConnectModal,
        chainModalOpen,
        accountModalOpen,
        connectModalOpen,
        closeAccountModal,
        closeChainModal,
        closeConnectModal,
      }}
    >
      {children}
    </ConnectModalContext.Provider>
  );
}
