import clsx from "clsx";
import { GetServerSideProps } from "next";
import { ComponentProps, ReactNode } from "react";
import { DASHBOARD_URL } from "../constants";
import { MarketingLayout } from "../layouts/Marketing";
import * as Server from "../lib/server";
import { LinkButton } from "../primitives/Button";
import { Container } from "../primitives/Container";
import styles from "./index.module.css";

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
  collaborationTasks?: string[];
  twitterLink?: string; // Add the twitterLink property
}

function Feature({
  title,
  description,
  collaborationTasks,
  className,
  twitterLink, // Add a new prop for the Twitter link
  ...props
}: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>
        {twitterLink ? ( // Check if twitterLink is provided
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
      {collaborationTasks && (
        <div className={styles.collaborationTasks}>
          <h5 className={styles.collaborationTasksTitle}>
            Collaboration Tasks
          </h5>
          <ul className={styles.collaborationTasksList}>
            {collaborationTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Index() {
  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle} style={{ whiteSpace: "nowrap" }}>
            Collaborating on Fantom
          </h1>
          <p className={styles.heroLead}>
            Everyone is invited to collaborate here on Fantom by completing a
            task or by listing a task needing collaboration.
          </p>
          <br />
          <p className={styles.heroLead}>
            Whether you want to list your project or list your skills for
            collaboration, this is the place to do it and you can fill out the
            same form below, which was created using DeForm App.
          </p>
          <br />
          <p className={styles.heroLead}>
            As of now, all collaboration will be funded with the Kissing Beaver
            token, which was created solely to fund collaboration on Fantom.
            Starting February 1st, 2024 and each month for the next 24 months,
            we will receive 273,420,000
            <a
              href="https://ftmscan.com/token/0x20f4e1977be369ac53e847715aaeb9e0f3302ccb"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWithSpace}
            >
              $beaver
            </a>
            tokens and distribute them to the collaborators for that month.
          </p>
        </div>

        <div className={styles.heroActions}>
          <LinkButton
            className="mr-10 NavLink product"
            href="https://collaborating.deform.cc/fantom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Form to Collaborate</span>
          </LinkButton>
          <LinkButton
            href="https://liveblocks.io/docs/guides/nextjs-starter-kit"
            target="_blank"
            variant="secondary"
          >
            Learn more about this collaboration app
          </LinkButton>
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Current projects wanting your collaboration
        </h2>
        <h4 className={styles.sectionSubtitle}>
          Clicking on the projects title will navigate you to their twitter.
        </h4>
        <div className={styles.featuresGrid}>
          <Feature
            title="DAOstination DAO"
            description={
              <>
                Members fund the rental / purchase of a DAOstination and
                examples could be a large house for themselves for ETH Denver or
                a downtown bungalow in San Francisco that each member gets a
                week out of the year.
              </>
            }
            collaborationTasks={[
              "Create website UI/UX",
              "Write smart contracts",
              "DAO manager",
            ]}
            twitterLink="https://twitter.com/DAOstination"
          />

          <Feature
            description={
              <>
                Where projects come to collaborate on Fantom. Whether you need
                collaboration or want to collaborate, this is where you
                collaborate on Fantom.
              </>
            }
            title="Collaborating"
            collaborationTasks={[
              "Design and build smart contracts to pay collaborators",
              "Help design and build the UI/UX to pay collaborators",
              "DAO manager",
            ]}
            twitterLink="https://twitter.com/_Collaborating"
          />
          <Feature
            description={
              <>
                A place for aspiring fashion designers to start their career,
                get global exposure, and to get paid with Fantom.
              </>
            }
            title="DAOsigner Apparel"
            collaborationTasks={[
              "Design and build crypto payment system",
              "Help design and build the UI/UX to pay DAOsigners",
            ]}
            twitterLink="https://twitter.com/DAOsignrApparel"
          />
          <Feature
            description={
              <>
                A DAO for foodies to collaborate on food projects, but this is
                for you to decide what this DAO does, so join the Discord and
                help us decide.
              </>
            }
            title="DAOlicious"
            collaborationTasks={[
              "Create logo and banner",
              "Brainstorm DAO ideas",
            ]}
            twitterLink="https://twitter.com/_DAOlicious"
          />
          <Feature
            description={
              <>
                Making 3D art for projects on Fantom, whether its NFTs or 3D
                models for games, we are here to collaborate.
              </>
            }
            title="Motivate Labs"
            collaborationTasks={[
              "Create 3D logo",
              "Design and build website",
              "Create NFTs for almost every project listed here",
            ]}
            twitterLink="https://twitter.com/Motivate__Labs"
          />
          <Feature
            description={
              <>
                Forking SuperFluid to make Fantom Fluid, which will be the first
                DeFi protocol on Fantom that allows for streaming payments.
              </>
            }
            title="Fantom Fluid"
            collaborationTasks={[
              "Assist in implementing Fantom Fluid",
              "Design and build website",
            ]}
            twitterLink="https://twitter.com/FantomFluid"
          />
          <Feature
            description={
              <>
                Fresh News from Fresh Voices. Happy News is where new
                journalists start their career, propvide fresh news, and get
                paid with Fantom.
              </>
            }
            title="Happy News DAO"
            collaborationTasks={[
              "Write fresh news articles",
              "Write smart contracts to pay journalists in fantom daily",
              "Design subscription system",
            ]}
            twitterLink="https://twitter.com/HappyNewsDAO"
          />
          <Feature
            description={
              <>
                Provenance DeFi will be where you on-board fiat to Fantom and
                where artists prove provenance and get paid forever for their
                work.
              </>
            }
            title="Provenace DeFi"
            collaborationTasks={[
              "Help design a swap that favors the artists and daily users",
              "Design and build website",
            ]}
            twitterLink="https://twitter.com/ProvenanceDeFi"
          />
          <Feature
            description={
              <>
                Some writers deserve to be onchain, some stories deserve to be
                read on a timeline, but all authors deserve to be paid fairly.
              </>
            }
            title="Write On DAO"
            collaborationTasks={[
              "Create logo and banner",
              "Design and build website",
              "Help design and build the UI/UX to pay authors and writers",
            ]}
            twitterLink="https://twitter.com/WriteOnDAO"
          />
          <Feature
            description={
              <>
                Members fund and decide on the documentary to be made and the
                DAOcumentary DAO will make it happen.
              </>
            }
            title="DAOcumentary DAO"
            collaborationTasks={[
              "Create logo and banner",
              "Brainstorm DAO ideas",
            ]}
            twitterLink="https://twitter.com/DAOcumentaryDAO"
          />
          <Feature
            description={
              <>
                A DAO for you to decide with to do with, so join the Discord and
                help us decide.
              </>
            }
            title="inDAOpendent"
            collaborationTasks={[
              "Create logo and banner",
              "Brainstorm inDAOpendent ideas",
              "Design and build website",
              "DAO manager",
            ]}
            twitterLink="https://twitter.com/inDAOpendent"
          />
          <Feature
            description={
              <>
                This is a DAO for you to decide what to do with, but I imagine
                this DAO encompassing the most enthusiastic DAO-believers.
              </>
            }
            title="DAO_or_Die"
            collaborationTasks={[
              "Create logo and banner",
              "Brainstorm DAO_or_Die ideas",
              "Design and build website",
            ]}
            twitterLink="https://twitter.com/DAO_or_Die"
          />
          <Feature
            description={
              <>
                A DAO for you to decide what to do with though will probably
                fund DAO startups that propel Fantom forward.
              </>
            }
            title="inDAOment"
            collaborationTasks={[
              "Create logo and banner",
              "Brainstorm inDAOment ideas",
              "Design and build website",
            ]}
            twitterLink="https://twitter.com/inDAOment"
            s
          />
          <Feature
            description={
              <>Where DAO's will be defined, ranked, and accredited.</>
            }
            title="in_DAO_We_Trust"
            collaborationTasks={[
              "Create logo and banner",
              "Design and build website",
            ]}
            twitterLink="https://twitter.com/in_DAO_We_Trust"
          />
          <Feature
            description={
              <>
                Where members fund solar farms, own each panel individually, and
                get paid for the energy produced in Fantom.
              </>
            }
            title="Rayvolution DAO"
            collaborationTasks={[
              "Help design DAO and sub-DAOs",
              "Design and build website",
              "Create discord for future members",
            ]}
            twitterLink="https://twitter.com/RayvolutionDAO"
          />
          <Feature
            description={
              <>
                Yup, you read that right that, this is different than
                inDAOpendent. So you decide what it does and how and get paid
                for it.
              </>
            }
            title="inDAOpendence"
            collaborationTasks={[
              "Brainstorm inDAOpendent ideas",
              "Design and build website",
              "DAO manager",
            ]}
            twitterLink="https://twitter.com/inDAOpendent"
          />
          <Feature
            description={
              <>
                NFT's that create a collage once they are all purchased and
                visible on our website. Each collage will be displayed one at a
                time on our website and then sold with the profits supporting
                the artist. Lets see how artistic you can get.
              </>
            }
            title="Collage DAO"
            collaborationTasks={[
              "NFT artists",
              "Improve website",
              "Write smart contracts identify NFT holders and displaying the collages.",
            ]}
          />
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
