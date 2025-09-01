import project1 from "../assets/thumbnail/project1.jpg";
import project2 from "../assets/thumbnail/project2.jpg";
import project3 from "../assets/thumbnail/project3.jpg";
import project4 from "../assets/thumbnail/project4.jpg";
import project5 from "../assets/thumbnail/project5.jpg";
import project6 from "../assets/thumbnail/project6.jpg";
import project7 from "../assets/thumbnail/project7.jpg";
import project8 from "../assets/thumbnail/project8.jpg";
import project9 from "../assets/thumbnail/project9.jpg";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";
import video9 from "../assets/videos/video9.mp4";

export type ProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  paragraph: string;
  video: string;
  thumb: string;
};

export const projects: ProjectData[] = [
  { slug: "project1", title: "Project 1", subtitle: "Subtitle 1", paragraph: "Description 1", video: video1, thumb: project1 },
  { slug: "project2", title: "Project 2", subtitle: "Subtitle 2", paragraph: "Description 2", video: video2, thumb: project2 },
  { slug: "project3", title: "Project 3", subtitle: "Subtitle 3", paragraph: "Description 3", video: video3, thumb: project3 },
  { slug: "project4", title: "Project 4", subtitle: "Subtitle 4", paragraph: "Description 4", video: video4, thumb: project4 },
  { slug: "project5", title: "Project 5", subtitle: "Subtitle 5", paragraph: "Description 5", video: video5, thumb: project5 },
  { slug: "project6", title: "Project 6", subtitle: "Subtitle 6", paragraph: "Description 6", video: video6, thumb: project6 },
  { slug: "project7", title: "Project 7", subtitle: "Subtitle 7", paragraph: "Description 7", video: video7, thumb: project7 },
  { slug: "project8", title: "Project 8", subtitle: "Subtitle 8", paragraph: "Description 8", video: video8, thumb: project8 },
  { slug: "project9", title: "Project 9", subtitle: "Subtitle 9", paragraph: "Description 9", video: video9, thumb: project9 },
];

export const projectBySlug = Object.fromEntries(projects.map(p => [p.slug, p]));