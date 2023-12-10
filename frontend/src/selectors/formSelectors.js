export const getDepartmentOptions = (departments) => {
    return Array.isArray(departments)
        ? departments.map((dept) => ({
              value: dept.name,
              label: dept.name,
          }))
        : [];
};

export const getCityOptions = (cities) => {
    return Array.isArray(cities)
        ? cities.map((cty) => ({
              value: cty.name,
              label: cty.name,
          }))
        : [];
};
