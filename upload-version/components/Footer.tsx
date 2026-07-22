export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-xl font-bold mb-4">
          Tokyo by LYA
        </h2>

        <p className="text-sm text-gray-400 mb-6">
          Premium Japanese Dining Experience
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-red-400">Instagram</a>
          <a href="#" className="hover:text-red-400">Facebook</a>
          <a href="#" className="hover:text-red-400">Twitter</a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Tokyo by LYA. All rights reserved.
        </p>

      </div>
    </footer>
  );
}