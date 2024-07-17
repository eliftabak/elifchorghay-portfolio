import Image from 'next/image';
import './index.css';
import BlurImage from '../components/blurImage';

const AboutPage = () => {
  return (
    <>
      <main className="about">
        <div className="contain-md my-8 md:my-16">
        <BlurImage
            className="elifImage"
            src="/images/elifchorghay.jpg"
            alt="Elif Chorghay"
            height={100}
            width={400}
          />
        </div>
        <div className="contain-sm">
          <h1 className="flex items-center text-3xl md:text-4xl lg:text-5xl">
            Hi!
            <span className="w-14 mx-3">
              <BlurImage
                src='/images/wave.png'
                alt="wave"
                width={50}
                height={50}
              />
            </span>
            I'm Elif Chorghay.
          </h1>
          <p className="text-mdgray my-8 md:text-lg">
            Welcome! I'm Elif, a Web Developer with a specialized focus in fintech and e-commerce. My career is dedicated to creating web applications that are not only efficient but also intuitively user-centric. I possess a deep understanding of technologies such as React, Next.js, Redux, and Tailwind CSS. This expertise allows me to deliver solutions that elevate both user experience and business objectives.
          </p>
          <p className="text-mdgray my-8 md:text-lg">
            In addition to my frontend skills, I bring robust backend expertise, working with Node.js and NoSQL to create full-stack solutions. This comprehensive skill set ensures seamless functionality and integration. I also emphasize quality assurance, employing advanced testing tools like Cypress and Jest to guarantee the highest standards in application performance.
          </p>
          <p className="text-mdgray my-8 md:text-lg">
            My journey in web development is a continuous pursuit of excellence. I am committed to staying abreast with the latest technological trends and industry best practices. This dedication not only enhances my skill set but also ensures that the solutions I develop are innovative and future-proof, effectively meeting the evolving needs of the digital landscape.
          </p>
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-3xl mb-4">My Go-To Stack</h2>
            <ul className="flex flex-wrap md:text-lg text-mdgray">
              {[
                { src: '/images/Favorites/next-js.png', alt: 'NextJS', name: 'NextJS' },
                { src: '/images/Favorites/react.png', alt: 'React', name: 'React' },
                { src: '/images/Favorites/typescript.png', alt: 'Typescript', name: 'Typescript' },
                { src: '/images/Favorites/javascript.png', alt: 'JavaScript', name: 'JavaScript' },
                { src: '/images/Favorites/redux.png', alt: 'Redux', name: 'Redux' },
                { src: '/images/Favorites/nodejs.png', alt: 'Node.js', name: 'Node.js' },
                { src: '/images/Favorites/mysql.png', alt: 'MySQL', name: 'MySQL' },
                { src: '/images/Favorites/mongo.png', alt: 'MongoDB', name: 'MongoDB' },
                { src: '/images/Favorites/tailwind.png', alt: 'Tailwind CSS', name: 'Tailwind CSS' },
                { src: '/images/Favorites/bootstrap.png', alt: 'Bootstrap', name: 'Bootstrap' },
                { src: '/images/Favorites/material-ui.png', alt: 'Material UI', name: 'Material UI' },
              ].map((tech, i) => (
                <li key={i} className="w-1/3 p-4">
                  <div>
                    <BlurImage src={tech.src} alt={tech.alt} width={40} height={40} className="logo" />
                    <span>{tech.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
