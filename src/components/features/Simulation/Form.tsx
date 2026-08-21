import { PiggyBank } from "lucide-react";
import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";

export function SimulationForm() {
	return (
		<>

			<StepProgress currentStep={0} totalSteps={5} />
			<FormStep
				icon={PiggyBank}
				title="Renda Mensal Bruta"
				question="Quanto é depositado na sua conta todo mês? (Salário, renda extra, etc.)"
			/>
		</>
	)
}