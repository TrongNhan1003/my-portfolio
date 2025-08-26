export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Tên */}
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">
          Nguyễn Hồ Trọng Nhân
        </h1>

        {/* Menu điều hướng */}
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}
