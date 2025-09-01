import clsx from "clsx";
import { HashLink } from "react-router-hash-link";

type AnchorProps = {
    href: string;
    label: string;
    onClick: (label: string) => void;
    currentPage: string | null;
}

const Anchor = ({ href, label, onClick, currentPage }: AnchorProps) => {
    const lowercaseLabel = label.toLowerCase();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: "smooth", block: "start" })
        onClick(lowercaseLabel);
    }

    if (href?.startsWith("/#")) {
        return (
        <HashLink
            to={href}
            smooth
            scroll={(el: any) => {
            const OFFSET = 96; // adjust to your sticky header height
            const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
            window.scrollTo({ top: y, behavior: "smooth" });
            }}
            className={clsx("text-lg hover:text-gray-400 cursor-pointer",
                        currentPage === lowercaseLabel ? "text-gray-400 pointer-events-none" : "text-white"
            )}
        >
            {label}
        </HashLink>
        );
    }

    return (
        <a href={href}
            onClick={handleClick}
            className={clsx("text-lg hover:text-gray-400 cursor-pointer",
                            currentPage === lowercaseLabel ? "text-gray-400 pointer-events-none" : "text-white"
            )}
        >
            {label}
        </a>
    );
};

export default Anchor;