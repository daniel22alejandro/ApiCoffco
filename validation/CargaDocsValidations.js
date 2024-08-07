import { check } from "express-validator";

export const documentoValidate = [
  check("nombre", "El nombre es obligatorio")
    .not()
    .isEmpty()
    .withMessage("El nombre no debe estar vacío")
    .isLength({ max: 50 })
    .withMessage("El nombre no debe exceder 50 caracteres"),

  check("descripcion", "La descripción es obligatoria")
    .not()
    .isEmpty()
    .withMessage("La descripción no debe estar vacía")
    .isLength({ max: 200 })
    .withMessage("La descripción no debe exceder 200 caracteres"),

  check("codigo", "El código de documentos es obligatorio")
    .not()
    .isEmpty()
    .withMessage("El código de documentos no debe estar vacío")
    .isLength({ max: 20 })
    .withMessage("El código de documentos no debe exceder 20 caracteres"),

  check("fecha_emision", "La fecha de emisión es obligatoria")
    .not()
    .isEmpty()
    .withMessage("La fecha de emisión no debe estar vacía")
    .isISO8601()
    .withMessage("La fecha de emisión debe estar en formato ISO 8601"),

  check("servicios", "El tipo de servicio es obligatorio")
    .not()
    .isEmpty()
    .withMessage("El tipo de servicio no debe estar vacío")
    .isInt()
    .withMessage("El tipo de servicio debe ser un número entero"),

  check("tipo_documento", "El tipo de documento es obligatorio")
    .not()
    .isEmpty()
    .withMessage("El tipo de documento no debe estar vacío")
    .isInt()
    .withMessage("El tipo de documento debe ser un número entero"),
];
