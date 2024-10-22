interface Props {
    className?: string
}

const Footer = ({className}: Props) => {
    return (
        <div className={`mt-14 p-4 md:p-8 md:w-[75vw] m-auto items-center ${className}`}>
            <a
                href="https://webeveyn.com/"
                className="text-sm text-neutral-500"
            >
                &copy; Copyright 2023 - Designed by webeveyn.com
            </a>
        </div>
    );
};

export default Footer;
