import Link from "next/link";


const Navbar = () => {
	return (
    <nav className="hidden lg:block contain navbar sticky top-0 z-50 bg-white font-heading text-xl text-mdgray mt-4 px-3">
      <div className="flex justify-between py-4">
        <div className="navbar-brand">
        <Link href="/" className="font-heading text-xl tracking-wider z-50 transition-colors duration-300">
          Elif Chorghay
        </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end flex gap-6">
            <Link href="/about" className="navbar-item">
              About
            </Link>
            <Link href="/projects" className="navbar-item">
              Projects
            </Link>
            <Link href="/blog" className="navbar-item">
              Blog
            </Link>
            <Link href="/ElifsResume.pdf" target="_blank" className="navbar-item">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
