import Head from "next/head";
import Login from "../components/Login.component";

export default function Home() {
  return (
    <div className="container mx-auto px-8">
      <Head>
        <title>BandungKosong</title>
        <meta name="description" content="BandungKosong" />
      </Head>

      <main className="py-16 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl mb-16 text-center">
          BandungKosong
        </h1>

        <Login></Login>
      </main>
    </div>
  );
}
