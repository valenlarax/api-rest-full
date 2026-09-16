const dependencies = {};

export const addDependency = (nombre, dependencia) => {
    dependencies[nombre] = dependencia;
};

export const getDependency = (nombre) => {
    return dependencies[nombre];
};