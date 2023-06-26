import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <main className="">
      <article className="grid-cols-2 grid">
        <div className="px-20 py-48">
          <h1 className="text-6xl gradient text-transparent font-semibold">
            Auth starts here.
          </h1>
          <p className="mt-2 text-lg">
            Download our Next.js starter that uses Clerk for authentication and
            user management.
          </p>
          <div className="mt-8 flex gap-2">
            <Link
              href="/sign-up"
              className="py-2 px-4 bg-primary-600 text-white rounded-lg flex content-center gap-2 transition-colors duration-200 hover:bg-primary-700 font-semibold"
            >
              View Demo{" "}
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="py-2 px-4 flex gap-2 rounded-lg transition duration-100 font-semibold text-gray-600 hover:text-gray-800"
              href="#features"
            >
              Learn more{" "}
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="Clerk embeddable components" />
        </div>
      </article>
      <article className="bg-opacity-5 bg-black px-20 py-24" id="features">
        <h2 className="text-3xl font-semibold">What's under the hood?</h2>
        <p className="mt-2">
          This starter repo uses some of the following features supported by
          Clerk. To learn more, read our{" "}
          <a
            href="https://clerk.com/docs"
            className="text-primary-600 hover:underline font-medium"
          >
            documentation
          </a>
          .
        </p>
        <div className="grid grid-cols-3 mt-8 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-1 h-56">
            <h3 className="text-lg font-medium">
              Embedded Components with Customization
            </h3>
            <p className="text-gray-700">
              Make our components your own with our extensive customization
              options.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/component-reference/customization"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Components documentation <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-1 h-56">
            <h3 className="text-lg font-medium">Built-in React Hooks</h3>
            <p className="text-gray-700">
              Building a custom auth flow? Our hooks give all the functionality
              you need.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/reference/clerk-react/installation"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Hooks documentation <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-1 h-56">
            <h3 className="text-lg font-medium">Organizations</h3>
            <p className="text-gray-700">
              Quickly add collaboration and multi-tenancy capabilities into your
              app.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/organizations/overview"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Organizations documentation <span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
