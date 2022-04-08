export const getData = async () => {
    const response = await fetch('data/projects.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const json = await response.json();
    console.log('json: ', json);
    console.log('json.projects: ', json.projects);
    console.log('json.projects[0].name: ', json.projects[0].name)
    return json.projects;
}