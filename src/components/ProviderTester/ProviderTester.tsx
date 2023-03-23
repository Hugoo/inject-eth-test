import { useState } from "react";

const ProviderTester: React.FC = () => {
  const [providersInfo, setProvidersInfo] = useState({
    window: { ethereum: {} },
  });

  const onGetProvider = () => {
    // @ts-ignore
    const { ethereum } = window;

    console.log(ethereum);

    // Coinbase Extension provides the providers array
    // MetaMask does not provide it
    // LUKSO Extension does not provide it
    // https://docs.cloud.coinbase.com/wallet-sdk/docs/injected-provider-guidance
    console.log(ethereum.providers);

    const providers = ethereum.providers
      ? ethereum.providers.map((provider: any) => ({
          isMetaMask: provider.isMetaMask || false,
          isCoinbaseWallet: provider.isCoinbaseWallet || false,
          isUniversalProfileExtension:
            provider.isUniversalProfileExtension || false,
        }))
      : "??";

    setProvidersInfo({
      window: {
        ethereum: {
          isMetaMask: ethereum.isMetaMask || false,
          isCoinbaseWallet: ethereum.isCoinbaseWallet || false,
          isUniversalProfileExtension:
            ethereum.isUniversalProfileExtension || false,
          providers,
        },
      },
    });
  };

  return (
    <div>
      <p>
        When Coinbase Wallet is installed, it provides an{" "}
        <code>ethereum.providers</code> key, which allows us to loop through all
        the available providers.
      </p>
      <button onClick={onGetProvider}>Get Provider</button>
      <pre>{JSON.stringify(providersInfo, null, 2)}</pre>
    </div>
  );
};

export default ProviderTester;
