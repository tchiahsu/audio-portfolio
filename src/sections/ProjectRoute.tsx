import { useParams, Navigate } from "react-router-dom";
import Project from "../components/Project";
import { projectBySlug } from "../data/project";

export default function ProjectRoute() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? projectBySlug[slug] : undefined;

  if (!data) {
    return <Navigate to="/#work" replace />;
  }

  return (
    <Project
      title={data.title}
      subtitle={data.subtitle}
      paragraph={data.paragraph}
      video={data.video}
    />
  );
}