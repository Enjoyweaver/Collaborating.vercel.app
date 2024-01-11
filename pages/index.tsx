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
  collaborationTasks?: string[]; // Added collaborationTasks prop
}

function Feature({
  title,
  description,
  collaborationTasks,
  className,
  ...props
}: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
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
            Review the items and projects below wanting your collaboration, and
            if you want to complete them then fill out the form below. Whether
            you want to list your project or list your skills for collaboration,
            this is the place to do it and you can fill out the same form below,
            which was created using DeForm App.
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
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                Members fund the rental / purchase of a DAOstination and
                examples could be a large house for themselves for ETH Denver or
                a downtown bungalow in San Francisco that each member gets a
                week out of the year.
              </>
            }
            title="DAOstination DAO"
            collaborationTasks={[
              "Create website UI/UX",
              "Write smart contracts",
              "DAO manager",
            ]}
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
          />
          <Feature
            description={
              <>
                Adjust our reusable interface & design system to fit your needs.
              </>
            }
            title="DAOsigner Apparel"
            collaborationTasks={[
              "Design and build crypto payment system",
              "Help design and build the UI/UX to pay DAOsigners",
            ]}
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
