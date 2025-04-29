import { ROUTES } from "@/shared";



export const useGetRouteConfig = (path: string) => {
    const entry = Object.entries(ROUTES.CONFIGS).find(([_, config]) => config.PATH === path);
    const config = entry ? entry[1] : null;
    return { config };
}