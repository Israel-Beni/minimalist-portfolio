export const getData = async () => {
    const response = await fetch('data/projects.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const json = await response.json();
    return json.projects;
}