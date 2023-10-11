const validation = (error) => {
  const errors = {};

  if (error.name.length < 2) {
    errors.name = "Minimum two characters";
  }
  if (error.name.length > 20) {
    errors.name = "Maximum 20 characters";
  }
  if (/[^a-zA-Z0-9\s]+/.test(error.name)) {
    errors.name = "Invalid characters";
  }
  if (!/^(http|https):\/\/[^ "]+$/.test(error.background_image)) {
    errors.background_image = "The image is not a valid URL";
  }
  if (!/^[a-zA-Z0-9\s.,!?()-]*$/.test(error.description)) {
    errors.description = "The description is not valid";
  }
  if (error.description.length < 10) {
    errors.description = "The description is very short";
  }
  if (!/^(1(\.0)?|[2-4](\.\d+)?|5(\.0)?)$/.test(error.rating)) {
    errors.rating = "Must be decimal between 1.0-5.0";
  }
  if (/^[a-zA-Z0-9\s,]*$/.test(error.platforms)) {
  } else {
    errors.platforms = "The string must not contain symbols.";
  }
  
  if (/^[a-zA-Z0-9\s,]*$/.test(error.genres)) {
} else {
  errors.genres = "The string must not contain symbols.";
}

  return errors;
};

export default validation;
