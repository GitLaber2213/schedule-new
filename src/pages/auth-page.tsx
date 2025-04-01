import { Auth } from "@/features"
import { Layout, LayoutVariations } from "@/shared"


export const AuthPage = () => {
    return (
        <Layout type={LayoutVariations.PAGE}>
            <Auth />
        </Layout>
    )
}