// components/ProjectCard.js

import Link from 'next/link';

export default function ProjectCard({ title, description, slug }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/projects/${slug}`}>
        <p>View Project</p>
      </Link>
    </div>
  );
}