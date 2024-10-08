import { conexion } from "../database/conexion.js";
import { validationResult } from "express-validator"
export const Estadistica = async (req, res) => {


    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json(error);
        }

        let sql = `
         SELECT 
    ts.nombreServicio,
    COUNT(s.id_servicios) AS cantidad_uso,
    (SELECT COUNT(*) FROM servicios) AS total_servicios
FROM 
    servicios s
JOIN 
    tiposervicio ts ON s.fk_idTipoServicio = ts.idTipoServicio
GROUP BY 
    ts.nombreServicio
ORDER BY 
    cantidad_uso DESC;

        `;
        const [resultado] = await conexion.query(sql);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        }
        else {
            res.status(404).json({ message: "No se encontraron datos" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error en la conexion" + error.message });
    }
}
