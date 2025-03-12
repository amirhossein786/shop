
const commonQuestions = [
  {
    question: "Can i order over the phone?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled to make type.",
  },
  {
    question: "I am having difficulty placing an order?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled to make type.",
  },
  {
    question: "What payment methods does accept?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled to make type.",
  },
  {
    question: "Can i amend my order once placed?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled to make type.",
  },
  {
    question: "How do i know if my order was successful?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled to make type.",
  },
  {
    question: "What if my order is incorrect?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled to make type.",
  },
];

export const faqData = {
  general: commonQuestions,
  shopping: commonQuestions,
  payment: commonQuestions,
  orders: commonQuestions,
  ordering: commonQuestions,
  help: commonQuestions,
};


import {
  BiFile,
  BiShoppingBag,
  BiCreditCard,
  BiBox,
  BiCart,
  BiInfoCircle,
} from "react-icons/bi";

export const categories = [
  { name: "General", icon: <BiFile className="mr-2" />, key: "general" },
  { name: "Shopping information", icon: <BiShoppingBag className="mr-2" />, key: "shopping" },
  { name: "Payment information", icon: <BiCreditCard className="mr-2" />, key: "payment" },
  { name: "Orders and returns", icon: <BiBox className="mr-2" />, key: "orders" },
  { name: "Ordering from crafto", icon: <BiCart className="mr-2" />, key: "ordering" },
  { name: "Help and support", icon: <BiInfoCircle className="mr-2" />, key: "help" },
];
