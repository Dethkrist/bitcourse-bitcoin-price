import Converter from "./Converter";
import DatePrice from "./DatePrice";
import RowContainer from "./layout/RowContainer";

export default function CalculatePage() {
	return (
		<RowContainer>
			<DatePrice />
			<Converter />
		</RowContainer>
	);
}
