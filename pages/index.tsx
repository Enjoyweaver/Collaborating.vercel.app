import clsx from "clsx";
import { GetServerSideProps } from "next";
import { ComponentProps, ReactNode, useState, useEffect } from "react";
import { DASHBOARD_URL } from "../constants";
import { MarketingLayout } from "../layouts/Marketing";
import * as Server from "../lib/server";
import { Button, LinkButton } from "../primitives/Button";
import { Container } from "../primitives/Container";
import WallOfCollaboration from "./collaboration";
import styles from "./index.module.css";

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
  collaborationTasks?: string[];
  twitterLink?: string;
  shortTwitterLink?: string;
  domainName?: string;
  image?: string;
  category?: string;
}

function Feature({
  title,
  description,
  collaborationTasks,
  className,
  twitterLink,
  shortTwitterLink,
  domainName,
  image,
  category,
  ...props
}: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      {category && <span className={styles.featureCategory}>{category}</span>}

      {image && (
        <div className={styles.featureImageContainer}>
          <img
            src={image}
            alt={`${title} project`}
            className={styles.featureImage}
          />
        </div>
      )}

      <h4 className={styles.featuresFeatureTitle}>
        {twitterLink ? (
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h4>

      <p className={styles.featuresFeatureDescription}>{description}</p>

      {collaborationTasks && collaborationTasks.length > 0 && (
        <div className={styles.collaborationTasks}>
          <h5 className={styles.collaborationTasksTitle}>Skills Needed</h5>
          <ul className={styles.collaborationTasksList}>
            {collaborationTasks.map((task, index) => (
              <li key={index} className={styles.taskItem}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.featureFooter}>
        {shortTwitterLink && (
          <a
            href={`https://twitter.com/${shortTwitterLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon}>𝕏</span>
            {`@${shortTwitterLink}`}
          </a>
        )}

        {domainName && <div className={styles.domainBadge}>{domainName}</div>}

        <Button className={styles.applyButton}>Collaborate</Button>
      </div>
    </div>
  );
}

// Project Categories for filtering
const categories = [
  "All Projects",
  "DAO",
  "DeFi",
  "Media",
  "Social Impact",
  "NFT/Art",
];

export default function Index() {
  // Animation states
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Simulated scroll effect for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MarketingLayout>
      {/* Abstract Background Elements */}
      <div className={styles.abstractElements}>
        <div
          className={styles.abstractCircle}
          style={{ top: `${20 + scrollY * 0.05}%`, left: "10%" }}
        ></div>
        <div
          className={styles.abstractCircle}
          style={{ top: `${50 - scrollY * 0.02}%`, right: "15%" }}
        ></div>
        <div
          className={styles.abstractSquare}
          style={{ top: "30%", left: `${25 - scrollY * 0.03}%` }}
        ></div>
        <div
          className={styles.abstractTriangle}
          style={{ bottom: "20%", right: `${20 - scrollY * 0.01}%` }}
        ></div>
        <div
          className={styles.glowingOrb}
          style={{ top: "15%", left: "30%" }}
        ></div>
        <div
          className={styles.glowingOrb}
          style={{ bottom: "25%", right: "25%" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroBackground}>
          <Container className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroTextWrapper}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleLine}>Connect.</span>
                  <span className={styles.heroTitleLine}>Collaborate.</span>
                  <span className={styles.heroTitleLine}>Collect.</span>
                </h1>

                <p className={styles.heroLead}>
                  The ecosystem where projects meet talent. Complete meaningful
                  tasks, build your portfolio, and earn crypto tokens for your
                  collaboration.
                </p>

                <div className={styles.heroActions}>
                  <LinkButton
                    className={styles.primaryCTA}
                    href="https://collaborating.deform.cc/fantom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Join the Ecosystem</span>
                  </LinkButton>

                  <LinkButton
                    className={styles.secondaryCTA}
                    href="#list-project"
                  >
                    <span>List Your Project</span>
                  </LinkButton>
                </div>
              </div>

              <div className={styles.heroGraphic}>
                <div className={styles.orbitalSystem}>
                  <div className={styles.centralOrb}></div>
                  <div className={clsx(styles.orbit, styles.orbit1)}>
                    <div className={styles.sateliteOrb}></div>
                  </div>
                  <div className={clsx(styles.orbit, styles.orbit2)}>
                    <div className={styles.sateliteOrb}></div>
                  </div>
                  <div className={clsx(styles.orbit, styles.orbit3)}>
                    <div className={styles.sateliteOrb}></div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div className={styles.scrollIndicator}>
            <div className={styles.mouseIcon}>
              <div className={styles.mouseScroll}></div>
            </div>
            <span>Explore the Ecosystem</span>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className={styles.valueWrapper}>
        <Container className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionTitleHighlight}>Tri-Value</span>{" "}
            Ecosystem
          </h2>

          <div className={styles.valueTriad}>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <div className={styles.valueIcon}>🔍</div>
              </div>
              <h3 className={styles.valueCardTitle}>Connect</h3>
              <p className={styles.valueCardDescription}>
                Discover projects and talent aligned with your vision. Our
                ecosystem brings together innovators and builders from across
                the globe.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <div className={styles.valueIcon}>🔄</div>
              </div>
              <h3 className={styles.valueCardTitle}>Collaborate</h3>
              <p className={styles.valueCardDescription}>
                Work together to transform ideas into reality. Complete
                meaningful tasks that add value to projects and build your
                portfolio.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <div className={styles.valueIcon}>⚡</div>
              </div>
              <h3 className={styles.valueCardTitle}>Collect</h3>
              <p className={styles.valueCardDescription}>
                Earn crypto tokens for your contributions. Grow your stake in
                the projects you help build and participate in their success.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Project Listing Section */}
      <div id="projects" className={styles.projectsWrapper}>
        <Container className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionTitleHighlight}>Active</span>{" "}
            Collaborations
          </h2>

          <div className={styles.filterContainer}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={clsx(
                  styles.filterButton,
                  category === activeCategory && styles.filterButtonActive
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search projects..."
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <Feature
              title="Daostination"
              category="DAO"
              image="/images/projects/daostination.png"
              description={
                <>
                  Members fund the rental/purchase of properties for communal
                  use during events, vacations, or co-working spaces. From
                  houses for ETH Denver to bungalows in San Francisco,
                  we&apos;re building collective ownership through DAOs.
                </>
              }
              collaborationTasks={[
                "UI/UX Designer",
                "Smart Contract Developer",
                "DAO Operations Manager",
              ]}
              twitterLink="https://twitter.com/DAOstination"
              shortTwitterLink="DAOstination"
              domainName="DAOstination.DAO"
            />

            <Feature
              title="DAOsigner Apparel"
              category="Fashion/DAO"
              image="/images/projects/daosigner.png"
              description={
                <>
                  Empowering emerging fashion designers to launch their careers
                  with global exposure and crypto compensation. We bridge the
                  gap between traditional fashion and Web3.
                </>
              }
              collaborationTasks={[
                "Payment System Developer",
                "UI/UX Designer",
                "Fashion Tech Specialist",
              ]}
              twitterLink="https://twitter.com/DAOsignrApparel"
              shortTwitterLink="DAOsignrApparel"
              domainName="DAOsignerApparel.com"
            />

            <Feature
              title="DAOlicious"
              category="Food/DAO"
              image="/images/projects/daolicious.png"
              description={
                <>
                  A community-driven food project DAO that&apos;s still defining
                  its mission. Join our Discord and help shape what this
                  culinary collective will become.
                </>
              }
              collaborationTasks={[
                "Logo Designer",
                "Creative Strategist",
                "Food Industry Expert",
              ]}
              twitterLink="https://twitter.com/_DAOlicious"
              shortTwitterLink="_DAOlicious"
              domainName="DAOlicious.X"
            />

            <Feature
              title="Motivational Labs"
              category="NFT/3D Art"
              image="/images/projects/motivational.png"
              description={
                <>
                  Creating immersive 3D art for NFT collections and gaming
                  environments. Our team specializes in high-quality 3D models,
                  animations, and digital experiences.
                </>
              }
              collaborationTasks={[
                "3D Artist",
                "Web Developer",
                "NFT Collection Designer",
              ]}
              twitterLink="https://twitter.com/MotivationaLabs"
              shortTwitterLink="MotivationaLabs"
              domainName="MotivationalLabs.io"
            />

            <Feature
              title="Fantom Fluid"
              category="DeFi"
              image="/images/projects/fantomfluid.png"
              description={
                <>
                  Adapting SuperFluid for the Fantom ecosystem to enable
                  streaming payments and real-time finance. The first streaming
                  payment protocol on Fantom blockchain.
                </>
              }
              collaborationTasks={[
                "Solidity Developer",
                "Front-end Developer",
                "DeFi Protocol Specialist",
              ]}
              twitterLink="https://twitter.com/FantomFluid"
              shortTwitterLink="FantomFluid"
              domainName="FantomFluid.finance"
            />

            <Feature
              title="Happy News DAO"
              category="Media/DAO"
              image="/images/projects/happynews.png"
              description={
                <>
                  Fresh News from Fresh Voices. Empowering emerging journalists
                  with a platform for positive news and crypto compensation.
                  Rebuilding trust in media through transparent,
                  community-driven journalism.
                </>
              }
              collaborationTasks={[
                "Content Writer",
                "Smart Contract Developer",
                "Subscription System Designer",
              ]}
              twitterLink="https://twitter.com/HappyNewsDAO"
              shortTwitterLink="HappyNewsDAO"
              domainName="HappyNews.DAO"
            />

            <div className={styles.showMoreContainer}>
              <Button className={styles.showMoreButton}>
                Explore More Projects{" "}
                <span className={styles.arrowDown}>▼</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Collaboration Process Section */}
      <div className={styles.processWrapper}>
        <Container className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionTitleHighlight}>How</span> It Works
          </h2>

          <div className={styles.processSteps}>
            <div className={styles.processLine}></div>

            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>01</div>
              <div className={styles.processStepContent}>
                <h3 className={styles.processStepTitle}>Discover</h3>
                <p className={styles.processStepDescription}>
                  Browse projects that match your interests and skills. Connect
                  with innovators building the future.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>02</div>
              <div className={styles.processStepContent}>
                <h3 className={styles.processStepTitle}>Contribute</h3>
                <p className={styles.processStepDescription}>
                  Apply your skills to meaningful tasks. Complete work on your
                  own schedule while building your portfolio.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>03</div>
              <div className={styles.processStepContent}>
                <h3 className={styles.processStepTitle}>Verify</h3>
                <p className={styles.processStepDescription}>
                  Submit your work for review. Project owners validate
                  contributions through our transparent process.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>04</div>
              <div className={styles.processStepContent}>
                <h3 className={styles.processStepTitle}>Capitalize</h3>
                <p className={styles.processStepDescription}>
                  Receive crypto tokens for accepted contributions. Build your
                  stake in the projects you help develop.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* List Your Project Section */}
      <div id="list-project" className={styles.listProjectWrapper}>
        <div className={styles.listProjectBackground}></div>
        <Container className={styles.section}>
          <div className={styles.listProjectGrid}>
            <div className={styles.listProjectContent}>
              <h2 className={styles.listProjectTitle}>
                <span className={styles.listProjectTitleHighlight}>
                  Accelerate
                </span>{" "}
                Your Vision
              </h2>
              <p className={styles.listProjectText}>
                Connect with skilled collaborators who can help bring your
                project to life. From UI designers to smart contract developers,
                our ecosystem has the talent you need.
              </p>

              <div className={styles.listProjectBenefits}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>⚡</div>
                  <span>Access global talent</span>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🔐</div>
                  <span>Transparent transactions</span>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🚀</div>
                  <span>Accelerate development</span>
                </div>
              </div>

              <LinkButton
                className={styles.listProjectCTA}
                href="https://collaborating.deform.cc/fantom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Launch Your Project</span>
              </LinkButton>
            </div>

            <div className={styles.listProjectVisual}>
              <div className={styles.projectLaunchAnimation}>
                <div className={styles.launchPlatform}></div>
                <div className={styles.launchRocket}>
                  <div className={styles.rocketBody}></div>
                  <div className={styles.rocketWindow}></div>
                  <div className={styles.rocketFin}></div>
                  <div className={styles.rocketFire}></div>
                </div>
                <div className={styles.launchSmoke}></div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Wall of Collaboration */}
      <div id="wall-of-collaboration" className={styles.wallWrapper}>
        <h2 className={styles.wallTitle}>
          <span className={styles.wallTitleHighlight}>Success</span> Stories
        </h2>
        <p className={styles.wallSubtitle}>
          Celebrating verified collaborations and on-chain payments
        </p>
        <Container className={styles.section}>
          <div className={styles.wallGridContainer}>
            <WallOfCollaboration />
          </div>

          <div className={styles.successMetricsContainer}>
            <div className={styles.successMetric}>
              <div className={styles.metricCircle}>
                <span className={styles.metricNumber}>52</span>
              </div>
              <span className={styles.metricLabel}>
                Completed Collaborations
              </span>
            </div>
            <div className={styles.successMetric}>
              <div className={styles.metricCircle}>
                <span className={styles.metricNumber}>3</span>
              </div>
              <span className={styles.metricLabel}>Blockchains</span>
            </div>
            <div className={styles.successMetric}>
              <div className={styles.metricCircle}>
                <span className={styles.metricNumber}>18</span>
              </div>
              <span className={styles.metricLabel}>Countries</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Join Community Section */}
      <Container className={styles.section}>
        <div className={styles.communityContainer}>
          <div className={styles.communityGlow}></div>
          <h2 className={styles.communityTitle}>Join Our Ecosystem</h2>
          <p className={styles.communityText}>
            Connect with other innovators, share ideas, and stay updated on new
            opportunities.
          </p>

          <div className={styles.socialLinks}>
            <a
              href="https://discord.gg/collaborating"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              Discord
            </a>
            <a
              href="https://twitter.com/_Collaborating"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              Twitter
            </a>
            <a
              href="https://t.me/collaborating"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              Telegram
            </a>
          </div>
        </div>
      </Container>
    </MarketingLayout>
  );
}

// If logged in, redirect to dashboard
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await Server.getServerSession(req, res);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: DASHBOARD_URL,
      },
    };
  }

  return {
    props: {},
  };
};
