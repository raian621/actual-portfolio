import { Metadata } from "next";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
  };
}

export default function Page() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div className="flex w-[100vdw] h-full">
        <div className="m-auto bg-white dark:bg-slate-800 md:shadow-2xl flex-col text-center p-8 md:w-[800px] space-y-4">
          coming soon...
        </div>
      </div>
    </>
  )
}