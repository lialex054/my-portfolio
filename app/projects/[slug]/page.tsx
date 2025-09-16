import { projects } from '@/lib/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Add more project details here, like images or a detailed write-up */}
    </div>
  );
}