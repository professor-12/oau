import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}/home`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/health-center`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/login/undergraduate`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/login/staff`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/login/postgraduate`,
        },
    ];
}
