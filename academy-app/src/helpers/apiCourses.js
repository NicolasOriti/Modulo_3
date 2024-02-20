export const getCourses = async () => {
  const response = await fetch(`http://localhost:3000/courses`);
  const data = await response.json();
  console.log(data);

  return data;
};

export const getCourseById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/courses/${id}`);
    const data = response.json();
    console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};

export const createCourse = async (datos) => {
  const response = fetch(`http://localhost:3000/courses`, {
    method: 'POST',
    body: JSON.stringify(datos),
  });
};

export const deleteCourse = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/courses/${id}`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = async (id, datos) => {
  const response = await fetch(`http://localhost:3000/courses/${id}`, {
    method: 'PUT',
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  return data;
};
