export interface Job {
    id: number;
    title: string;
    companyName: string;
    companyLogo: string;
    types: string[];
    industries: string[];
    publishDate: Date;
    location: string;
    reference: string;
    description: string;
    favorite: boolean;
  }
  