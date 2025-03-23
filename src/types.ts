export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  message: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface KeyDataPoint {
  title: string;
  value: string;
  icon: React.ComponentType;
}