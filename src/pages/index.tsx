import Head from "next/head";
import ProviderTester from "@/components/ProviderTester";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inject Eth test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <ProviderTester />
        </div>
      </main>
    </>
  );
}
