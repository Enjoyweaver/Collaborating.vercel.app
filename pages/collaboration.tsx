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
  return (
    <div>
      <div className="announcement">
        <p>
          <strong>Collaboration Announcement!</strong>
        </p>
        <p>
          {`@${collaborator} collaborated with @${protocol} to ${collaborationTask} and will be paid ${paidAmount} allocation for ${month}.`}
        </p>
        <p>{`Transaction Hash: ${transactionHash}`}</p>
        <p>Thank you for collaborating @{collaborator}!</p>
      </div>
    </div>
  );
};

// Wall of Collaboration
const WallOfCollaboration: React.FC = () => {
  const collaborationData = [
    {
      collaborator: "BidloPerv",
      protocol: "KissingBeaver",
      collaborationTask: "create twitter logo",
      paidAmount: "the max amount of 10% of the kissing beaver token",
      month: "January",
      transactionHash: "to follow",
    },
    {
      collaborator: "BidloPerv",
      protocol: "_Collaborating",
      collaborationTask: "create discord server",
      paidAmount: "the max amount of 10% of the kissing beaver token",
      month: "January",
      transactionHash: "to follow",
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

export { WallOfCollaboration, Collaboration };
