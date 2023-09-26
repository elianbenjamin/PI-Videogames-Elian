const { DataTypes } = require('sequelize'); 
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      /* autoIncrement:true */ //Para solucionar este problema, debes elegir entre UUID o SERIAL para la columna id, pero no ambos.
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull:false
      },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
   
  },{ timestamps: false });
};









/* //? INFORMACION SOBRE DataTypes

?Este objeto suele contener definiciones de tipos de datos que se utilizan al definir modelos de bases de datos con Sequelize, un ORM (Object-Relational Mapping) para bases de datos relacionales en Node.js. Puedes usar DataTypes para especificar los tipos de datos de los campos de tus modelos de base de datos al definirlos con Sequelize.
*/

 /* //*INFORMACION SOBRE LOS MODELOS.
 
 *Los MODELOS son la esencia de Sequelize. Un modelo es una abstracción que representa una tabla en su base de datos. En Sequelize, es una clase que se extiende Modelo.

 *El modelo le dice a Sequelize varias cosas sobre la entidad que representa, como el nombre de la tabla en la base de datos y qué columnas tiene ( y sus tipos de datos )

 *Un modelo en Sequelize tiene un nombre. Este nombre no tiene que ser el mismo nombre de la tabla que representa en la base de datos. Por lo general, los modelos tienen nombres singulares ( como User) mientras que las tablas tienen nombres pluralizados ( como Users), aunque esto es totalmente configurable.

 */

/* //todo   INFORMACION SOBRE TIPOS DE DATOS.

todo: allowNull: false, se utiliza al definir un campo en un modelo de base de datos y significa que ese campo no puede contener valores nulos (null),

todo: DataTypes.FLOAT, es un tipo de dato que representa un número de punto flotante (es decir, un número decimal) en una base de datos.


todo: Los UUID significa "Universally Unique Identifier" (Identificador Único Universal, en español). Es un tipo de dato utilizado en muchas bases de datos para generar identificadores únicos para registros. Se utiliza para garantizar que cada registro tenga un identificador único en todo el sistema y evitar posibles colisiones o duplicaciones de datos.

todo: Al utilizar defaultValue: DataTypes.UUIDV4, estás configurando el campo para que, cuando se inserte un nuevo registro en la base de datos y no se especifique un valor para ese campo en particular, se generará automáticamente un nuevo UUID utilizando la función uuid_generate_v4() de PostgreSQL (o la función equivalente de la base de datos que estés utilizando).
*/