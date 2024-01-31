import Profile1 from "../../assets/customers/profile1.png";
import Profile2 from "../../assets/customers/profile2.png";
import Profile3 from "../../assets/customers/profile3.png";
import Profile4 from "../../assets/customers/profile4.png";
import ChatProfile1 from "../../assets/chats/chatProfile1.png";
import ChatProfile2 from "../../assets/chats/chatProfile2.png";
import ChatProfile3 from "../../assets/chats/chatProfile3.png";
import ChatProfile4 from "../../assets/chats/chatProfile4.png";

const customerData = [
  {
    profilePic: Profile1,
    name: "Chris Friedkly",
    company: "Supermarket Villanova",
    dateCreated: "2023-01-15",
  },
  {
    profilePic: Profile2,
    name: "Jenna Sullivan",
    company: "Walmart",
    dateCreated: "2023-04-05",
  },
  {
    profilePic: Profile3,
    name: "Gael Harry",
    company: "New York Finest Fruits",
    dateCreated: "2023-02-10",
  },
  {
    profilePic: Profile4,
    name: "Maggie Johnson",
    company: "Oasis Organic Inc.",
    dateCreated: "2023-03-22",
  },
];

const messages = [
  { profilePic: ChatProfile1, read: false },
  { profilePic: ChatProfile2, read: false },
  { profilePic: ChatProfile3, read: true },
  { profilePic: ChatProfile4, read: true },
];

const topStates = [
  { stateInitial: "NY", profit: "120000" },
  { stateInitial: "MA", profit: "80000" },
  { stateInitial: "NH", profit: "70000" },
  { stateInitial: "OR", profit: "50000" },
];

const newDeals = [
  { name: "Fruit2Go", added: false },
  { name: "Marshall's MKT", added: false },
  { name: "CCNT", added: true },
  { name: "Joana Mini-market", added: false },
  { name: "Little Brazil Vegan", added: true },
  { name: "Target", added: false },
  { name: "Orgnaic Place", added: false },
  { name: "Morello's", added: false },
];

const topBuyer = {
  profilePic: Profile4,
  name: "Maggie Johnson",
  company: "Oasis Organic Inc.",
  dateCreated: "2023-03-22",
};

const quarterGoal = 84;

export { customerData, messages, topStates, newDeals, topBuyer, quarterGoal };
