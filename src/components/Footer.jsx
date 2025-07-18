

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-4 text-center ">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Moo-Vies. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Made by Miko Gapasan
      </p>
    </footer>
  );
}