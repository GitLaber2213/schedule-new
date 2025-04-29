import { LoaderVariations } from "./loader-variations";
import { LoaderContainer, SmallLoader, DefaultLoader } from "./loader.styles";

const getLoaderType = (type: LoaderVariations) => ({
    [LoaderVariations.DEFAULT]: <DefaultLoader />,
    [LoaderVariations.SMALL]: <SmallLoader />
}[type]);

interface LoaderProps {
    type: LoaderVariations;
}

export const Loader = ({ type }: LoaderProps) => {
    const StyledLoader = getLoaderType(type);

    return (
        <LoaderContainer>
            {StyledLoader}
        </LoaderContainer>
    );
}