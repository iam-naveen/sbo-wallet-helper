import Head from "next/head";
import List from "../components/List/List";

const Home = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Wallet Checker</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/438/438526.png"
        />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-start text-center">
        <h1 className="text-3xl mt-10 mx-0 font-bold">Memeber's List</h1>
        <List></List>
      </main>
    </div>
  );
};

export default Home;
