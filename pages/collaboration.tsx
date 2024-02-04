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
            href={`https://twitter.com/${collaboratorTwitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${collaborator}`}
          </a>
          {` collaborated with `}
          <a
            href={`https://twitter.com/${protocolTwitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`@${protocol}`}
          </a>
          {` to ${collaborationTask} and will be paid ${paidAmount} allocation for ${month}.`}
        </p>
        <p>{`Transaction Hash: ${transactionHash}`}</p>
        <p>
          Thank you for collaborating @
          <a
            href={`https://twitter.com/${collaboratorTwitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${collaborator}`}
          </a>
          !
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
      transactionHash: "to follow on 2/2/24",
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
