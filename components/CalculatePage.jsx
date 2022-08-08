import Converter from "./Converter";
import DatePrice from "./DatePrice";
import RowContainer from "./Layout/RowContainer";

export default function CalculatePage() {
	return (
		<RowContainer>
			<DatePrice />
			<Converter />
		</RowContainer>
	);
}
