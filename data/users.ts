import { User } from "../types";

/**
 * This array simulates a database consisting of a list of users.
 * After signing up with your auth solution (e.g. GitHub, Auth0)
 * place your user info in an object, with the email address you used
 * as the id.
 * The groupIds are the names of the groups the user is part of.
 * Group info is in /data/groups.ts
 */
export const users: Omit<User, "color">[] = [
  /*
  {
    id: "[YOUR EMAIL ADDRESS]",
    name: "[YOUR DISPLAY NAME]",
    avatar: "https://liveblocks.io/avatars/avatar-0.png",
    groupIds: ["product", "engineering", "design"],
  },
  */
  {
    id: "enjoyweaver@gmail.com",
    name: "Michael Weaver",
    avatar: "https://liveblocks.io/avatars/avatar-2.png",
    groupIds: [
      "Creators",
      "Collaborators",
      "Collaborating",
      "Love on FTM",
      "Bedrock Finance",
      "DAOstination",
    ],
  },
  {
    id: "sheepstitsmead@gmail.com",
    name: "Bidlo Perv",
    avatar: "https://liveblocks.io/avatars/avatar-3.png",
    groupIds: ["Love on FTM", "Kissing Beaver"],
  },
];
