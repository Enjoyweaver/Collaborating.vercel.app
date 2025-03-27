import clsx from "clsx";
import { GetServerSideProps } from "next";
import { ComponentProps, ReactNode } from "react";
import { DASHBOARD_URL } from "../constants";
import { MarketingLayout } from "../layouts/Marketing";
import * as Server from "../lib/server";
import { LinkButton, Button } from "../primitives/Button";
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
  image?: string; // New prop for project image
  category?: string; // New prop for project category
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
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <div className={styles.heroWrapper}>
        <Container className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Build Together,{" "}
              <span className={styles.heroTitleAccent}>Earn Together</span>
            </h1>

            <p className={styles.heroLead}>
              Collaborating is the bridge connecting innovative projects with
              skilled contributors. Complete tasks, build your portfolio, and
              get rewarded with crypto tokens.
            </p>

            <div className={styles.heroActions}>
              <LinkButton
                className={styles.primaryCTA}
                href="https://collaborating.deform.cc/fantom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Start Collaborating</span>
              </LinkButton>

              <LinkButton className={styles.secondaryCTA} href="#list-project">
                <span>List Your Project</span>
              </LinkButton>
            </div>
          </div>

          <div className={styles.heroGraphic}>
            {/* Animated connection lines could go here */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>37+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Collaborators</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>$45k+</span>
                <span className={styles.statLabel}>Rewards Paid</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* How It Works Section */}
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>How Collaborating Works</h2>

        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>👥</div>
            <h3 className={styles.processTitle}>Connect</h3>
            <p className={styles.processDescription}>
              Projects list their tasks and the specific skills they need.
              Contributors find opportunities that match their expertise.
            </p>
          </div>

          <div className={styles.processCard}>
            <div className={styles.processIcon}>🔨</div>
            <h3 className={styles.processTitle}>Contribute</h3>
            <p className={styles.processDescription}>
              Complete tasks on your own schedule. Submit your work and get
              feedback directly from project owners.
            </p>
          </div>

          <div className={styles.processCard}>
            <div className={styles.processIcon}>💰</div>
            <h3 className={styles.processTitle}>Collect</h3>
            <p className={styles.processDescription}>
              Get paid in crypto tokens when your contribution is accepted.
              Build your portfolio and reputation.
            </p>
          </div>
        </div>
      </Container>

      {/* Project Listing Section */}
      <div id="projects" className={styles.projectsWrapper}>
        <Container className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Projects Seeking Collaboration
          </h2>

          <div className={styles.filterContainer}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={clsx(
                  styles.filterButton,
                  index === 0 && styles.filterButtonActive
                )}
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

            {/* Display Show More button after the first 6 projects */}
            <div className={styles.showMoreContainer}>
              <Button className={styles.showMoreButton}>
                Show More Projects <span className={styles.arrowDown}>▼</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Value Proposition Section */}
      <Container className={styles.section}>
        <div className={styles.valueGrid}>
          <div className={styles.valueContent}>
            <h2 className={styles.valueTitle}>Why Use Collaborating?</h2>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🌐</div>
              <div>
                <h3 className={styles.valueItemTitle}>Global Talent Network</h3>
                <p className={styles.valueItemText}>
                  Access skilled contributors from around the world and scale
                  your project faster.
                </p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🔐</div>
              <div>
                <h3 className={styles.valueItemTitle}>Transparent Rewards</h3>
                <p className={styles.valueItemText}>
                  All payments are on-chain, verifiable, and secure. No
                  middlemen, no delays.
                </p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🚀</div>
              <div>
                <h3 className={styles.valueItemTitle}>Own What You Build</h3>
                <p className={styles.valueItemText}>
                  Contributors receive tokens that can appreciate in value as
                  projects grow.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.valueImage}>
            {/* Placeholder for value image */}
          </div>
        </div>
      </Container>

      {/* List Your Project Section */}
      <div id="list-project" className={styles.listProjectWrapper}>
        <Container className={styles.section}>
          <div className={styles.listProjectContent}>
            <h2 className={styles.listProjectTitle}>
              Got a Project? Need Help?
            </h2>
            <p className={styles.listProjectText}>
              List your project on Collaborating and connect with talented
              contributors who can help bring your vision to life. From UI
              designers to smart contract developers, our community has the
              skills you need.
            </p>

            <div className={styles.listProjectSteps}>
              <div className={styles.listProjectStep}>
                <span className={styles.stepNumber}>1</span>
                <span className={styles.stepText}>
                  Fill out our simple project form
                </span>
              </div>
              <div className={styles.listProjectStep}>
                <span className={styles.stepNumber}>2</span>
                <span className={styles.stepText}>
                  Specify the skills you need
                </span>
              </div>
              <div className={styles.listProjectStep}>
                <span className={styles.stepNumber}>3</span>
                <span className={styles.stepText}>
                  Connect with talented contributors
                </span>
              </div>
            </div>

            <LinkButton
              className={styles.listProjectCTA}
              href="https://collaborating.deform.cc/fantom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>List Your Project</span>
            </LinkButton>
          </div>
        </Container>
      </div>

      {/* Wall of Collaboration */}
      <div id="wall-of-collaboration" className={styles.wallWrapper}>
        <h2 className={styles.wallTitle}>Wall of Collaboration</h2>
        <p className={styles.wallSubtitle}>
          Celebrating successful collaborations and on-chain payments
        </p>
        <Container className={styles.section}>
          <WallOfCollaboration />

          <div className={styles.successMetricsContainer}>
            <div className={styles.successMetric}>
              <span className={styles.metricNumber}>52</span>
              <span className={styles.metricLabel}>
                Completed Collaborations
              </span>
            </div>
            <div className={styles.successMetric}>
              <span className={styles.metricNumber}>3</span>
              <span className={styles.metricLabel}>Blockchains</span>
            </div>
            <div className={styles.successMetric}>
              <span className={styles.metricNumber}>18</span>
              <span className={styles.metricLabel}>Countries</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Join Community Section */}
      <Container className={styles.section}>
        <div className={styles.communityContainer}>
          <h2 className={styles.communityTitle}>Join Our Community</h2>
          <p className={styles.communityText}>
            Connect with other collaborators, share ideas, and stay updated on
            new opportunities.
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
