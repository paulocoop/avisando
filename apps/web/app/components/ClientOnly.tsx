import { useEffect, useState, type ReactNode } from "react";

export default function ClientOnly({ children }: { children: ReactNode}) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), [setIsClient]);
    return isClient && children;
}