import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Akshat's
              </span>
              Portfolio
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-2 sm:gap-5">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup column="true">
                <Footer.Link href="/about">About Me</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="social media" />
              <Footer.LinkGroup column="true">
                <Footer.Link
                  href="https://www.github.com/akshatpat3l"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/akshatpat3l/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Akshat Patel"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt:4 sm:justify-center ">
            <Footer.Icon
              href="https://www.linkedin.com/in/akshatpat3l/"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://www.github.com/akshatpat3l"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
