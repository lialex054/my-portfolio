import React from 'react'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <div>
      <div>My Projects</div>
      <div>Here are some projects that I've worked on throughout the years:</div>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default page