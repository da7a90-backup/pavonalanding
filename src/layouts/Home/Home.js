
import gamestackTexture from 'assets/capture.png';
import summarizerDesk from 'assets/summarizer-desk.jpg';
import summarizerMobile from 'assets/summarizer-portfolio-mobile.png';
import ecommerceDesk from 'assets/ecommerce.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/onyx.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import cryptoket from 'assets/cryptodeskmn.png';
import CryptoLegionDesktop from 'assets/crypto-legions.png';
import RiveAiDesktop from 'assets/rivetai.png';
import TenzityDesktop from 'assets/tenzity.png';

import HrDesktop from 'assets/people-goal-desktop.png';
import HrMobile from 'assets/people-goal-desktop.png';
import GentoTrading from 'assets/gentotrading.png';
import Zuri from 'assets/portfo-n1.png'
import MusicRoom from 'assets/portf-n2.png'
import Korea from 'assets/korea.png'

const disciplines = ['Custom AI Solutions ', 'AR Experiences', 'Tailored to your needs'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  const projectEleven = useRef();
  const projectTen = useRef();
  const projectTwelve = useRef();
  const projectTherteen = useRef();





  const details = useRef();


  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Creative AI & AR studio"
        description="Landing page for Pavona AI & AR creative studio."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Onyx Elite: Elevate Your Performance"
        description="Elevate your fitness performance to elite status with Onyx. Our exclusive training program is designed for athletes, fitness enthusiasts, and anyone seeking top-tier results. Unleash your competitive edge and rise to the pinnacle of your physical capabilities."
        // buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTexture],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectOne.current)}
        index={2}
        title="CHAGPT AI Summarizer: Summarize with Ease"
        description="This web application is powered by the revolutionary OpenAI GPT-4 artificial intelligence system, which employs state-of-the-art language processing and machine learning techniques to provide the most accurate and insightful article summaries possible. Its cutting-edge capabilities enable it to accurately capture the essence of any article, regardless of complexity or subject matter, and present it in a clear and concise manner. To ensure the best possible experience for users, we recommend testing this application on reputable article sites like medium.com, where the quality and diversity of content is sure to put our AI to the test!"
        buttonText="View Project"
        buttonLink="https://ai-summarize1337.netlify.app/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [summarizerDesk, summarizerDesk],
              placeholder: summarizerDesk,
            },
          ],
        }}
      />



      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectOne.current)}
        index={3}
        title="Artskoreanman - Shopify ecommerce Website"
        description="Artskoreanman is a Shopify ecommerce website, which is selling Korean Artworks. I'm working on this project as a Front-End Developer. "
        buttonText="Visit Website"
        buttonLink="https://artskoreanman.com/"

        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [Korea, Korea],
              placeholder: Korea,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="CHAGPT AI Summarizer: Summarize with Ease (Mobile)"
        description="Openai Summarizer Mobile App"
        buttonText="View website"
        buttonLink="https://ai-summarize1337.netlify.app/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [summarizerMobile, summarizerMobile],
              placeholder: summarizerMobile,
            },
            {
              srcSet: [summarizerMobile, summarizerMobile],
              placeholder: summarizerMobile,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"

        buttonText="View website"
        buttonLink="https://hoobank-flame.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTexture],
              placeholder: gamestackTexture,
            },
            {
              srcSet: [gamestackTexture, gamestackTexture],
              placeholder: gamestackTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectThree.current)}
        index={8}
        title="Cryptoket NFT Marketplace (BETA)"
        description="
        CryptoKet is an innovative NFT marketplace powered by the Ethereum blockchain. With the seamless integration of MetaMask, users can securely buy, sell, and explore unique digital assets. Artists can confidently showcase their work while collectors verify the authenticity and ownership of NFTs. With a user-friendly interface and a vibrant community, CryptoKet offers a streamlined experience for creators and enthusiasts alike. Discover the world of non-fungible tokens with CryptoKet and unlock endless possibilities in just a few clicks."
        buttonText="View project"
        buttonLink="/projects/cryptoket"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [cryptoket],
              placeholder: cryptoket,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="The AI Copilot for your Pre-Production Workflow"
        description="An AI-powered workflow platform designed to help writers, producers, and directors streamline their script coverage, scheduling, and budgeting processes. With next generation tools provided by RivetAI, writers can finally focus on writing and producers can focus on pushing out great content... Next.js, Node.js"

        buttonText="View website"
        buttonLink="https://www.rivetai.com/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [RiveAiDesktop, RiveAiDesktop],
              placeholder: RiveAiDesktop,
            },
            {
              srcSet: [RiveAiDesktop, RiveAiDesktop],
              placeholder: RiveAiDesktop,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="Crypto Legions v2"
        description="Crypto Legions v2 was the longest-lasting play-to-earn NFT game on the BSC network in 2022 with a lucrative ROI for players. Our game has 8 unique features that no other lucrative play-to-earn game on the BSC network has. React, Animation, GSAP, TainwindCSS"

        buttonText="View website"
        buttonLink="https://cryptolegions.app/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [CryptoLegionDesktop, CryptoLegionDesktop],
              placeholder: CryptoLegionDesktop,
            },
            {
              srcSet: [CryptoLegionDesktop, CryptoLegionDesktop],
              placeholder: CryptoLegionDesktop,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="Tenzity - A modern hoodie Website with using Next.js, Sanity.io, TailwindCSS, and more."
        description=" Tenzit, a creation powered by Next.js and Sanity.io, delivers a smooth and visually captivating online journey. Designed with efficiency in mind, this website seamlessly merges cutting-edge technology with easy content management. Dive into the world of Tenzity.ge to explore a carefully curated selection of hoodies, all within a modern and user-friendly interface."

        buttonText="View website"
        buttonLink="https://tenzity.ge/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [TenzityDesktop, TenzityDesktop],
              placeholder: TenzityDesktop,
            },
            {
              srcSet: [TenzityDesktop, TenzityDesktop],
              placeholder: TenzityDesktop,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-10"
        sectionRef={projectTen}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="PeopleGoal - HR Management Software"
        description="Activate experiences that drive employee growth and business development. Connect all HR processes in a single platform that simplifies how work is done. Automate legacy HR processes and introduce workflow automation across the organization. Next.js, Lodash,Node.js, SmartsUpp."

        buttonText="View website"
        buttonLink="https://www.peoplegoal.com/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [HrDesktop, HrMobile],
              placeholder: HrDesktop,
            },
            {
              srcSet: [HrDesktop, HrMobile],
              placeholder: HrDesktop,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-11"
        sectionRef={projectEleven}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="GentoTrading OilBank - Official Resseler of HyndaiXteer,Azmol, Aminol, Lukoil, etc."
        description="The Giant Compant Based in georgia Official resseler of HyndaiXteer,Azmol, Aminol, Lukoil, etc. Website is On Deploying Process. React.js Node.js, MUI, TailwindCSS. "

        buttonText="View website"
        buttonLink="https://gentotrading.onrender.com/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [GentoTrading, GentoTrading],
              placeholder: GentoTrading,
            },
            {
              srcSet: [GentoTrading, GentoTrading],
              placeholder: GentoTrading,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-12"
        sectionRef={projectTwelve}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="ZURI PLASTIC SURGERY"
        description="Featuring a stylish, well-appointed reception area, word-class private AAAASF-Certified surgical center, state-of-the-art patient exam rooms and Operating Rooms, and private patient parking located just off US-1, across from the renowned South Miami Hospital. "

        buttonText="View website"
        buttonLink="https://www.zuriplasticsurgery.com/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [Zuri, Zuri],
              placeholder: Zuri,
            },
            {
              srcSet: [Zuri, Zuri],
              placeholder: Zuri,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-13"
        sectionRef={projectTherteen}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="Musicroom Georgia - Official audio equipment resseler in Georgia"
        description="
        Working on this website with my team but its not my stack it's Wordpress,  i'm working on this project as a Front-End Developer. 
        "

        buttonText="View website"
        buttonLink="https://musicroom.ge/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [MusicRoom, MusicRoom],
              placeholder: MusicRoom,
            },
            {
              srcSet: [MusicRoom, MusicRoom],
              placeholder: MusicRoom,
            },
          ],
        }}
      />



      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
