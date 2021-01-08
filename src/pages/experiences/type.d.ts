import { ReactNode } from "react";

type Experiences = {
  id: number | string;
  startTime: string;
  endTime: string | "Present";
  postion: string;
  companyName: string;
  description: string[];
};
