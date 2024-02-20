export const getProgramById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/programs?id_curso=${id}`);

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
