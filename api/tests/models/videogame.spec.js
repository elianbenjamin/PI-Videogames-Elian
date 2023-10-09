const { Videogame, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Videogame model", () => { 
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));

    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Videogame.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Videogame.create({ name: "Super Mario Bros" });
      });
    });

    describe("description", () => {
      it("should throw an error if description is null", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          description: null, 
        })
          .then(() => done(new Error("It requires a valid description")))
          .catch(() => done());
      });

      it("should work when its a valid description", () => {
        Videogame.create({
          name: "Super Mario Bros",
          description: "A valid description", // Campo 'description' válido
        });
      });
    });
    describe("platforms", () => {
      it("should throw an error if platforms is null", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          platforms: null, // Campo 'platforms' nulo, debe generar un error
        })
          .then(() => done(new Error("It requires valid platforms")))
          .catch(() => done());
      });

      it("should throw an error if platforms is an empty array", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          platforms: [], // Campo 'platforms' vacío, debe generar un error
        })
          .then(() => done(new Error("It requires valid platforms")))
          .catch(() => done());
      });

      it("should work when platforms is a valid array", () => {
        Videogame.create({
          name: "Super Mario Bros",
          platforms: ["Nintendo Switch", "Nintendo 3DS"], // Campo 'platforms' válido
        });
      });
    });
    describe("released", () => {
      it("should throw an error if released is null", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          released: null, // Campo 'released' nulo, debe generar un error
        })
          .then(() => done(new Error("It requires a valid release date")))
          .catch(() => done());
      });

      it("should throw an error if released is not in a valid date format", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          released: "Invalid Date Format", // Campo 'released' en formato no válido, debe generar un error
        })
          .then(() => done(new Error("It requires a valid release date")))
          .catch(() => done());
      });

      it("should work when released is in a valid date format", () => {
        Videogame.create({
          name: "Super Mario Bros",
          released: "2023-10-09", // Campo 'released' en formato válido
        });
      });
    });
    describe("background_image", () => {
      it("should throw an error if background_image is null", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          background_image: null, // Campo 'background_image' nulo, debe generar un error
        })
          .then(() =>
            done(new Error("It requires a valid background image URL"))
          )
          .catch(() => done());
      });

      it("should throw an error if background_image is not a valid URL", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          background_image: "Invalid URL", // Campo 'background_image' en formato no válido, debe generar un error
        })
          .then(() =>
            done(new Error("It requires a valid background image URL"))
          )
          .catch(() => done());
      });

      it("should work when background_image is a valid URL", () => {
        Videogame.create({
          name: "Super Mario Bros",
          background_image: "https://example.com/image.jpg", // Campo 'background_image' en formato válido
        });
      });
    });
    describe("rating", () => {
      it("should throw an error if rating is null", (done) => {
        Videogame.create({
          name: "Super Mario Bros",
          rating: null,
        })
          .then(() => done(new Error("It requires a valid rating")))
          .catch(() => done());
      });
      it("It should throw an error if the number is not valid.", () => {
        Videogame.create({
          name: "Super Mario Bros",
          rating: 0.5,
        })
          .then(() =>
            done(new Error("The rating should be between 1 and 5 stars"))
          )
          .catch(() => done());
      });
      it("should work when rating is within the valid range", () => {
        Videogame.create({
          name: "Super Mario Bros",
          rating: 4,
        });
      });
    });
  });
});
