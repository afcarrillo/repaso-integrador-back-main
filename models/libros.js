const S = require("sequelize");
const db = require("../db");

class Libros extends S.Model {
  //metodo de clase
  static findStartsWith(character) {
    return Libros.findAll({
      where: {
        titulo: {
          [S.Op.iLike]: `${character}%`,
        },
      },
    });
  }

  //metodo de instancia
  findByAuthor() {
    return Libros.findAll({
      where: {
        autor: {
          [S.Op.eq]: this.autor,
        },
      },
    });
  }
}

Libros.init(
  {
    titulo: {
      type: S.STRING,
    },
    autor: {
      type: S.STRING,
    },
    ventas: {
      type: S.BIGINT,
    },
  },
  { sequelize: db, modelName: "libros" }
);

//hook
Libros.beforeValidate((libro) => {
  if (libro.ventas >= 30000) libro.titulo += " BEST SELLER";
});

module.exports = Libros;
