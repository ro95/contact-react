// Importation des dépendances nécessaires depuis les modules 'react' et '@mui/material'
import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";

interface FormData {
	nom: string;
	prenom: string;
	fonction: string;
	acceptationMentionsLegales: boolean;
}

// Définition du composant MonFormulaire
function Form() {
	// Déclaration des états formData et errors avec les valeurs initiales
	const [formData, setFormData] = useState({
		nom: "",
		prenom: "",
		fonction: "",
		acceptationMentionsLegales: false,
	});
	const [errors, setErrors] = useState({});

	// Définition de la fonction handleChange qui sera appelée à chaque modification d'un champ du formulaire
	const handleChange = (e) => {
		const { name, value, checked } = e.target;
		setFormData({
			...formData,
			[name]: name === "acceptationMentionsLegales" ? checked : value, // Mise à jour de la valeur du champ modifié dans l'état formData
		});
	};

	// Définition de la fonction handleSubmit qui sera appelée à la soumission du formulaire
	const handleSubmit = (e) => {
		e.preventDefault(); // Empêche la soumission classique du formulaire par le navigateur
		const newErrors = validate(); // Appel de la fonction validate pour vérifier la validité des données
		if (Object.keys(newErrors).length > 0) {
			// Si des erreurs sont trouvées, mise à jour de l'état errors
			setErrors(newErrors);
		} else {
			// Si aucune erreur, les données peuvent être soumises (ici, simplement affichées dans la console)
			console.log("Données soumises:", formData);
		}
	};

	// Définition de la fonction validate qui vérifie la validité des données du formulaire
	const validate = () => {
		const newErrors = {};
		if (!formData.nom) newErrors.nom = "Le champ Nom est obligatoire"; // Vérification que le champ nom est renseigné
		if (!formData.prenom)
			newErrors.prenom = "Le champ Prénom est obligatoire"; // Idem pour le champ prénom
		if (!formData.fonction)
			newErrors.fonction = "Le champ Fonction est obligatoire"; // Idem pour le champ fonction
		if (!formData.acceptationMentionsLegales)
			newErrors.acceptationMentionsLegales =
				"Vous devez accepter les mentions légales"; // Vérification que les mentions légales sont acceptées
		return newErrors; // Retour des éventuelles erreurs trouvées
	};

	// Rendu du composant : un formulaire contenant des champs de texte, une case à cocher et un bouton de soumission
	return (
		<form onSubmit={handleSubmit}>
			{" "}
			<TextField
				label="Nom" // Label du champ
				name="nom" // Nom du champ, utilisé pour identifier le champ dans l'état formData
				value={formData.nom} // Valeur du champ, liée à l'état formData
				onChange={handleChange} // La fonction handleChange est appelée à chaque modification de la valeur du champ
				error={!!errors.nom} // Si un message d'erreur est associé à ce champ dans l'état errors, la prop error est vraie
				helperText={errors.nom} // Le message d'erreur est affiché sous le champ
			/>
			<TextField
				label="Prénom" // Idem pour le champ prénom
				name="prenom"
				value={formData.prenom}
				onChange={handleChange}
				error={!!errors.prenom}
				helperText={errors.prenom}
			/>
			<TextField
				label="Fonction" // Idem pour le champ fonction
				name="fonction"
				value={formData.fonction}
				onChange={handleChange}
				error={!!errors.fonction}
				helperText={errors.fonction}
			/>
			<FormControlLabel
				control={
					// Le composant Checkbox est passé comme enfant de FormControlLabel pour associer la case à cocher à un label
					<Checkbox
						name="acceptationMentionsLegales" // Nom de la case à cocher, utilisé pour identifier le champ dans l'état formData
						checked={formData.acceptationMentionsLegales} // État de la case à cocher, lié à l'état formData
						onChange={handleChange} // La fonction handleChange est appelée à chaque modification de l'état de la case à cocher
					/>
				}
				label="J'accepte les Mentions Légales" // Label associé à la case à cocher
			/>
			<Button type="submit">Valider</Button>
		</form>
	);
}
// Exportation du composant pour pouvoir l'importer ailleurs dans l'application
export default Form;
