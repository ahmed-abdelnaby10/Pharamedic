import Providers from "@/lib/providers";

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>{children}</Providers>
    );
}