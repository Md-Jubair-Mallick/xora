import type { JSX } from "react";

export type Feature = {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: {
    icon: string;
    title: string;
  };
};
export type Detail = {
  id: string;
  icon: string;
  title: string;
};
export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
export type Plan = {
  id: string;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  caption: string;
  features: string[];
  icon: string;
  logo: string;
};
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
};
export type Logo = {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
};
export type Link = {
  id: string;
  title: string;
  icon: JSX.Element;
  url: string;
};

export type Social = {
  id: string;
  title: string;
  icon: string;
  url: string;
};
