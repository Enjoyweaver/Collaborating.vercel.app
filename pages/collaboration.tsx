// collaboration.tsx

import React from "react";
import styles from "./index.module.css";

interface CollaborationItem {
  collaborator: string;
  protocol: string;
  collaborationTask: string;
  paidAmount: string;
  month: string;
  transactionHash: string;
}

const Collaboration: React.FC<CollaborationItem> = ({
  collaborator,
  protocol,
  collaborationTask,
  paidAmount,
  month,
  transactionHash,
}) => {
  const collaboratorTwitterHandle = collaborator.replace(/^@/, ""); // Remove "@" from the handle
  const protocolTwitterHandle = protocol.replace(/^@/, ""); // Remove "@" from the handle

  return (
    <div>
      <div className={styles.announcement}>
        <p>
          <strong>Collaboration Announcement!</strong>
        </p>
        <p>
          {`@`}
          <a
            className={styles.lightBlueLink} // Apply the new class here
            href={`https://twitter.com/${collaboratorTwitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${collaborator}`}
          </a>
          {` collaborated with `}
          <a
            className={styles.lightBlueLink} // Apply the new class here
            href={`https://twitter.com/${protocolTwitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`@${protocol}`}
          </a>
          {` to ${collaborationTask} and will be paid ${paidAmount} allocation for ${month}.`}
        </p>

        <p>
          Thank you for collaborating @
          <a
            className={styles.lightBlueLink} // Apply the new class here
            href={`https://twitter.com/${collaboratorTwitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${collaborator}`}
          </a>
          !
        </p>
        <p>
          The transaction hash is{" "}
          <a
            className={styles.lightBlueLink} // Apply the new class here
            href={`${transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${transactionHash}`}
          </a>
        </p>
      </div>
    </div>
  );
};

const WallOfCollaboration: React.FC = () => {
  const collaborationData = [
    {
      collaborator: "BidloPerv",
      protocol: "KissingBeaver",
      collaborationTask: "create twitter logo",
      paidAmount: "the max amount of 10% of the kissing beaver token",
      month: "January",
      transactionHash:
        "https://ftmscan.com/tx/0x654c64a91c6eae704897189827df6d8a818ae6be33e2e901601c7a74d350e6e2",
    },
    {
      collaborator: "BidloPerv",
      protocol: "_Collaborating",
      collaborationTask: "create discord server",
      paidAmount: "the max amount of 10% of the kissing beaver token",
      month: "January",
      transactionHash:
        "https://ftmscan.com/tx/0x79be2545170fe5b0423efbc705171e68e1b0f4c1d46adc2e8835e6261a5ac098",
    },
  ];

  return (
    <>
      {collaborationData.map((data, index) => (
        <Collaboration key={index} {...data} />
      ))}
    </>
  );
};

export default WallOfCollaboration;
