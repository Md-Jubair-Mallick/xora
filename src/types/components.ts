export interface ButtonProps {
    icon?: string;
    children: React.ReactNode;
    href?: string;
    containerClassName?: string;
    onClick?: () => void;
    markerFill?: string;
  }

 export interface FaqItemProps {
    item: {
      id: string;
      question: string;
      answer: string;
    };
    index: number;
  };
  
  export interface MarkerProps  {
    fill?: string;
  };

  type Testimonial = {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    comment: string;
  };

  export interface TestimonialItemProps {
    item: Testimonial;
    containerClassName?: string;
  };
  export type NavLinkProps = {
    title: string;
  };