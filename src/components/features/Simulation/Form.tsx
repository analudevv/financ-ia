import { simulationFormSteps, type SimulationFormData } from "@/data/simulation";
import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";
import { useState } from "react";
import { useSimulationStorage } from "@/hooks/useSimulationStorage";
import { useNavigate } from "react-router-dom";

export const SimulationForm = () => {
	const { saveFormData } = useSimulationStorage()
	const [formData, setFormData] = useState<SimulationFormData>(
		{} as SimulationFormData
	)
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const totalSteps = simulationFormSteps.length;
	const currentStep = simulationFormSteps[currentStepIndex];

	const navigate = useNavigate()

	const handleNextStep = (value: string) => {
		const updateFormData = { ...formData, [currentStep.id]: value }
		setFormData(updateFormData)


		if (currentStepIndex + 1 > totalSteps - 1) {
			saveFormData(updateFormData)
			void navigate('/result')
			return;
		}

		setCurrentStepIndex((prev) => prev + 1);
	};

	const handlePreviousStep = () => {
		if (currentStepIndex === 0) {
			return;
		}
		setCurrentStepIndex((prev) => prev - 1);
	};

	return (
		<>
			<StepProgress currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
			<FormStep
				key={currentStep.id}
				{...currentStep}
				onBack={handlePreviousStep}
				onNext={handleNextStep}
				hideBackButton={currentStepIndex === 0}
			/>
		</>
	)
}

