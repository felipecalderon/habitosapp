import { NextUIProvider } from "@nextui-org/react";

export default function NextUiProviderComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return <NextUIProvider>{children}</NextUIProvider>;
}
