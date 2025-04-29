import { BackIcon, HELLO_PANEL_TEXT, Icon } from "@/shared";
import { DashboardControlPanel, IconContainer, TextContainer } from "./hello-panel.styles";


export const HelloPanelWidget = () => {
    return (
        <DashboardControlPanel>
            <IconContainer>
                <Icon pathIcon={BackIcon.src} alt="list-management" width={100} height={100} />
            </IconContainer>
            <TextContainer>
                <h2>
                    {HELLO_PANEL_TEXT}
                </h2>
            </TextContainer>
        </DashboardControlPanel>
    )
}