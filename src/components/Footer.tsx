import basic from "@/_contents/basic.json";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white">
      <p>&copy; {basic.startYear} - {new Date().getFullYear()} {basic.name}</p>
    </footer>
  );
}
