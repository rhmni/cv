const useProject = (selectedTag, data) => {

    const projects = data.filter(project => project.tag === selectedTag);

    const projectLength = projects.length;

    return [projects, projectLength]
}

export default useProject;