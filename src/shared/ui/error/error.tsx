import { ErrorVariations } from "./error-variations";
import { DashboardError, ErrorContainerText, ErrorInput } from "./error.styles";

type Props = {
    type: ErrorVariations,
    children: React.ReactNode,
};

const getErrorType = (type: ErrorVariations) => ({
    [ErrorVariations.INPUT]: ErrorInput,
    [ErrorVariations.DASHBOARD_ERROR]: DashboardError,
}[type]);


const ErrorComponent = ({ children, type }: Props) => {
    const StyledError = getErrorType(type);
    return <StyledError>{children}</StyledError>;
};

const ContainerText = ({ children }: { children: React.ReactNode }) => {
    return <ErrorContainerText>{children}</ErrorContainerText>;
};

ErrorComponent.ErrorContainerText = ContainerText;

export const Error = ErrorComponent;