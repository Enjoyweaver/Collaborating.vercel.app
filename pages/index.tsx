import clsx from "clsx";
import { GetServerSideProps } from "next";
import { ComponentProps, ReactNode } from "react";
import { DASHBOARD_URL } from "../constants";
import { MarketingLayout } from "../layouts/Marketing";
import * as Server from "../lib/server";
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
          <h5>Collaboration Tasks</h5>
          <ul>
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
            After your submission on Collaborating.X is reviewed and accepted,
            this is where you will come to sign in and collaborate with that
            protocol. You can learn more about how this collaborative app was
            built below.
          </p>
        </div>

        <div className={styles.heroActions}>
          <LinkButton
            className="mr-10 NavLink product"
            href="https://collaborating.deform.cc/fantom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="effect-1"></div>
            <div className="effect-2"></div>
            <span style={{ color: "var(--nav3)", fontSize: "1.2rem" }}>
              Form to Collaborate
            </span>
          </LinkButton>
          <LinkButton
            href="https://liveblocks.io/docs/guides/nextjs-starter-kit"
            target="_blank"
            variant="secondary"
          >
            Learn more
          </LinkButton>
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>
          The list of projects on Fantom wanting your collaboration.
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
          />
          <Feature
            description={
              <>
                A place for aspiring fashion designers to start their career,
                get global exposure, and to get paid with Fantom.
              </>
            }
            title="DAOsigner Apparel"
          />
          <Feature
            description={
              <>
                All custom client and server functions are fully typed, and easy
                to update.
              </>
            }
            title="DAOlicious"
          />
          <Feature
            description={
              <>
                A DAO for foodies to collaborate on food projects, but this is
                for you to decide what this DAO does, so join the Discord and
                help us decide.
              </>
            }
            title="NextAuth.js"
          />
          <Feature
            description={
              <>
                See data update live using the SWR (state-while-revalidate)
                library.
              </>
            }
            title="SWR"
          />
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>
          The features of this collaborative app which was a template from
          Liveblocks can be seen below.
        </h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                A collaborative whiteboard app with included share menu,
                documents listing, users, groups, permissions, and more.
              </>
            }
            title="Liveblocks"
          />
          <Feature
            description={
              <>
                Best practices followed, using a mixture of SSR and custom API
                endpoints. Modify documents from both client and server.
              </>
            }
            title="Next.js"
          />
          <Feature
            description={
              <>
                Adjust our reusable interface & design system to fit your needs.
              </>
            }
            title="User Interface"
          />
          <Feature
            description={
              <>
                All custom client and server functions are fully typed, and easy
                to update.
              </>
            }
            title="TypeScript"
          />
          <Feature
            description={
              <>
                Complete authentication, compatible with any NextAuth provider,
                including GitHub, Google, Auth0, and many more.
              </>
            }
            title="NextAuth.js"
          />
          <Feature
            description={
              <>
                See data update live using the SWR (state-while-revalidate)
                library.
              </>
            }
            title="SWR"
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
