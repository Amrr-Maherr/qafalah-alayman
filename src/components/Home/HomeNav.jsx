import Logo from "../Logo";

export default function HomeNav() {
    return (
        <>
        <nav className="flex items-center justify-end p-10 gap-[14px] z-20 relative hidden md:flex">
                <h3 className="text-[28px] font-bold text-white">الرئيسيه</h3>
                <Logo />
              </nav>
        </>
    )
}