export interface CourseInfo {
  title: string;
  code: string;
  instructor: string;
  semester: string;
  description: string;
  objectives: string[];
}

export interface Week {
  number: number;
  title: string;
  description: string;
  topics: string[];
  homework: Array<{
    id?: string;
    name: string;
    type: string;
    url?: string;
    description?: string;
  }>;
}

export interface GroupMember {
  name: string;
  code: string;
}

export interface OtherGroup {
  id: number;
  name: string;
  url: string;
}
