import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    name: string;
    href: string;
    elementID: string;
    className?: string;
    onClick?: Function;
    mobile?: boolean;
}

export const NavItem = ({
    name,
    href,
    className,
    mobile,
}: NavItemProps) => {
    const currentRoute = usePathname();

    return (
        <Link
            className={
                currentRoute === href
                    ? `text-primary ${className}`
                    : `text-neutral-800 visited:text-neutral-800 active:text-neutral-800 link:text-neutral-800 hover:text-primary ${
                          mobile
                              ? "text-white visited:text-white active:text-white link:text-white"
                              : ""
                      } ${className}`
            }
            href={href}>
            {name}
        </Link>
    );
};
